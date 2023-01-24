const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: mongoose.Types.ObjectId,
    ref: "Genre",
  },
  feedback: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
  rent: {
    type: Boolean,
    default: false,
  },
  rentUserId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;
