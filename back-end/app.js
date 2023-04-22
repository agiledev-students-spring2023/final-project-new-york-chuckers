const dotenv = require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const freelancerRouter = require("./routes/freelancer/index.js");
const positionRouter = require("./routes/position/index.js");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const { Profile } = require("./Models/profile.js");
const { Company } = require("./Models/company.js");


const app = express(); // instantiate an Express object

app.use(morgan("dev", { skip: (req, res) => process.env.NODE_ENV === "test" })); // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()); // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// custom router
app.use("/freelancer/", freelancerRouter);
app.use("/position/", positionRouter);

mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
  

app.get("/bios", function (req, res) {
  res.json({ bio: "hi" });
});

app.get("/users", function (req, res) {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.json(users);
});

app.get("/settings/:profileId", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);
    if (!profile) {
      return res.status(404).json({
        error: "Profile not found",
        status: "failed to retrieve profile from the database",
      });
    }
    res.json({
      profile: profile,
      status: 'all good',
    });
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve the profile from the database',
    })
  }
})

app.get("/settings/", async (req, res) => {
  const users = [
    {
      id: 0,
      name: "Default Profile",
      email: "dee.fault@profile.com",
      phone: "123-555-7890",
      industry: "Technology",
      skills: "Python, Javscript, Figma",
      wantWork: "Yes",
      position: "Freelancer",
      companies: "Amazon",
      image: "hi",
    },
  ];
  res.json(users);
});

app.post("/settings/save", async (req, res) => {
  try {
    Profile.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      industry: req.body.industry,
      skills: req.body.skills,
      wantWork: req.body.wantWork,
      position: req.body.position,
      companies: req.body.companies,
    }).then(profile => {
      res.json({
        profile: profile,
        status: "all good",
      });
    }).catch(err => {
      console.error(err);
      res.status(400).json({
        error: err,
        status: `failed to save the settings to the database`,
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: `failed to save`,
    });
  }
});

app.post("/settings/save/:profileId", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.profileId);
    profile.name = req.body.name
    profile.email= req.body.email
    profile.phone=  req.body.phone
    profile.industry = req.body.industry
    profile.skills = req.body.skills
    profile.wantWork = req.body.wantWork
    profile.position = req.body.position
    profile.companies = req.body.companies
    await profile.save();
    return res.json({
      status: `Profile successfully updated`,
      profile: profile,
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: `failed to save`,
    });
  }
});

app.get("/edit-company", function (req, res) {
  const users = [
    {
      id: 189,
      name: "Amazon",
      email: "jack.smith@example.com",
      phone: "123-555-7890",
      industry: "Technology",
    },
  ];
  res.json(users);
});

app.post('/edit-company/save', async (req, res) => {
  // try to save the message to the database
  try {
    const company = await Company.create({
      id: req.body.id,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      industry: req.body.industry,
    })
    return res.json({
      company: company, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the company to the database',
    })
  }
})

//using multer for storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // store files into a directory named 'uploads'
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    // rename the files to include the current time and date
    cb(null, file.fieldname + "-" + Date.now())
  },
})
var upload = multer({ storage: storage })

app.post('/upload-route-example', upload.array('image'), (req, res) => {
  console.log( JSON.stringify(req.files, null, 2) )
  if (req.files.length) res.json( { success: true, message: 'thanks!' })
  else res.status(500).send({ success: false, message: 'Oops... something went wrong!' })
})


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.post('/upload-route-example-2', upload.single('image'), (req, res) => {
  console.log("Image uploaded successfully");
  if (req.file) {
    const encodedImage = req.file.buffer.toString('base64');
    console.log(encodedImage);
    res.json( { success: true, message: `thanks! ${encodedImage}` });
  } else {
    res.status(500).send({ success: false, message: 'Oops... something went wrong!' });
  }
});

// Route for handling image uploads
app.post('/api/upload-image', upload.array('image', 1), (req, res, next) => {
  // Access the uploaded file details through the req.file object
  try{
    const { filename, path: filePath, mimetype } = req.files[0];
  // Send a response back to the client
  res.json({
    filename,
    filePath,
    mimetype,
    message: 'File uploaded successfully'
  });
  } catch(err){
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to post the image to the database",
    });
  }
  
});

//route to validate and create new profile
app.post("/setup", (req, res) =>{
  try{
    //If some of the data is incomplete when creating the new profile, rerturn a status fail and alert "incomplete"
    
    //If no error or missing data add new profile into database and return status approve
    //creating new profile into database (mongoose)
    res.json({status:"approve", profile:req.body, alert:null});
    
  }
  //If catch an error, status is fail ad return the err as the alert
  catch (err){
    res.json({status:"fail", alert:err.toString()});
  }
});

//route to validate and setup freelancer 
app.post("/freelancer-setup", (req, res) => {
  try{
    //If some of the data is uncomplete return a status fail and alert "incomplete"

    //If no error or missing data return status approve and create new freelancer
    //creating new freelancer into database(mongoose)
    res.json({status:"approve", freelancer:req.body, alert:null});
  }
  //If catch error, status is fail and return the err as the alert
  catch (err){
    res.json({status:"fail", alert:err});
  }
});

//route to validate and create new position
app.post("/new-post", (req, res) =>{
  try{
    //If some of the data is incomplete return a status fail and alert "incomplete"

    //If no error or missing data return status approve and create new post 
    //Creating new post into database(mongoose)
    res.json({status:"approve", position:req.body, alert:null});
  }
  catch (err){
    res.json({status:"fail", alert:err});
  }
});


// export the express app we created to make it available to other modules
module.exports = app;
