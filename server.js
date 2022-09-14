const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

const recyclingCenterRoute = require("./routes/api.recycling");
const gameRoute = require("./routes/api.game");
const educationRoute = require("./route/api.education");
const buySellRoute = require("./route/api.buySell");

app.use(cors());
app.use(express.json());
app.use("/recycling", recyclingCenterRoute);
app.use("/game", gameRoute);
app.use("/education", educationRoute);
app.use("/buySell", buySellRoute);

app.get("/", function (req, res) {
  res("Server is up");
});

app.listen(PORT, function () {
  console.log("Hello our server is up and running");
});
