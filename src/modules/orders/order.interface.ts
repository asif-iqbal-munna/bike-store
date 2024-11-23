import { Model, HydratedDocument, Types } from 'mongoose';

interface IOrder {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

interface IOrderMethods {
  fullName(): number;
}

interface OrderModel
  extends Model<IOrder, Record<string, never>, IOrderMethods> {
  createWithFullName(
    // eslint-disable-next-line no-unused-vars
    name: string,
  ): Promise<HydratedDocument<IOrder, IOrderMethods>>;
}

export { IOrder, IOrderMethods, OrderModel };
