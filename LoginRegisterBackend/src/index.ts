import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";
import { config } from "dotenv";
import movieDataRouter from "./routes/movieData";
import cors from "cors";

config();

var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/LoginRegister");

app.use("/user", userRouter);
app.use("/movie", movieDataRouter);

app.listen(3000);
