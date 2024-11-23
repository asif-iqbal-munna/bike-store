/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { ApiResponse } from '../types';

const sendResponse = <T>(res: Response, response: ApiResponse<T>): any => {
  const responseObj: ApiResponse<T> = {
    success: response.success,
    message: response.message,
  };

  if (response.data) {
    responseObj['data'] = response.data;
  }

  if (response.error) {
    responseObj['error'] = response.error;
    responseObj['stack'] = response.stack;
  }

  return res.status(response.code ? response.code : 500).json(responseObj);
};

export default sendResponse;
