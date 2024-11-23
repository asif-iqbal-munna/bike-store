import express from 'express';
import {
  createProductHandler,
  // getAllProducts
} from './product.controller';
import { validateResource } from '../../middlewares/validateRequest';
import { ProductSchema } from './product.schema';

const router = express.Router();

router.post('/', validateResource(ProductSchema), createProductHandler);
// router.get('/', validateResource(ProductSchema), getAllProducts);

export default router;
