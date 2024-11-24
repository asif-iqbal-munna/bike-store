import express from 'express';
import productRoutes from '../modules/products/product.routes';
import orderRoutes from '../modules/orders/order.routes';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

export default router;
