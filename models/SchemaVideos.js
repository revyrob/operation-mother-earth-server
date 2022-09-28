const { Schema, model } = require("mongoose");

//write schema for videos
const videoSchemas = new Schema({
  title: { type: String },
  source: { type: String },
  image: { type: String },
});

const Videos = model("datavideos", videoSchemas);
//const other schema
//const mySchemas = { Questions: Questions, Story: Story };
//you can export multiple schemas

module.exports = Videos;
