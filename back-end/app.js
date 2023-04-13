const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const freelancerRouter = require("./routes/freelancer/index.js");
const positionRouter = require("./routes/position/index.js");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express(); // instantiate an Express object

app.use(morgan("dev", { skip: (req, res) => process.env.NODE_ENV === "test" })); // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()); // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// custom router
app.use("/freelancer/", freelancerRouter);
app.use("/position/", positionRouter);

// connect to database – for later when setting up DB next sprint
// mongoose
//   .connect(`${process.env.DB_CONNECTION_STRING}`)
//   .then(data => console.log(`Connected to MongoDB`))
//   .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the dataabase models we want to deal with
import { Message } from "./Models/message.js";
import { Profile } from "./Models/profile.js";

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

app.get("/settings", function (req, res) {
  const users = [
    {
      id: 189,
      name: "James Doe",
      email: "james.smith@example.com",
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

    const matches = req.body.image.match(/^data:image\/([A-Za-z-+/]+);base64,(.+)$/);
    const extension = matches[1];
    const base64Data = matches[2];
    const binaryData = Buffer.from(base64Data, "base64");
    // Generate a unique filename
    const filename = `${uuidv4()}.${extension}`;
    // Write the file to disk
    const filepath = path.join(__dirname, "uploads", filename);
    fs.writeFile(filepath, binaryData, "binary", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving image");
      } else {
        console.log(`Image saved to ${filepath}`);
        // try to save the settings to the database
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
          image: filename,
        }).then(profile => {
          console.log("Profile saved to database");
          res.json({
            profile: profile,
            status: "all good",
          });
        }).catch(err => {
          console.error(err);
          res.status(400).json({
            error: err,
            status: "failed to save the settings to the database",
          });
        });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: `failed to save ${req.body.name} plus one`,
    });
  }
});

//using multer for storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExt = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExt);
  }
});
const upload = multer({ storage });

// Route for handling image uploads
app.post('/api/upload-image', upload.single('image'), (req, res, next) => {
  // Access the uploaded file details through the req.file object
  const { filename, path: filePath, mimetype } = req.file;
  // Send a response back to the client
  res.json({
    filename,
    filePath,
    mimetype,
    message: 'File uploaded successfully'
  });
});

// a route to handle fetching all messages
app.get("/messages", async (req, res) => {
  // load all messages from database
  try {
    console.log("This at least ran");
    const messages = await Message.find({});
    res.json({
      messages: messages,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve messages from the database",
    });
  }
});

// a route to handle fetching a single message by its id
app.get("/messages/:messageId", async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({ _id: req.params.messageId });
    res.json({
      messages: messages,
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      error: err,
      status: "failed to retrieve messages from the database",
    });
  }
});
// a route to handle logging out users
app.post("/messages/save", async (req, res) => {
  // try to save the message to the database
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    });
    return res.json({
      message: message, // return the message we just saved
      status: "all good",
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      error: err,
      status: "failed to save the message to the database",
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
