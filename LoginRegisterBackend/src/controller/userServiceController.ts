import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/userServices";

const registerUserController = async (req: Request, res: Response) => {
  const registerNewUser = await registerUser(req.body);
  res.json({ message: registerNewUser });
};

const loginUserController = async (req: Request, res: Response) => {
  const userLogin = await loginUser(req.body);
  res.json(userLogin);
};

export { registerUserController, loginUserController };
