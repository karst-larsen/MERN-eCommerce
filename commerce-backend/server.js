import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (_req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

/** __dirname will point to the current directory, have to make a variable of it rather than
 *  directly using it since ES6 modules doesn't support it, however path.resolve() works the same.
 */

const __dirname = "commerce-site";
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Setting the static folder for build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/commerce-frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "commerce-frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running!");
  });
}

// Error handlers should be below routes or it'll automatically throw errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`
  );
});
