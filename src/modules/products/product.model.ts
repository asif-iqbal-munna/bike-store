import { Schema, model } from 'mongoose';
import { IProduct, IProductMethods, ProductModel } from './product.interface';

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
  'createWithFullName',
  function createWithFullName(name: string) {
    const [firstName, lastName] = name.split(' ');
    return this.create({ firstName, lastName });
  },
);

productSchema.method('fullName', function fullName(): string {
  return this.name + ' ' + this.brand;
});

const Product = model<IProduct, ProductModel>('Product', productSchema);

export default Product;
