import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../libs/responseHandler';
import {
  createProduct,
  findProductById,
  findProducts,
  updateProduct,
} from './product.service';

export const createProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await createProduct(req.body);

    return sendResponse(res, {
      success: true,
      message: 'Bike created successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { searchTerm }: { searchTerm?: string | number | undefined } =
      req.query;

    let query = {};

    if (searchTerm)
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      };

    const products = await findProducts(query);

    return sendResponse(res, {
      success: true,
      message: 'Bikes retrieved successfully',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const product = await findProductById(productId);

    return sendResponse(res, {
      success: true,
      message: 'Bike retrieved successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const product = await findProductById(productId);

    if (!product) {
      return sendResponse(res, {
        success: false,
        message: 'Bike not found',
      });
    }

    const response = await updateProduct(productId, req.body);

    return sendResponse(res, {
      success: true,
      message: 'Bike updated successfully',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
