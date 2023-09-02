const swaggerJsdoc = require("swagger-jsdoc");
const YAML = require("yamljs");
const port = process.env.PORT;
const HOST = "localhost";
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "gestion Conge API",
      version: "0.1.0",
      description:
        "gestion de conge API application made with Express and documented with Swagger",
      contact: {
        name: "Montassar",
        url: "https://www.linkedin.com/in/montassar-front-end-dev/",
        email: "montassarthemri@gmail.com",
      },
    },
    servers: [
      {
        url: `http://${HOST}:${port}/`,
        description: "Development server",
      },
    ],
  },
  apis: ["./controllers/*.js", "./routes/*.js", "./models/*.js"],
};
const specs = swaggerJsdoc(options);
module.exports = specs;
