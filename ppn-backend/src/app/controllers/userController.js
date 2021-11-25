import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const salt = bcrypt.genSaltSync(10);

// user Logged

export const logged = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // lấy ra cái email trừ password
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    res.json({ success: true, message: "ok", user: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Sever error" });
  }
};

// register user
export const register = async (req, res, next) => {
  const { email, password } = req.body;

  // emty validation
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email or/and password" });
  }

  try {
    // check for existing user - kiểm tra người dùng hiện tại
    const user = await User.findOne({ email });

    // user is already
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User is already" });
    }
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();

    // ký token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User craete successfully",
      accessToken,
    });
    // All good - tất cả đều ok không có lỗi gì
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Sever error" });
  }
};

// Login
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing email and/or password" });
  }

  try {
    //check for existing user
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });
    }

    // email found // tìm user
    const passwordValid = bcrypt.compareSync(password, user.password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email or password" });
    }

    //All good
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "User Logged Successfully~",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
