const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password, picture } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).send("User already Exists");

  let user = await User.create({
    name,
    email,
    password,
    picture,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send("Error occured while registering. Try again!");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send("Invalid Email or password");
  }
};

module.exports = { registerUser, authUser };
