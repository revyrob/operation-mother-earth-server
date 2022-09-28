const { Schema, model } = require("mongoose");

const centersSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const Center = model("center", centersSchema, "center");

module.exports = Center;
