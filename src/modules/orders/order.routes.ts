import express from 'express';
import { validateResource } from '../../middlewares/validateRequest';
import { OrderSchema } from './order.schema';
import { createOrderHandler, calculateRevenue } from './order.controller';

const router = express.Router();

router.post('/', validateResource(OrderSchema), createOrderHandler);
router.get('/revenue', calculateRevenue);

export default router;
