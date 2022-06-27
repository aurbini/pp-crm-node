import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { SearchCategory } from 'src/app/services/search.service';
import { SearchService } from '../../services/search.service';
import { NoteService } from 'src/app/services/note.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'search-app',
  templateUrl: 'search.component.html',
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  categories: SearchCategory[];
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private noteService: NoteService
  ) {
    this.categories = searchService.getSearchCategories();
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  ngOnInit() {}
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  async onSubmit() {
    // console.log(this.form.value);
    try {
      await this.searchService.customDonorSearch(this.form.value);
      await this.searchService.downloadCustomDonorSearch();
    } catch (err) {
      console.log(err);
    }
    // const post = this.noteService.createNote(this.form.value);
    // console.log(post);
  }
}
