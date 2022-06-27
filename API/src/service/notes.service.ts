import { Notes } from '../entity/Note';
import { AppDataSource } from '../data-source';
// import { NoteDto } from '../DTO/note.dto';
export class NoteService {
  noteRepo: any;
  constructor() {
    this.noteRepo = AppDataSource.getRepository(Notes);
  }
  public getNotesByDonor = async (donorId: string) => {
    console.log(donorId);
    const notes = await this.noteRepo
      .createQueryBuilder('n')
      .select([
        'n.donor',
        'n.text',
        'n.ID',
        'n.updatedBy',
        'n.createdOn',
        'n.createdBy',
      ])
      .leftJoin('n.donor', 'd')
      .where(`d.ID = :dId`, { dId: donorId })
      .getMany();
    return notes;
  };
  public saveNote = async (note: any) => {
    const newNote = await this.noteRepo.create(note);
    await this.noteRepo.save(note);
    return newNote;
  };
  public deleteNote = async (id: string) => {
    const deletedNote = await this.noteRepo.delete(id);
    return deletedNote;
  };
}
