import { Router } from 'express';
import { VoterController } from '../../controller/VoterController';

const router = Router();
const voterController = new VoterController();

router.route('/getVoters').get(voterController.getVoters);

export default router;
