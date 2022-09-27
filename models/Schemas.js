const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//write schema for questions
const questionSchema = new Schema({
  question: { type: String, required: true },
  answerOptions: { type: Array, required: true },
});

//write schema for storyboard
// const storyboardSchema = new Schema({
//   image: { type: String, required: true },
//   text: { type: String, required: true },
//   alt: { type: String, required: true },
// });

const Questions = mongoose.model("questions", questionSchema);
// const Story = mongoose.model("storyboard", storyboardSchema);
//const other schema
// const mySchemas = { Questions: Questions, Story: Story };
//you can export multiple schemas

module.exports = Questions;
