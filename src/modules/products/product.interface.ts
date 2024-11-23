import { HydratedDocument, Model } from 'mongoose';

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

interface IProductMethods {
  fullName(): string;
}

interface ProductModel
  extends Model<IProduct, Record<string, never>, IProductMethods> {
  createWithFullName(
    // eslint-disable-next-line no-unused-vars
    name: string,
  ): Promise<HydratedDocument<IProduct, IProductMethods>>;
}

export { IProduct, IProductMethods, ProductModel };
