import { Router } from 'express';
import { DonorController } from '../../controller/DonorController';

const router = Router();
const donorController = new DonorController();

router.route('/getDonors').get(donorController.getDonors);
router.route('/getDonorByID/:id').get(donorController.getDonorByID);
router
  .route('/getDonorsByPage/:pageNumber')
  .get(donorController.getDonorsByPage);

router.put('/editDonor/:id', donorController.editDonor);
router.post('/addDonor', donorController.addDonor);
router.delete('/deleteDonor/:id', donorController.deleteDonorByID);
export default router;
// router.route('/customSearch').post(donorController.getCustomSearch);
// router.route('/downloadFile').get(donorController.sendCustomSearchFile);
