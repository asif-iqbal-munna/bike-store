import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../libs/responseHandler';
import {
  createProduct,
  findProductById,
  findProducts,
  updateProduct,
  deleteProductByProductId,
} from './product.service';
import { IProduct } from './product.interface';
import Product from './product.model';
import { ValidationReturn } from '../../types';

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

    if (!product) {
      return sendResponse(res, {
        success: false,
        message: 'Bike not found',
        statusCode: 404,
      });
    }

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
        statusCode: 404,
      });
    }

    const payload: Partial<IProduct> = req.body;

    const { valid, message }: ValidationReturn =
      await Product.validateUpdateKeys(payload);

    if (!valid) {
      return sendResponse(res, {
        success: false,
        message,
        statusCode: 400,
      });
    }

    const response = await updateProduct(productId, payload);

    return sendResponse(res, {
      success: true,
      message: 'Bike updated successfully',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
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
        statusCode: 404,
      });
    }
    await deleteProductByProductId(productId);
    return sendResponse(res, {
      success: true,
      message: 'Bike deleted successfully',
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
