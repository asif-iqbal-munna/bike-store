import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../libs/responseHandler';
import { createProduct } from './product.service';

export const createProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await createProduct(req.body);

    sendResponse(res, {
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// export const getAllProducts = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {

//     const
//   } catch (error) {
//     next(error);
//   }
// };
