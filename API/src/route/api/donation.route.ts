import { Router } from 'express';
import { DonationController } from '../../controller/DonationController';

const router = Router();
const donationController = new DonationController();

router.route('/getdonations').get(donationController.getDonations);
router
  .route('/getDonationsByDonor/:id')
  .get(donationController.getDonationsByDonorID);
export default router;
