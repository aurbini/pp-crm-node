import { Router } from 'express';
import { NotesController } from '../../controller/NotesController';

const router = Router();
const notesController = new NotesController();

router.route('/getNotes/:id').get(notesController.getNotesByDonorID);
router.route('/addNote').post(notesController.addNote);

router.delete('/deleteNote/:id', notesController.deleteNote);
export default router;
