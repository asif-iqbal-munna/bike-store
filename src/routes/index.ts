import express from 'express';
import productRoutes from '../modules/products/product.routes';

const router = express.Router();

router.use('/products', productRoutes);
// router.use('/orders');

export default router;
