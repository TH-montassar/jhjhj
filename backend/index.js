require("dotenv").config();
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");


//db connection
mongoose.connect(process.env.MONG_DB_URI);
mongoose.connection.on("connected", () => {
    console.log("DB connect successfully");
});
mongoose.connection.on("error", (err) => {
    console.log("mongoose failed with", err);
});





//middleware
/* This is a middleware that allows the server to parse the body of the request. */
app.use(express.json());

//listen server
/* This is a way to set the port for the server. */
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server in running on http:/localhost:${port}`);
});