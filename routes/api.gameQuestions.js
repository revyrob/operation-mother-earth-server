const express = require("express");
const router = express.Router();
const fs = require("fs/promises");
const Questions = require("../models/Schemas.js");

// const questions = "./data/gameQuestionsEnglish.json";
// const questions = "./data/gameQuestionsLevel.json";

/*
 *Get all the questions
 */
// router.get("/"
//, (req, res) => {
//   fs.readFile(questions, "utf-8")
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
    //creates a const and awaits the data from Questions schema
    const question = await Questions.find({});
    //sends back the const above
    res.send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

module.exports = router;
