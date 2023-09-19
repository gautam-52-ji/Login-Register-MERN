import express from "express";
import { getMovieDataController } from "../controller/movieDataServiceController";
import { authenticate } from "../middleware/authenticate";

const movieDataRouter = express.Router();

movieDataRouter.get("/data", authenticate, getMovieDataController);

export default movieDataRouter;
