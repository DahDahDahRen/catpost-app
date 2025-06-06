const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/catsdb");

    console.log("Successfully connected to database.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
