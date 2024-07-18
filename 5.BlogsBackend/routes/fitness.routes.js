const express = require("express");
const { gymEquipment } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/validate.middleware");
const { authorizeRole } = require("../middlewares/admincheck.middleware");
const router = express.Router();

// ONly and logedin user can see the GYM EQUIPMENT
router.get("/gym", validateUser, gymEquipment);

// LOGGEDIN + admin roles
router.get("/editgym", validateUser, authorizeRole("ADMIN"), (req, res) => {
  res.send("YOU CAN EDIT THE GYM");
});

// router.get(
//   "/managingeGym",
//   validateUser,
//   authorizeRole("CENTER_MANAGER"),
//   (req, res) => {
//     res.send("YOU CAN EDIT THE GYM");
//   }
// );

module.exports = router;
