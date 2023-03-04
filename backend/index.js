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
const connectToDatabase = require("./config/db.ts");
//db connection
//mongoose.set('strictQuery', true);
connectToDatabase();

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
const HOST = 'localhost';
app.listen(port, HOST, () => {
    console.log(`server in running on http://${HOST}:${port}`);
});