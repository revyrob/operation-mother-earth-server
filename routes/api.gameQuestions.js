const express = require("express");
const router = express.Router();
const fs = require("fs/promises");

const questions = "./data/gameQuestionsEnglish.json";
// const questions = "./data/gameQuestionsLevel.json";

/*
 *Get all the questions
 */
router.get("/", (req, res) => {
  fs.readFile(questions, "utf-8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("error reading file");
    });
});

module.exports = router;
