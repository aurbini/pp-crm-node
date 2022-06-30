import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
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
  isAllCategoriesChecked = false;
  isError = false;
  errorMessage: string;
  @ViewChild('selectAllCategoriesCheck', { static: false })
  checkBox: ElementRef;
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private noteService: NoteService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
      rows: new FormControl(null, [
        Validators.required,
        Validators.max(2000),
        Validators.min(1),
      ]),
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
    this.categories = this.searchService.getSearchCategories(userSearchType);
    (this.form.controls['checkArray'] as FormArray).clear();
    this.form.reset();
    this.checkBox.nativeElement.checked = false;
    this.isAllCategoriesChecked = false;
  }
  async onSubmit() {
    this.spinner.show();

    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    const paramObj: any = {};
    checkArray.controls.forEach((element, index) => {
      paramObj[`param${index}`] = element.value;
    });
    this.searchService
      .downloadCustomReport(
        paramObj,
        this.userSearchType,
        this.form.get('rows')!.value,
        this.spinner
      )
      .subscribe(
        () => {
          this.toastr.success('Report Downloaded Successfully');
        },
        (error) => {
          this.spinner.hide();
          this.errorMessage = error.message;
          this.isError = true;
          this.toastr.error(
            'Server Error, please try again or reach out for help'
          );
        }
      );
  }
  onSelectAllCategories(event: Event) {
    const ischecked = (<HTMLInputElement>event.target).checked;
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (ischecked) {
      this.categories.forEach((category) => {
        checkArray.push(new FormControl(category.title));
      });
      this.isAllCategoriesChecked = true;
    } else {
      (this.form.controls['checkArray'] as FormArray).clear();
      this.isAllCategoriesChecked = false;
    }
  }
  resetForm() {
    this.getSearchCategories();
    (this.form.controls['checkArray'] as FormArray).clear();
  }
}
