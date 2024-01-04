import mongoose from "mongoose";

import app from "./app.js";

// VQQQLHPjxlxuaZ7Y

const DB_HOST =
  "mongodb+srv://IgorN1989:VQQQLHPjxlxuaZ7Y@cluster0.btkirmo.mongodb.net/my-movies?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
