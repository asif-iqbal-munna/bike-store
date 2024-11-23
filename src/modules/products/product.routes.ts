import express from 'express';
import {
  createProductHandler,
  getAllProducts,
  getProductById,
  updateProductHandler,
} from './product.controller';
import { validateResource } from '../../middlewares/validateRequest';
import { ProductSchema } from './product.schema';

const router = express.Router();

router.post('/', validateResource(ProductSchema), createProductHandler);

router.get('/', getAllProducts);

router.get('/:productId', getProductById);

router.put('/:productId', updateProductHandler);

export default router;
