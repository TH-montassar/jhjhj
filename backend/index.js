/* A directive that tells the browser to use strict mode. */
"use strict";

require("dotenv").config();

const bodyParser = require("body-parser");

//import
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const specs = require("./utils/swagger");

const compression = require("compression");
const connectToDatabase = require("./config/db.ts");
//db connection
mongoose.set("strictQuery", true);
connectToDatabase();

//import routes
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.route");
//middleware
/* This is a middleware that allows the server to parse the body of the request. */
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your client's URL
  credentials: true, // Enable cookies and authentication headers if needed
};
app.use(cors(corsOptions));
//app.use(cors());
/* A middleware that sets HTTP headers to help protect the app from some well-known web
vulnerabilities. */
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(compression()); //A middleware that compresses the response body.

//api
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//listen server
/* This is a way to set the port for the server. */
const port = process.env.PORT || 5000;
const HOST = "localhost";
app.listen(port, HOST, () => {
  console.log(`server in running on http://${HOST}:${port}`);
});
