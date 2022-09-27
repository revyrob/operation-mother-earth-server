const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const recyclingCenterRoute = require("./routes/api.recycling");
const gameQuestionsRoute = require("./routes/api.gameQuestions");
const gameStoryRoute = require("./routes/api.gameStory");
const educationRoute = require("./routes/api.education");
// const questionsEduRoute = require("./routes/api.questionsEdu");

// const buySellRoute = require("./route/api.buySell");

//to use the static files in my public folder
app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use("/recycling", recyclingCenterRoute);
app.use("/gameQuestions", gameQuestionsRoute);
app.use("/gameStory", gameStoryRoute);
app.use("/education", educationRoute);

//DB connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, function () {
  console.log("Server is up🚀");
  console.log(PORT);
});
