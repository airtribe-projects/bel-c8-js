const express = require("express");
const router = express.Router();

router.get("/gym", (req, res) => {
  res.json({
    name: "fitness V1",
    type: "gym V1",
    asdassd: "asdsadsad",
    headless: "chrome",
    point: "blank",
  });
});

module.exports = router;
