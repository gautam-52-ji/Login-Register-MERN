import express from "express";
import {
  loginUserController,
  registerUserController,
} from "../controller/userServiceController";
import { validate } from "../validation/joiValidation";

const userRouter = express.Router();

userRouter.post("/register", validate, registerUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
