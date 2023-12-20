import express from "express";
import cors from "cors";

import movies from "./movies.js";

const app = express(); // app - web-server

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.use(cors());

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.use((req, res, next) => {
  console.log("Third middleware");
  next();
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
