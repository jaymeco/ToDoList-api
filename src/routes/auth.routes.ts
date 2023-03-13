import { Router } from "express";
import { authController } from "../controllers/AuthController";
import loginRequestValidator from "../validators/requests/loginRequest.validator";

const authRouter = Router();

authRouter.post('/login', loginRequestValidator, authController.login);

export default authRouter;
