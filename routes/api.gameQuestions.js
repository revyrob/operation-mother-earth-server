const express = require("express");
const router = express.Router();
const fs = require("fs/promises");
const Questions = require("../models/Schemas.js");

/*
 *Connection to MongoDB
 */
router.get("/", async (req, res) => {
  try {
    //creates a const and awaits the data from Questions schema
    const question = await Questions.find({});
    //sends back the const above
    res.send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

module.exports = router;
