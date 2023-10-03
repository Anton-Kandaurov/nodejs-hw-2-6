import express from "express";
import authController from "../../controllers/auth/index.js";
import { isValidId, authentication } from "../../middlewars/index.js";

const authRouter = express.Router();

authRouter.post("/users/register", authController.register);

authRouter.post("/users/login", authController.login);

authRouter.get("/users/current", authentication, authController.getCurrent);

authRouter.post("/users/logout", authentication, authController.logout);

authRouter.patch("/users", authentication, authController.subscriptionUpdate);

export default authRouter;