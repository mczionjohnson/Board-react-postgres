require("dotenv").config();


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// mongoose.connect("mongodb://localhost:27017/commBoardReact")
// .catch((err) => console.log(err));



app.listen(process.env.PORT || 5000, () => console.log("express is running"));