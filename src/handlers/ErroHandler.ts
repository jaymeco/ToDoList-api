import { NextFunction, Request, Response } from "express";
import { errors } from "../constants/errors";

interface ErrorUnhadled {
  code: string;
}

class ErrorHandler {
  public handle(
    error: any,
    request: Request,
    response: Response,
    next: NextFunction,
  ): any {

    switch (error.code) {
      case errors.AUTH_CREDENTIALS:
        return response.status(401).json({
          code: errors.AUTH_CREDENTIALS,
          message: 'Usuário e senha estão incorretos',
        });
      default:
        return response.status(500).json({
          code: errors.INTERNAL_ERROR,
          message: 'Ocorreu um erro interno',
        });
    }
  }
}

const errorHandler = new ErrorHandler();

export { errorHandler };
