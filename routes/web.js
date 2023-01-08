import express from 'express'
const router = express.Router();

import {homeController} from '../controllers/homeController.js'
import { invoiceController } from '../controllers/invoiceController.js';

router.get('/', homeController)
router.get('/invoice', invoiceController)



export default router;