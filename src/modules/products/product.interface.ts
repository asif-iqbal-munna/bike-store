import { Model } from 'mongoose';
import { ValidationReturn } from '../../types';

type ProductCategory = 'Mountain' | 'Road' | 'Hybrid' | 'Electric';

interface IProduct {
  name: string;
  brand: string;
  price: number;
  category: ProductCategory;
  description: string;
  quantity: number;
  inStock: boolean;
}

export type AllowedProductKeys = keyof IProduct;

interface IProductMethods {
  fullName(): string;
}

interface ProductModel
  extends Model<IProduct, Record<string, never>, IProductMethods> {
  validateUpdateKeys(
    // eslint-disable-next-line no-unused-vars
    payload: Partial<IProduct>,
  ): Promise<ValidationReturn>;
}

export { IProduct, IProductMethods, ProductModel };
