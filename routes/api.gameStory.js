const express = require("express");
const router = express.Router();
const fs = require("fs");
const Story = require("../models/SchemaStory.js");

// const story = "./data/gameStoryboardEnglish.json";

/*
 *Get all the questions
 */
// router.get("/", (req, res) => {
//   fs.readFile(story, "utf-8")
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(400).send("error reading file");
//     });
// });

/*
 *Connection to MongoDB
 */
router.get("/", async (req, res) => {
  try {
    const storyboards = await Story.find();
    res.send(storyboards);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

module.exports = router;