const express = require("express");
const router = express.Router();
const fs = require("fs/promises");

/*
 *read game questions from json file
 */
function loadQuestionData(callback) {
  fs.readFile("./data/gameQuestionsEnglish.json", "utf8", callback);
}

/*
 *Get all the questions
 */
router.get("/", (req, res) => {
  loadQuestionData((err, data) => {
    if (err) {
      res.send("error while getting question data");
      //loop throug the data just taking the
    } else {
      const questions = JSON.parse(data);
      res.json(videos);
    }
  });
});
