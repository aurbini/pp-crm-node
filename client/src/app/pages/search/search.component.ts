import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { NoteService } from 'src/app/services/note.service';
import { saveAs } from 'file-saver';
import { SearchType } from 'src/app/models/searchType.enum';
import { SearchCategory } from '../../models/searchCategory.interface';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'search-app',
  templateUrl: 'search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  categories: SearchCategory[];
  searchTypes = SearchType;
  userSearchType: SearchType;
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private noteService: NoteService,
    private spinner: NgxSpinnerService
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  ngOnInit() {
    this.userSearchType = SearchType.donor;
    this.getSearchCategories();
  }
  getSearchCategories() {
    this.categories = this.searchService.getSearchCategories(
      this.searchTypes.donor
    );
  }
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
  onChangeSearchType(userSearchType: SearchType) {
    this.userSearchType = userSearchType;
    console.log(userSearchType);
    this.categories = this.searchService.getSearchCategories(userSearchType);
    (this.form.controls['checkArray'] as FormArray).clear();
    console.log(this.form.controls);

    // console.log(this.categories);
  }
  async onSubmit() {
    this.spinner.show();
    try {
      console.log(this.form.value);
      await this.searchService.customSearch(
        this.form.value,
        this.userSearchType
      );
      this.searchService.downloadCustomDonorSearch(this.spinner);
      console.log('done searching');
    } catch (err) {
      console.log(err);
    }
  }
  resetForm() {
    this.getSearchCategories();
    (this.form.controls['checkArray'] as FormArray).clear();
  }
}
