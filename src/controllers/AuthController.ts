import { NextFunction, Request, Response } from "express";
import { errors } from "../constants/errors";

class AuthController {
  async login(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const { login, password } = request.body;

      if (login !== 'jayme') {
        throw { code: errors.AUTH_CREDENTIALS }
      }

      return response.json({
        access_token: 'token',
        expires_in: '18000',
        user: {
          id: 1,
          name: 'guest',
          access: 'guest',
          uuid: '55d44wd'
        },
      })
    } catch (error: any) {
      next(error);
    }
  }
}

const authController = new AuthController();

export { authController };
