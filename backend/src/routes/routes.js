const express = require("express");
const Image = require("../model/Image");

const router = express.Router();

router.get("/get-splash-image", async (req, res) => {
  try {
    const foundImage = await Image.find({});
    console.log(foundImage);
    return res.status(200).json({
      image: foundImage[0],
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
