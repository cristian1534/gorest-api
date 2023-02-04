const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  gender: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  status: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model("User", userSchema);
