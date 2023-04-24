const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");

const validateRegisterInput = require("../../validators/user/register");
const validateLoginInput = require("../../validators/user/login");

const User = require("../../Models/user");
const FreelancerProfile = require("../../Models/freelancerProfile");

router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        school: req.body.school,
        role: req.body.role,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//using multer for storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // store files into a directory named 'uploads'
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // rename the files to include the current time and date
    cb(null, file.fieldname + "-" + Date.now());
  },
});
var upload = multer({ storage: storage });

router.post("/:id/freelancer-setup", upload.single("photo"), (req, res) => {
  const userId = req.params.id;

  // TODO: save image

  const freelancerProfile = new FreelancerProfile({
    user: new mongoose.Types.ObjectId(userId),
    name: req.body.name,
    age: req.body.age,
    school: req.body.school,
    photo: "path-to-image",
    role: req.body.role,
    pay: req.body.pay,
    experiences: req.body.experiences,
    projects: req.body.projects,
    email: req.body.email,
    phone: req.body.phone,
  });

  freelancerProfile.save().then((data) => res.json(data));
});

module.exports = router;
