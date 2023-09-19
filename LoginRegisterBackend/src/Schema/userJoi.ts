import Joi from "joi";

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export { userSchema };
