const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const recyclingCenterRoute = require("./routes/api.recycling");
const gameQuestionsRoute = require("./routes/api.gameQuestions");
const gameStoryRoute = require("./routes/api.gameStory");

// const educationRoute = require("./route/api.education");
// const buySellRoute = require("./route/api.buySell");

//to use the static files in my public folder
app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use("/recycling", recyclingCenterRoute);
app.use("/gameQuestions", gameQuestionsRoute);
app.use("/gameStory", gameStoryRoute);
// app.use("/education", educationRoute);
// app.use("/buySell", buySellRoute);

// const middleware = require("../src/routes");

// app.get("/", function (req, res) {
//   res("Server is up🚀");
// });

app.listen(PORT, function () {
  console.log("Hello our server is up and running");
  console.log(PORT);
});
