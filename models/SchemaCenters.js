const { Schema, model } = require("mongoose");

const centersSchema = new Schema({
  lat: { type: Object },
  lng: { type: Object },
});

const Center = model("center", centersSchema, "center");

module.exports = Center;
