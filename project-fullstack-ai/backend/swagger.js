const swaggerJsdoc = require("swagger-jsdoc");
 
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Full Stack AI - Dokumentasi",
      version: "1.0.0",
      description: "Dokumentasi RESTful API: MongoDB, MinIO, dan integrasi Ollama AI",
    },
    servers: [{ url: "http://localhost:5000/api" }],
  },
  apis: ["./routes/*.js"],
};
 
module.exports = swaggerJsdoc(options);