import { Request, Response } from 'express';
import { NoteService } from '../service/notes.service';

export class NotesController {
  notesService: NoteService;

  constructor() {
    this.notesService = new NoteService();
  }
  public getNotesByDonorID = async (req: Request, res: Response) => {
    const notes = await this.notesService.getNotesByDonor(req.params.id);
    res.send(notes).json;
  };
  public addNote = async (req: Request, res: Response) => {
    const note = await this.notesService.saveNote(req.body);
    res.json({
      Message: 'New Note created successfully with name id' + note.id,
    });
  };
  public deleteNote = async (req: Request, res: Response) => {
    await this.notesService.deleteNote(req.params.id);
    res.json({ success: 'Deleted Note Successfully' });
  };
}
