const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  basket: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
    },
  ],

  isBlocked: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
