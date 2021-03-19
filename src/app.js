const db = require("../db/models").sequelize;

const express = require("express");
const cors = require("cors");
const slugify = require("slugify");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const run = async () => {
  try {
    await db.authenticate();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};
run();
