import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const idToFind = req.params.id;

  const product = products.find((product) => product._id === idToFind);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`
  );
});
