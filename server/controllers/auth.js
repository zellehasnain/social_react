import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user";
import { json } from "body-parser";

/**
 * Register a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with a success message and the saved user data, or an error message.
 */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new User object with the hashed password and other user data
    const newUser = new User({
      firstName,
      lastName,
      email,
      passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 4000),
      impressions: Math.floor(Math.random() * 1000),
    });

    // Save the new user object to the database
    const savedUser = await newUser.save();

    // Return a success message with the saved user data
    return res.status(201).json({ message: "User Saved Successfully", user: savedUser });
  } catch (error) {
    // Return an error message if there is an error during the registration process
    return res.status(500).json({ error: error.message });
  }
};
