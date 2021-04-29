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

const connection = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log("Connected to DB");
      //fake data is entered manually
      // const user= {
      //     studentid:'416282763',
      //     name:'Vinna',
      //     yearofbatch:'2018',
      //     collegid:'college10',
      //     skills:'c++'
      // }
      // const college ={
      //     collegid:'college101',
      //     name:'IIT',
      //     yearfounded:'1982',
        //     city:'aizawl',
        //     state:'mizoram',
        //     country:'India',
        //     studentnumber:'100',
        //     courses:'me',
        // }
        // await new collegeSchema(college).save()
      // await new userSchema(user).save()
    } finally {
      mongoose.connection.close();
    }
  });
};
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

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
connection();
