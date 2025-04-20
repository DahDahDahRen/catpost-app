const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router/router");
const notFoundRoute = require("./utils/notFoundRoute");
const errorHandler = require("./utils/errorHandler");
const connectDB = require("./db/connectDB");
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

// App level middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Router middleware
app.use("/api/v1/cat", router);

// Error Handler
app.use(errorHandler);
// Not found route middleware
app.use(notFoundRoute);

// Start Server
const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}.`);
    });
  } catch (error) {}
};

start();
