import { Request, Response } from "express";
import { getMovieData } from "../services/movieData";

const getMovieDataController = async (req: Request, res: Response) => {
  const dataMovie = await getMovieData();
  res.json(dataMovie);
};

export { getMovieDataController };
