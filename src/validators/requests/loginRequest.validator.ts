import { body } from "express-validator";
import { validationErrors } from "../../constants/errors";
import requestValidatorMiddleware from "../../middlewares/requestValidator.middleware";

export default requestValidatorMiddleware([
  body('login')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isString().withMessage(validationErrors.type),
  body('password')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isLength({ min: 5 }).withMessage(validationErrors.minLength),
]);
