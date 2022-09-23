const express = require("express");
const router = express.Router();
const fs = require("fs/promises");

const story = "./data/gameStoryboardEnglish.json";

/*
 *Get all the questions
 */
router.get("/", (req, res) => {
  fs.readFile(story, "utf-8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("error reading file");
    });
});

module.exports = router;
