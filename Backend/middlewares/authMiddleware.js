import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler"; // Ensure you have this package installed
import dotenv from "dotenv";

dotenv.config();

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Check if token exists in cookies
  token = req.cookies.jwt;

  if (token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user from database excluding the password field
      req.user = await User.findById(decoded.userId).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("User not found");
      }

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed", error: error.message });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not authorized as an admin" });
  }
};

export { authenticate, authorizeAdmin };
