const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs");

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
  //Brainstation
  // let lat = "49.28507657283974";
  // let lng = "-123.11461581337777";
  //Rossland
  // let lat = "49.0781";
  // let lng = "-117.8";

  let response = await axios(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}%20in%20&key=${GOOGLE_API}&location=${lat},${lng}`
  );
  return response;
};

/*
 *get data from google api
 */
router.get("/", (req, res) => {
  let mapData = getMap(req.params.lat, req.params.lng);
  mapData
    .then((response) => {
      console.log(response.data.results);
      const centers = response.data.results;
      res.json(centers);
    })
    .catch((err) => console.log(err));
});

/*
 *get data from written file
 */
router.get("/new", (req, res) => {
  loadCentersData((err, data) => {
    if (err) {
      res.send("error getting data from json file");
    } else {
      const centers = JSON.parse(data);
      res.json(centers);
    }
  });
});

//i need to get lat and long from front end
//run getMap again and put lat and lng into api call
router.post("/", (req, res) => {
  loadCentersData((err, enteredData) => {
    if (err) {
      res.send("error getting data");
    } else {
      const centersDataParsed = JSON.parse(enteredData);
      // console.log(req.body);

      //axois call to google geocoding
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}+${req.body.city}+${req.body.country}&key=${GOOGLE_API}`
        )
        .then((response) => {
          lat = response.data.results[0].geometry.location.lat;
          lng = response.data.results[0].geometry.location.lng;
          //create a new center and push to array
          const createCenter = {
            name: req.body.business,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            lng: lng,
            lat: lat,
          };
          //push the new center to the json
          centersDataParsed.push(createCenter);

          //save the stringified data to the json file
          saveCentersData(JSON.stringify(centersDataParsed));

          res.status(201).send("You have submitted info");
        })
        .catch((err) => console.log(err));

      //take information out for lat and long
      //write to create center
    }
  });
});

module.exports = router;
