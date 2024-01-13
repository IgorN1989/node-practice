import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleSaveError, addUpdateSettings } from "./hooks.js";

// ================================================================

const genreList = ["fantastic", "love story"];
const releaseYearRegExp = /^\d{4}$/;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    genre: {
      type: String,
      enum: genreList,
      required: true,
    },
    releaseYear: {
      type: String,
      match: releaseYearRegExp,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const movieAddSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string()
    .valid(...genreList)
    .required(),
  releaseYear: Joi.string().pattern(releaseYearRegExp).required(),
});

export const movieUpdateSchema = Joi.object({
  title: Joi.string(),
  director: Joi.string(),
  favorite: Joi.boolean(),
  genre: Joi.string().valid(...genreList),
  releaseYear: Joi.string().pattern(releaseYearRegExp),
});

export const movieUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

movieSchema.post("save", handleSaveError);

movieSchema.pre("findOneAndUpdate", addUpdateSettings);

movieSchema.post("findOneAndUpdate", handleSaveError);

const Movie = model("movie", movieSchema);

export default Movie;
