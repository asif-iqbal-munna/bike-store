import { IProduct } from './product.interface';
import Product from './product.model';

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  return Product.create(product);
};

export const findProducts = async (query: object): Promise<IProduct[] | []> => {
  return Product.find(query);
};

export const findProductById = async (
  productId: string,
): Promise<IProduct | null> => {
  return Product.findById(productId);
};

export const updateProduct = async (
  productId: string,
  product: IProduct,
): Promise<IProduct | null> => {
  return Product.findByIdAndUpdate(productId, product, { new: true });
};
