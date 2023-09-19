import { NextFunction, Request, Response } from "express";
import { userSchema } from "../Schema/userJoi";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};

export { validate };
