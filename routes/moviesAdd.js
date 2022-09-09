const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const { addMovie } = require("../controller/movie");

// router.post("/addmovie", addMovie);
router.post("/add", addMovie);

module.exports = router;

