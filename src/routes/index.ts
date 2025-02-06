import express from 'express';
import productRoutes from '../modules/products/product.routes';
import orderRoutes from '../modules/orders/order.routes';
import { authRoutes } from '../modules/auth/auth.route';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/auth', authRoutes);

export default router;
