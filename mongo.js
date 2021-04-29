const mongoose = require('mongoose');
// const dbcon = "mongodb://hridyeshiuser:hridyeshipassword@mycluster-shard-00-00.j9plg.mongodb.net:27017,mycluster-shard-00-01.j9plg.mongodb.net:27017,mycluster-shard-00-02.j9plg.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-l9uwyh-shard-0&authSource=admin&retryWrites=true&w=majority"

const dbcon= "mongodb://localhost:27017/nov2020"
module.exports= async()=>{
    await mongoose.connect(dbcon,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    return mongoose
}
