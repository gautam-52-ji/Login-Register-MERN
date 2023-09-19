import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const myKey = process.env.SECRET_CODE as Secret;
    const requestHeader = req.header("Authorization") as string;
    const token = requestHeader.split(" ")[1];
    jwt.verify(token, myKey);
    next();
  } catch (error) {
    next("Not Authorized");
  }
};

export { authenticate };
