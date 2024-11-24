import { IOrder } from './order.interface';
import Order from './order.model';

export const createOrder = async (order: IOrder): Promise<IOrder> => {
  const newOder = new Order(order);

  return newOder.save();
};

export const findTotalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return { totalRevenue: result[0].totalRevenue };
};
