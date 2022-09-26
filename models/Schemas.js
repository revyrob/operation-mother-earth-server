const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//write schema for questions
const questionSchema = new Schema({
  question: { type: String, required: true },
  answerOptions: { type: Array, required: true },
});

const Questions = mongoose.model("questions", questionSchema);
//const other schema
//const mySchemas = {'}
//you can export multiple schemas

module.exports = Questions;
