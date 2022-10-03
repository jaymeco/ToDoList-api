import { Router } from "express";
import { authController } from "../controllers/AuthController";

const authRouter = Router();

authRouter.post('/login', authController.login);

export default authRouter;
