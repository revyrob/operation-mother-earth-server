const { Schema, model } = require("mongoose");

//write schema for storyboard
const QuestionAnswerSchema = new Schema({
  questions: { type: String, required: true },
  answer: { type: String, required: true },
});

const QA = model("questionsanswers", QuestionAnswerSchema);
//const other schema
//const mySchemas = { Questions: Questions, Story: Story };
//you can export multiple schemas

module.exports = QA;
