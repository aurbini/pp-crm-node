import { Router } from 'express';
import { DonorController } from '../../controller/DonorController';

const router = Router();
const donorController = new DonorController();

router.route('/getDonors').get(donorController.getDonors);
router.route('/getDonorByID/:id').get(donorController.getDonorByID);

router.put('/editDonor/:id', donorController.editDonor);
router.post('/addDonor', donorController.addDonor);
router.delete('/deleteDonor/:id', donorController.deleteDonorByID);
export default router;
