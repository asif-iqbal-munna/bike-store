import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../libs/responseHandler';
import { createOrder, findTotalRevenue } from './order.service';

export const createOrderHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = req.body;

    const order = await createOrder(payload);

    return sendResponse(res, {
      success: true,
      message: 'Order created successfully',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

export const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const revenue = await findTotalRevenue();

    return sendResponse(res, {
      success: true,
      message: 'Revenue calculated successfully',
      data: revenue,
    });
  } catch (error) {
    next(error);
  }
};
