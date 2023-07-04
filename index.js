const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;
const userControls  = require("./controllers/studentController.js");
const app = express();
require("dotenv").config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.ps21nca.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>{
    console.log("Error connecting to database!");
    console.log(err);
});

app.use(express.json());
app.use(cors());

app.get("/student/all",userControls.all);
app.get("/student/:reg",userControls.find)
app.post("/student/create",userControls.create)

app.listen(port,()=>{
    console.log(`app is running on port : ${port}`);
})