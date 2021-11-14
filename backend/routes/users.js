const express = require("express");
const { registerUser, authUser } = require("../controllers/usersController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users route");
});

router.post("/", registerUser);

router.post("/login", authUser);

module.exports = router;
