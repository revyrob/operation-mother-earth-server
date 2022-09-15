const express = require("express");
const router = express.Router();
const axios = require("axios");
// const recycling = require("./recycling");

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
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&keyword=${input}&key=${GOOGLE_API}`
  );
  return response;
};

router.post("/test", (req, res) => {
  console.log(req.body);
  res.send("testing");
});

router.get("/", (req, res) => {
  let mapData = getMap();
  mapData.then((response) => {
    console.log(response);
    res.json(response.data);
  });
  //   res.json(mapData);
});

module.exports = router;
