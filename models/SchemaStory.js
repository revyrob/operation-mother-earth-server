const { Schema, model } = require("mongoose");

//write schema for storyboard
const storyboardSchema = new Schema({
  image: { type: String },
  text: { type: String, required: true },
  alt: { type: String, required: true },
});

const Story = model("storyboards", storyboardSchema);
//const other schema
//const mySchemas = { Questions: Questions, Story: Story };
//you can export multiple schemas

module.exports = Story;
