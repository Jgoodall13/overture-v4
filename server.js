const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const fn = require("./functions.js");
const knox = require('knox');
const awsS3Url = "https://s3.amazonaws.com/overture-corporate-site-resumes/";
const fs = require('fs');
const secrets = require('./secrets.json');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;


//Upload Storage function
let newFilename = ''
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
const upload = multer({
  storage
});

//amazon s3 bucket storage
const client = knox.createClient({
  key: process.env.AWS_KEY || secrets.aws_key,
  secret: process.env.AWS_SECRET || secrets.aws_secret,
  bucket: 'overture-corporate-site-resumes'
});




//api calls
app.post('/contact', (req, res) => {
  res.send();
  fn.contactEmail(req.body.name, req.body.company, req.body.email, req.body.phone, req.body.message);
  //should make a catch for errors and send an email if emails are not going through.
})

app.post('/apply', upload.single('selectedFile'), (req, res) => {
  const s3Request = client.put(req.file.filename, {
    'Content-Type': req.file.mimetype,
    'Content-Length': req.file.size,
    'x-amz-acl': 'public-read'
  });
  const amazonFile = awsS3Url + req.file.filename
  const readStream = fs.createReadStream(req.file.path);
  readStream.pipe(s3Request);
  res.send()
  fn.applyEmail(req.body.position, req.body.first, req.body.last, req.body.email, req.body.phone, req.body.movies, req.body.coverLetter, amazonFile)
})




//react routing
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));