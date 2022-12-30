const mongoose = require("mongoose");
require('dotenv').config()
// const connectionString =
//   "mongodb+srv://sunday:Spyder11#@cluster0.y02hkgc.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";
// const username = "<sunday>";
// const password = "<Spyder11#>";
// const cluster = "<cluster0.y02hkgc>";
// const dbname = "myFirstDatabase";

// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );
const url = process.env.MongoDbUrl;

const connectDB=(url)=>{
  return mongoose.connect(url)
  .then(()=>console.log('connected to db'))
  .catch((err)=>console.log(err));
}
// mongoose
//   .connect(
//     process.env.MongoDbUrl
//   )
module.exports=connectDB


