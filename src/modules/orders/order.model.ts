/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { IOrder, IOrderMethods, OrderModel } from './order.interface';
import Product from '../products/product.model';

const orderSchema = new Schema<IOrder, OrderModel, IOrderMethods>({
  email: { type: String, required: true, trim: true },
  product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true, min: 0 },
});

orderSchema.static(
  'createWithFullName',
  function createWithFullName(name: string) {
    console.log(name);
  },
);

orderSchema.method('fullName', function fullName(): string {
  return this.email;
});

orderSchema.pre('save', async function (this: any, next: any) {
  try {
    console.log('executing pre save');

    const product = await Product.findOne({
      _id: this.product,
      inStock: true,
    });

    if (!product?.inStock) {
      throw new Error('Product is out of stock');
    }

    if ((product?.quantity as number) < this.quantity) {
      throw new Error('Product quantity is not enough');
    }

    next();
  } catch (error) {
    throw next(error);
  }
});

orderSchema.post('save', async function (doc: any, next: any) {
  try {
    console.log('executing post save');
    await Product.updateOne({ _id: doc.product }, [
      {
        $set: {
          quantity: { $max: [0, { $subtract: ['$quantity', doc.quantity] }] },
          inStock: { $gt: [{ $subtract: ['$quantity', doc.quantity] }, 0] },
        },
      },
    ]);
    next();
  } catch (error) {
    throw next(error);
  }
});

const Order = model<IOrder, OrderModel>('Order', orderSchema);

export default Order;
