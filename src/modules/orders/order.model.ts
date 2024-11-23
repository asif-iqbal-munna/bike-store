import { Schema } from 'mongoose';
import { IOrder, IOrderMethods, OrderModel } from './order.interface';

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
