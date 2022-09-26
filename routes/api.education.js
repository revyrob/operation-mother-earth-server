const express = require("express");
const router = express.Router();
const fs = require("fs");

const videos = "./data/videoData.json";
const questions = "./data/ewastequestions.json";

/*
 *read video.json file
 */
function readVideoData(callback) {
  fs.readFile("./data/videoData.json", "utf8", callback);
}

/*
 *write the videos.json file
 */
function writeVideoData(data) {
  fs.writeFile("./data/videoData.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

/*
 *read questions.json file
 */
function readQuestionData(callback) {
  fs.readFile("./data/ewastequestions.json", "utf8", callback);
}

/*
 *write the videos.json file
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
router.get("/", (req, res) => {
  readVideoData((err, data) => {
    if (err) {
      res.send("error while getting video data");
    } else {
      const videos = JSON.parse(data).map((e) => {
        return {
          title: e.title,
          source: e.source,
          image: e.image,
          id: e.id,
        };
      });
      res.status(200).send(data);
    }
  });
});

/*
 *Get single video by using id pararm
 */
router.get("/:id", (req, res) => {
  readVideoData((err, videoData) => {
    if (err) {
      res.send("error getting video data");
    } else {
      const videos = JSON.parse(videoData);
      const foundVideo = videos.find((video) => video.id == req.params.id);
      res.json(foundVideo);
    }
  });
});

/*
 *Get all the videos
 */
router.get("/questions", (req, res) => {
  console.log("this worked");
  fs.readQuestionData(questions, "utf-8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("error reading file");
    });
});

/*
 *Get single video by using id pararm
 */
router.get("/questions/:id", (req, res) => {
  readQuestionData((err, videoData) => {
    if (err) {
      res.send("error getting video data");
    } else {
      const videos = JSON.parse(videoData);
      const foundVideo = videos.find((video) => video.id == req.params.id);
      res.json(foundVideo);
    }
  });
});

module.exports = router;
