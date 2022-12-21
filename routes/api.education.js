const express = require("express");
const router = express.Router();
const fs = require("fs");
const { uuid } = require("uuidv4");
const Videos = require("../models/SchemaVideos.js");
const QA = require("../models/SchemaQA.js");

const videos = "./data/videoData.json";

/*
 *read video.json file
 */
function readVideoData(callback) {
  fs.readFile("./data/videoData.json", "utf8", callback);
}

/*
 *read ewaste questions file
 */
function readQuestionData(callback) {
  fs.readFile("./data/ewastequestions.json", "utf8", callback);
}

/*
 *write the questions to file
 */
function writeQuestionData(data) {
  fs.writeFile("./data/ewastequestions.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

/*
 *Connection to MongoDB
 */
router.get("/", async (req, res) => {
  try {
    const dataVideos = await Videos.find();
    res.send(dataVideos);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

/*
 *Connection to MongoDB
 */
router.get("/questions", async (req, res) => {
  try {
    const dataQA = await QA.find();
    res.send(dataQA);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

/*
 *posting to mongodb database questionsanswers
 */
router.post("/questions/new", (req, res) => {
  let newQuestion = {
    questions: req.body.question,
    answer: "Will be answered soon...",
  };
  new QA(newQuestion).save();
});

/*
 *Connection to MongoDB
 */
router.get("/questions/:id", async (req, res) => {
  try {
    const dataQA = await QA.findOne({ _id: req.params.id });
    res.send(dataQA);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

/*
 *Connection to MongoDB
 */
router.get("/:id", async (req, res) => {
  try {
    const videoData = await Videos.findOne({ _id: req.params.id });
    res.send(videoData);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

module.exports = router;
