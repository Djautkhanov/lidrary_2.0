const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: String,
});

const Genres = mongoose.model("Genre", genreSchema);
module.exports = Genres;
