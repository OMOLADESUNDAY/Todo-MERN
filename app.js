// require('./db/connect')
const connectDB = require('./db/connect');
require("dotenv").config();

const express = require("express");
const task=require('./routes/task')
const app = express();
const port = process.env.PORT
const MongoDbUrl = process.env.MongoDbUrl;
app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks', task)
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>');
})


const start= async()=>{
    try {
        await connectDB(MongoDbUrl);
        app.listen(port, () => {
          console.log(`listening on port ${port}`);
        });

    
    } catch (error) {
        console.log(error)
    }
}
start()
