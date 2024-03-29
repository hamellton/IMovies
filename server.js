const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const movieRoute = require("./routes/movies");
const movieAddRoute = require("./routes/moviesAdd");
const genreRoute = require("./routes/genres");
const userRoute = require("./routes/users");

const app = express();

// Middleware for enabling CORS
app.use(cors());

// Middleware
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

//Connecting mongoDB
const databaseConfig = require("./config/keys");
console.log(databaseConfig);
mongoose.connect(databaseConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Checking the connection to db
const db = mongoose.connection;
db.once("open", () => console.log("Mongo Database is connected now!"));
db.on("error", console.error.bind(console, "connection error:"));

app.use(express.static("./uploads"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/movies", movieRoute);
app.use("/api/movies", movieAddRoute);
app.use("/api/genres", genreRoute); //cache
app.use("/api/users", userRoute);

//Serve our static asset
app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const port = process.env.PORT || 5000;
console.log("🚀 ~ file: server.js ~ line 50 ~ port", port);
app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;
