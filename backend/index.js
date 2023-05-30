const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/routes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

const mongoString = "mongodb://localhost:27017/metaagrow";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api/v1", routes);

app.listen(5001, () => {
  console.log(`Server Started at ${5001}`);
});
