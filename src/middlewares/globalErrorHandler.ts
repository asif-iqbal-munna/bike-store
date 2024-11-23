/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../libs/responseHandler';

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log({ errName: error.name });

  if (error.name === 'ValidationError')
    return sendResponse(res, {
      success: false,
      code: 400,
      message: 'Input validation error',
      error,
      stack: error.stack,
    });
  if (error.name === 'CastError')
    return sendResponse(res, {
      success: false,
      code: 400,
      message: 'Input type error',
      error,
      stack: error.stack,
    });
  if (error.code === 11000)
    return sendResponse(res, {
      success: false,
      code: 400,
      message: 'Input contains duplicate data',
      error,
      stack: error.stack,
    });

  if (error.name === 'ZodError')
    return sendResponse(res, {
      success: false,
      code: 400,
      message: error.issues[0].message,
      error: error.issues[0],
      stack: error.stack,
    });

  return sendResponse(res, {
    success: false,
    code: 500,
    message: 'Something went wrong',
    error,
    stack: error.stack,
  });
};
