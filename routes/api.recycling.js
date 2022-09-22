const express = require("express");
const router = express.Router();
const axios = require("axios");

//create a useEffect and get the map to load after the DOM
//no search handler
//but this will reload with geolocation
const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// / function to get the data from the API
let getMap = async () => {
  //function on load
  const input = "e-waste recycling";
  //Brainstation
  // let lat = "49.28507657283974";
  // let lng = "-123.11461581337777";
  //Rossland
  let lat = "49.0781";
  let lng = "-117.8";
  let response = await axios(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}%20in%20&key=${GOOGLE_API}&location=${lat},${lng}`
  );
  return response;
};

router.get("/", (req, res) => {
  let mapData = getMap();
  mapData
    .then((response) => {
      console.log(response.data.results);
      const centers = response.data.results;
      res.json(centers);
    })
    .catch((err) => console.log(err));
});

// router.get("/", (req, res) => {
//   getMap((err, centerData) => {
//     if (err) {
//       res.send("error getting center data");
//     } else {
//       console.log(response.data.results);
//       const centers = JSON.parse(centerData);
//       // const centers = response.data.results;
//       res.json(centers);
//     }
//   });
// });

router.post("/", (req, res) => {
  getMap((err, locationData) => {
    if (err) {
      res.send("error posting coordinates");
    } else {
      const parsedLocationData = JSON.parse(locationData);
      let lat = req.params.lat;
      let lng = req.params.lng;
      const input = "e-waste recycling";
      axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}%20in%20&key=${GOOGLE_API}&location=${lat},${lng}`
      );

      return newResponse;
    }
  });
});

//i need to get lat and long from front end
//run getMap again and put lat and lng into api call
// router.post("/", (req, res) => {
//   getMap((err, centersData) => {
//     if (err) {
//       res.send("error getting video");
//     } else {
//       getMap(req.body.lat, req.body.lng);
//     }
//   });
//   console.log(req.body);
//   res.send(`You have entered these cordinates ${req.body}`);
// });

module.exports = router;
