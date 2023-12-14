import fs from "fs/promises";
import path from "path";

const moviesPath = path.resolve("movies", "movies.json");

const updateMovies = (movies) =>
  fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const getAllMovies = async () => {
  const data = await fs.readFile(moviesPath);
  return JSON.parse(data);
};

export const getMovieById = async (id) => {
  const movies = getAllMovies();
  const result = movies.find((movie) => movie.id === id);
  return result || null;
};

export const addMovie = async (data) => {
  const movies = await getAllMovies();
  const newMovie = {
    id: "gfgff",
    ...data,
  };
  movies.push(newMovie);
  await updateMovies(movies);
  return newMovie;
};

export const updateMovieById = async (id, data) => {
  const movies = await getAllMovies();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return null;
  }
  movies[index] = { ...movies[index], ...data };
  await updateMovies(movies);
  return movies[index];
};

export const deleteMovieById = async (id) => {
  const movies = await getAllMovies();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) {
    return null;
  }
  const [deleteMovie] = movies.splice(index, 1);
  await updateMovies(movies);
  return deleteMovie;
};
