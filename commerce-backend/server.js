import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";

const app = express();
dotenv.config();
app.use(cors());
connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`
  );
});
