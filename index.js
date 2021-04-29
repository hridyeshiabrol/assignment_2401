const mongoose = require("mongoose");
const mongo = require("./mongo");
const userSchema = require("./schemas/user-schema");
const collegeSchema = require("./schemas/college-schema");
const express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");
const { response } = require("express");
var app = express();
app.use(cors());
var PORT = process.env.PORT || 3004;
app.get("/save", (req, res) => {
  var obj = {
    collegid: "",
    name: "",
    yearfounded: "",
    city: "",
    state: "",
    country: "",
    studentnumber: "",
    courses: "",
  };
  collegeSchema
    .create(obj)
    .then((result) => {
      res.send({ res: result });
    })
    .catch((err) => {
      res.json({ errmsg: err });
    });
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});
app.get('/fetch', function(req, res) {
	collegeSchema.find().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json({errmsg:err});
    })
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "react-app", "build")));
  app.get("*", (req, resp) => {
      resp.sendFile(path.join(__dirname, "react-app", "build", "index.html"));
  })
}
app.listen(PORT, () => {
  console.log("http://localhost:3000");
});