import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  releaseYear: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  mainActors: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  studio: {
    type: String,
    required: true
  },
  
});

export const Movie = mongoose.model('Movie', movieSchema);


