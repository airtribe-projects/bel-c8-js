const express = require("express");
const router = express.Router();

router.get("/gym", (req, res) => {
  res.json({
    name: "fitness V2",
    type: "gym V2",
  });
});

module.exports = router;
