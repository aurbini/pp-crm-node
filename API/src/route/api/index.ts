import { Router } from 'express';
import DonorRoutes from './donor.route';
import NoteRoutes from './note.route';
import DonationRoutes from './donation.route';
import VoterRoutes from './voter.route';
import CustomSearchRoutes from './customSearch.route';
const router = Router();

router.use('/donors', DonorRoutes);
router.use('/notes', NoteRoutes);
router.use('/voter', VoterRoutes);
router.use('/donations', DonationRoutes);
router.use('/search', CustomSearchRoutes);
export default router;
