const express = require("express");
const router = express.Router();
const axios = require("axios");

//create a useEffect and get the map to load after the DOM
//no search handler
//but this will reload with geolocation
const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

//function on load
const input = "e-waste recycling";
let lat = "49.28507657283974";
let lon = "-123.11461581337777";

// / function to get the data from the API
let getMap = async () => {
  let response = await axios(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}%20in%20&key=${GOOGLE_API}&location=${lat},${lon}`
  );
  return response;
};

// router.post("/test", (req, res) => {
//   console.log(req.body);
//   res.send(`You have entered these cordinates ${req.body}`);
// });

router.get("/", (req, res) => {
  let mapData = getMap();
  mapData.then((response) => {
    console.log(response.data.results);
    const centers = response.data.results;
    res.json(centers);
  });
});

module.exports = router;
