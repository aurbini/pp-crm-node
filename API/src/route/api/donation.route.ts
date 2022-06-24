import { Router } from 'express';
import { DonationController } from '../../controller/DonationController';

const router = Router();
const donationController = new DonationController();

router.route('/getdonations').get(donationController.getDonations);

export default router;
