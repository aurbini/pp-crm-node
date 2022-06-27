import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { IDonor } from '../../models/donor.model';
import { INote } from '../../models/note.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-donor-notes',
  templateUrl: './donor-notes.component.html',
  styleUrls: ['./donor-notes.component.css'],
})
export class DonorNotesComponent implements OnInit {
  @Input() donor!: IDonor;
  notes!: INote[];
  displayAddNote: boolean = false;
  noteForm!: FormGroup;
  constructor(private noteSvc: NoteService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getNotes();
    this.initNoteFormFields();
  }
  getNotes() {
    this.noteSvc.getNotesByDonorID(this.donor.ID).subscribe((data: INote[]) => {
      this.notes = data;
      console.log(this.notes);
    });
  }
  initNoteFormFields() {
    this.noteForm = this.formBuilder.group({
      text: ['', Validators.required],
      createdBy: ['', Validators.required],
      updatedBy: [''],
      donor: [''],
    });
  }
  openAddNoteModal() {
    this.displayAddNote = true;
  }
  onNoteFormSubmit() {
    this.noteForm.get('createdBy')!.setValue('user name');
    this.noteForm.get('updatedBy')!.setValue('user name');
    this.noteForm.get('donor')!.setValue(this.donor.ID);
    this.noteSvc.createNote(this.noteForm.value).subscribe((data: INote) => {
      console.log(data);
      this.notes.push(data);
    });
    this.displayAddNote = false;
  }
  onAddNoteCancel() {
    this.noteForm.reset();
    this.displayAddNote = false;
  }
  onDeleteNote(selectedNoteID: string) {
    this.noteSvc.deleteNote(selectedNoteID).subscribe((data) => {
      this.notes = this.notes.filter((note) => {
        return note.ID !== selectedNoteID;
      });
      console.log(this.notes);
    });
  }
}
