require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const connectDB = require("./config/db");
 
const itemRoutes = require("./routes/item.routes");
const aiRoutes = require("./routes/ai.routes");
const uploadRoutes = require("./routes/upload.routes");
 
const app = express();
 
connectDB();
 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/items", itemRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/upload", uploadRoutes);
 
app.get("/", (req, res) => res.send("Backend API berjalan dengan baik"));
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});