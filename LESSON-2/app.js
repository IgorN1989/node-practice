import { program } from "commander";

import {
  addMovie,
  deleteMovieById,
  getAllMovies,
  getMovieById,
  updateMovieById,
} from "./movies/index.js";

// getAllMovies()
//   .then((movies) => console.log(movies))
//   .catch((error) => console.error(error.message));

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allMovies = await getAllMovies();
      return console.log(allMovies);
    case "getById":
      const oneMovie = await getMovieById(id);
      return console.log(oneMovie);
    case "add":
      const newMovie = await addMovie(data);
      return console.log(newMovie);
    case "updateById":
      const updateMovie = await updateMovieById(id, data);
      return console.log(updateMovie);
    case "deleteById":
      const deleteMovie = await deleteMovieById(id);
      return console.log(deleteMovie);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "fdfsff" });
// invokeAction({ action: "add", title: "Mad Max", director: "Miller" });
// invokeAction({ action: "updateById", id: "12345", title: "Avengers 2" });
// invokeAction({ action: "deleteById", id: "12345" });

// console.log(process.argv);

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction({ action });
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-t, --title <type>")
  .option("-d, --director <type>");

program.parse();

const options = program.opts();
invokeAction(options);
