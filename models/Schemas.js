const mongoose = require("mongoose");
const Schemas = mongoose.Schema;

//write schema for questions
const questionSchema = new Schemas({
  question: { type: String, required: true },
  answerOptions: { type: Array, required: true },
});

const Questions = mongoose.model("questions", questionSchema);

module.exports = Questions;
