import express from 'express'
const router = express.Router();

import {homeController} from '../controllers/homeController.js'
import { invoiceController } from '../controllers/invoiceController.js';
import { invoice_listController } from '../controllers/invoice_listController.js';
import { invoice_reportController } from '../controllers/invoice_reportController.js';
import { invoice_returnController } from '../controllers/invoice_returnController.js';
import { invoice_return_reportController } from '../controllers/invoice_return_reportController.js';
import { sale_entryController } from '../controllers/sale_entryController.js';

router.get('/', homeController)
router.get('/invoice', invoiceController)
router.get('/invoice_report', invoice_reportController)
router.get('/invoice_list', invoice_listController)
router.get('/invoice_return', invoice_returnController)
router.get('/invoice_return_report', invoice_return_reportController)
router.get('/sale_entry', sale_entryController)

export default router;