const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Images", ImageSchema);
