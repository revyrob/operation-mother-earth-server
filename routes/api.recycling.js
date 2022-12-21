const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs");
const Center = require("../models/SchemaCenters.js");

//create a useEffect and get the map to load after the DOM
//no search handler
//but this will reload with geolocation
const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

/*
 *read from a json file
 */
function loadCentersData(callback) {
  fs.readFile("./data/centersData.json", "utf8", callback);
}

/*
 *write the videos.json file
 */
function saveCentersData(data) {
  fs.writeFile("./data/centersData.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

// / function to get the data from the API
let getMap = async (lat, lng) => {
  //function on load
  const input = "e-waste recycling";

  let response = await axios(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=30000&keyword=${input}&key=${GOOGLE_API}`
  );
  return response;
};

/*
 *get data from google api - I don't need to use MongoDb since the data I recieve is
 *dynamic
 */
router.get("/", (req, res) => {
  let mapData = getMap(req.query.lat, req.query.lng);
  mapData
    .then((response) => {
      const centers = response.data.results;
      res.json(centers);
    })
    .catch((err) => console.log(err));
});

/*
 *Connection to list of centers that users have entered in.  MongoDB
 */
router.get("/new", async (req, res) => {
  try {
    const center = await Center.find({});
    res.send(center);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

/*
 *posting to new e-waste recycling center to database. MongoDB
 */
router.post("/", (req, res) => {
  //axois call to google geocoding
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}+${req.body.city}+${req.body.country}&key=${GOOGLE_API}`
    )
    .then((response) => {
      lat = response.data.results[0].geometry.location.lat;
      lng = response.data.results[0].geometry.location.lng;
      //create a new center and push to array
      let createCenter = {
        name: req.body.business,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        lng: lng,
        lat: lat,
      };
      new Center(createCenter).save();
    });
});

module.exports = router;
