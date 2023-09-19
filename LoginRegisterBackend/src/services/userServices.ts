import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { userModel } from "../models/userModel";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ICredentials {
  email: string;
  password: string;
}

const registerUser = async (user: IUser) => {
  const { firstName, lastName, email, password } = user;
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPass,
  };

  const userCreated = await userModel.create(newUser);
  if (userCreated) {
    return `${firstName} ${lastName} your account Created Successfully"`;
  } else {
    return "Account not created";
  }
};

const loginUser = async (userCredentials: ICredentials) => {
  const { email: emailEntered, password: passwordEntered } = userCredentials;
  const findUser = (await userModel.findOne({ email: emailEntered })) as IUser;

  if (!findUser) {
    return { message: "Email or password is not correct" };
  }
  const isPasswordCorrect = await bcrypt.compare(
    passwordEntered,
    findUser.password
  );

  if (!isPasswordCorrect) {
    return { message: "Email or password is not correct" };
  }

  const myKey = process.env.SECRET_CODE as Secret;

  const payLoad = {
    firstName: findUser.firstName,
    lastName: findUser.lastName,
    email: findUser.email,
  };

  const token = jwt.sign(payLoad, myKey);
  return { token: token, message: "Logged In" };
};

export { registerUser, loginUser };
