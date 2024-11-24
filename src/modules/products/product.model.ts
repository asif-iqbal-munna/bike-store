import { Schema, model } from 'mongoose';
import { IProduct, IProductMethods, ProductModel } from './product.interface';
import { ValidationReturn } from '../../types';
const productSchema = new Schema<IProduct, ProductModel, IProductMethods>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    brand: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

productSchema.static(
  'validateUpdateKeys',
  function validateUpdateKeys(payload: Partial<IProduct>): ValidationReturn {
    const validKeys: (keyof IProduct)[] = [
      'name',
      'brand',
      'price',
      'description',
      'category',
      'quantity',
      'inStock',
    ];

    const invalidKeys = Object.keys(payload).filter(
      (key) => !validKeys.includes(key as keyof IProduct),
    );

    if (invalidKeys.length > 0) {
      return {
        valid: false,
        message: `Invalid keys in payload: ${invalidKeys.join(', ')}`,
      };
    }

    return { valid: true, message: 'Success' };
  },
);

productSchema.method('fullName', function fullName(): string {
  return this.name + ' ' + this.brand;
});

const Product = model<IProduct, ProductModel>('Product', productSchema);

export default Product;
