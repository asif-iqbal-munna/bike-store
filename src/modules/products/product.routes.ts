import express from 'express';
import {
  createProductHandler,
  getAllProducts,
  getProductById,
  updateProductHandler,
  deleteProductById,
} from './product.controller';
import { validateResource } from '../../middlewares/validateRequest';
import { ProductSchema, ProductSchemaUpdate } from './product.schema';

const router = express.Router();

router.post('/', validateResource(ProductSchema), createProductHandler);

router.get('/', getAllProducts);

router.get('/:productId', getProductById);

router.put(
  '/:productId',
  validateResource(ProductSchemaUpdate),
  updateProductHandler,
);
router.delete('/:productId', deleteProductById);

export default router;
