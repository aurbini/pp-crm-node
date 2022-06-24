import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INote } from '../models/note.model';

@Injectable({ providedIn: 'root' })
export class NoteService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getNotesByDonorID(donorID: number) {
    return this.http.get<INote[]>(
      this.baseUrl + 'api/notes/getNotes/' + donorID
    );
  }
  createNote(note: INote) {
    return this.http.post(this.baseUrl + 'api/notes/addNote', note);
  }
  deleteNote(noteId: string) {
    console.log('Note ID' + noteId);
    return this.http.delete(this.baseUrl + 'api/notes/deleteNote/' + noteId);
  }
}
