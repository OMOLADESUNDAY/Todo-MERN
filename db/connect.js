const mongoose = require("mongoose");
require('dotenv').config()

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


