import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { ErrorScope } from "../Enums/ErrorScope";

export default (rules: ValidationChain[] = []) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    await Promise.all(rules.map(rule => rule.run(request)));
    const errors = validationResult(request);


    if (!errors.isEmpty()) {
      response.status(400).json({
        scope: ErrorScope.VALIDATION,
        details: errors.array().map(error => ({
          field: error.param,
          code: error.msg,
        })),
      });
    }

    return next();
  }
};
