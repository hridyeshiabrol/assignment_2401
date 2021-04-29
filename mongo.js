const mongoose = require("mongoose");
const dbcon =
  "mongodb+srv://hridyeshiuser:hridyeshipassword@mycluster.j9plg.mongodb.net/Assignment";

module.exports = mongoose
  .connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
