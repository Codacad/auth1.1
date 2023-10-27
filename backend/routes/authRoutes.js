const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

router.post("/register", async (req, res) => {
  let username = req.body.username.trim();
  let email = req.body.email.trim();
  let password = req.body.password.trim();
  const newUser = {
    username,
    email,
    password,
  };
  if (!username || !email || !password) {
    res
      .status(404)
      .send({ message: "All fields are required!", register: false });
  } else {
    let userExists = await User.findOne({ email: newUser.email });
    let hashedPassword = await bcrypt.hash(newUser.password, 10);
    if (!userExists) {
      let user = await User.create({ ...newUser, password: hashedPassword });
      res
        .status(200)
        .send({ register: true, message: "Registeraton Successful" });
    } else {
      res
        .status(501)
        .send({ message: "Email is already exist...", registe: false });
    }
  }
});

router.post("/login", async (req, res) => {
  let email = req.body.email.trim();
  let password = req.body.password.trim();
  const newUser = {
    email,
    password,
  };
  if (!email || !password) {
    res.send({ login: false, message: "All fields are required!" });
  } else {
    let user = await User.findOne({ email: newUser.email });
    if (!user) {
      res.send({ login: false, message: "User not found, please register..." });
    } else {
      let isMatch = await bcrypt.compare(newUser.password, user.password);
      if (!isMatch) {
        res.send({ login: false, message: "Incorrect Password" });
      } else {
        let token = await jwt.sign({ user }, process.env.SECRET_KEY, {
          expiresIn: "1day",
        });
        const userData = { ...user };
        delete userData._doc.password;
        console.log(userData);
        res.send({ token, login: true, user: userData._doc });
      }
    }
  }
});

module.exports = router;
