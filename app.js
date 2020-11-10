require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const studentRoutes = require("./app/routes/student");
const {
    PORT,
    DB_URL
} = process.env;

app.use(express.json());
app.use(cors());
app.use('/student', studentRoutes);
app.listen(PORT, err => {
    if (err) {
        console.log("Error in running server !", err);
    } else {
        mongoose.connect(DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }, err => {
            if (err) {
                console.log("Error in connecting MongoDB server !", err);
            } else {
                console.log("MongoDB connected !");
            }
        })
        console.log("Server started in port", PORT);
    }
})