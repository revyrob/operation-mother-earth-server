const express = require("express");
const router = express.Router();
const fs = require("fs");
const { uuid } = require("uuidv4");
const Videos = require("../models/SchemaVideos.js");
const QA = require("../models/SchemaQA.js");
const Questions = require("../models/Schemas.js");

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
 *Get all the videos
 */
// router.get("/", (req, res) => {
//   readVideoData((err, data) => {
//     if (err) {
//       res.send("error while getting video data");
//     } else {
//       const videos = JSON.parse(data).map((e) => {
//         return {
//           title: e.title,
//           source: e.source,
//           image: e.image,
//           id: e.id,
//         };
//       });
//       res.status(200).send(data);
//     }
//   });
// });

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
 *Get all the questions
 */
// router.get("/questions", (req, res) => {
//   readQuestionData((err, questions) => {
//     if (err) {
//       res.send("error while getting question data");
//     } else {
//       const question = JSON.parse(questions);
//       res.status(200).send(questions);
//     }
//   });
// });

/*
 *Connection to MongoDB
 */
router.get("/questions", async (req, res) => {
  try {
    const dataQA = await QA.find();
    // console.log(dataQA);
    res.send(dataQA);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

// router.post("/questions/new", (req, res) => {
//   readQuestionData((err, questionData) => {
//     if (err) {
//       res.send("error while getting question data");
//     } else {
//       //get the info and parse
//       const questionparsed = JSON.parse(questionData);
//       //set up a new const
//       console.log(req.body.question);
//       const newQuestion = {
//         id: uuid(),
//         questions: req.body.question,
//         answer: "Will be answered soon...",
//       };
//       //push it
//       questionparsed.push(newQuestion);

//       //save the new json
//       writeQuestionData(JSON.stringify(questionparsed));

//       //send status
//       res.status(201).send("You have submitted info");
//     }
//   });
// });

/*
 *posting to mongodb database questionsanswers
 */
router.post("/questions/new", (req, res) => {
  let newQuestion = {
    questions: req.body.question,
    answer: "Will be answered soon...",
  };
  console.log(newQuestion);
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
 *Get single questions by using id pararm
 */
// router.get("/questions/:id", (req, res) => {
//   readQuestionData((err, data) => {
//     if (err) {
//       res.send("error while getting question data");
//     } else {
//       const questions = JSON.parse(data);
//       const foundVideo = questions.find((q) => q.id == req.params.id);
//       res.json(foundVideo);
//     }
//   });
// });

/*
 *Connection to MongoDB
 */
router.get("/:id", async (req, res) => {
  try {
    const videoData = await Videos.findOne({ _id: req.params.id });
    // console.log(videoData);
    res.send(videoData);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

/*
 *Get single video by using id pararm
 */
// router.get("/:id", (req, res) => {
//   readVideoData((err, videoData) => {
//     if (err) {
//       res.send("error getting video data");
//     } else {
//       const videos = JSON.parse(videoData);
//       const foundVideo = videos.find((video) => video.id == req.params.id);
//       res.json(foundVideo);
//     }
//   });
// });

module.exports = router;
