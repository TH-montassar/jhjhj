/* A directive that tells the browser to use strict mode. */
'use strict';

require("dotenv").config();
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

//db connection
mongoose.connect(process.env.MONG_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("connected", () => {
    console.log("DB connect successfully");
});
db.on("error", (err) => {
    console.log("mongoose failed with", err);
});

//import routes
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./auth/auth.routes");


//middleware
/* This is a middleware that allows the server to parse the body of the request. */
app.use(express.json());
//app.use(cors());
/* A middleware that sets HTTP headers to help protect the app from some well-known web
vulnerabilities. */
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(compression()); //A middleware that compresses the response body.

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
//listen server
/* This is a way to set the port for the server. */
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server in running on http:/localhost:${port}`);
});