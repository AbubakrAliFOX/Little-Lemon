import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const createUser = expressAsyncHandler(async (req, res) => {
  const { username, password, name, email, address, prevOrders } = req.body;
  if (!username || !password || !name || !email || !address) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    password: hashPassword,
    name,
    email,
    address,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const {username, password, email} = req.body;

  // Check for user
  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
        _id: user.id,
        name: user.name,
        login: 'You logged in'
      });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

export { createUser, loginUser };
