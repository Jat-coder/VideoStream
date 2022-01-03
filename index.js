const express = require("express");
const app = express();
const router = require("./router/routes");

app.use(express.json());
require("dotenv").config();
//Database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.DB).then(() => {
  console.log("Database connected");
});

app.use(router);
app.listen(8000, function () {
  console.log("listening on port 8000");
});
