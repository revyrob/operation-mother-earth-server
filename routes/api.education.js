const express = require("express");
const router = express.Router();
const fs = require("fs");

const videos = "./data/videoData.json";

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
 *Get all the questions
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

module.exports = router;
