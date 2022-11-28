const express = require("express");
const router = express.Router();

// @desc    Login/Landing page
// @route   GET /
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc    home_page
// @route   GET /home_page
router.get("/home_page", (req, res) => {
  try {
    res.render("home_page");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
