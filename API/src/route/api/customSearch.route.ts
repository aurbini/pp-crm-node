import { Router } from 'express';
import { CustomSearchController } from '../../controller/CustomSearchController';

const router = Router();
const customSearchController = new CustomSearchController();

router
  .route('/getCustomSearch/:searchType')
  .post(customSearchController.getDynamicSearchData);
router.route('/downloadFile').get(customSearchController.sendCustomSearchFile);

router
  .route('/downloadCustomFile/:searchType/:rows')
  .get(customSearchController.downloadReport);
export default router;
