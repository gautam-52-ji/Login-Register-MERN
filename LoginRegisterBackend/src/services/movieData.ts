import axios from "axios";

const getMovieData = async () => {
  const movieDBToken = process.env.MOVIE_DB_TOKEN;
  const movieData = await axios.get(
    "https://api.themoviedb.org/3/discover/movie",
    {
      headers: { Authorization: `Bearer ${movieDBToken}` },
    }
  );

  return movieData.data.results;
};

export { getMovieData };
