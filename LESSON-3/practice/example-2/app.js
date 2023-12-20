import express from "express";

import movies from "./movies.js";

const app = express(); // app - web-server

app.get("/movies", (req, res) => {
  // res.send(movies);
  res.json(movies);
});

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
