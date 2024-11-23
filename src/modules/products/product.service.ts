import { IProduct } from './product.interface';
import Product from './product.model';

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  return Product.create(product);
};
