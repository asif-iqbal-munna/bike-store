import { IOrder } from './order.interface';
import Order from './order.model';

export const createOrder = async (order: IOrder): Promise<IOrder> => {
  const newOder = new Order(order);

  return newOder.save();
};

export const findTotalRevenue = async () => {
  return Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
};
