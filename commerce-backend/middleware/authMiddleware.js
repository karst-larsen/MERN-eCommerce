import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if the Authorization header starts with Bearer, as Token convention sends as 'Bearer TOKEN'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Split the bearer token into an array of two values: ["Bearer", "Token"]
      token = req.headers.authorization.split(" ")[1];
      //Verify the token with the secret environment variable that was used to create the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      /*Using the MongoDB model and the decoded token, find the user that matches the token to the id in the token
       *select NOT the password
       */
      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Unauthorized user.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
  next();
});

export { protect };
