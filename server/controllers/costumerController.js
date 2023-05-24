const asyncHandler = require('express-async-handler');
const costumerModel = require("../model/costumerModel")
const jwt = require("jsonwebtoken")
const secret_key = "jxnftvbrmskelsodmcvjfnrutkslabvgsjq"
// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id },process.env.SECRET_KEY, { expiresIn: "1d" });
};



//  signup ***************************************************************************************************************
const signup = asyncHandler(async (req, res) => {
  try {
    const{ name ,email, password , phone , address} = req.body;

    if (!name || !email || !password || !phone || !address ) {
      return res.status(400).json({ msg: 'Please fill in all required fields', type: 'warning' });
    }
    if (password.length < 6) {
      return res.status(400).json({ msg: 'Password must be up to 6 characters', type: 'warning' });
    }

    const userExists = await costumerModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'Email has already been registered', type: 'warning' });
    }
    const user = new  costumerModel({
      name,
      email,
      password,
      phone, 
      address,
    });
     // Generate token
    const token = generateToken(user._id);
    res.header('Access-Control-Allow-Credentials', true);
    const newCookieName = `token_${user._id}`;
    res.cookie(newCookieName, token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
    // Save token to user
    user.token.push({ token });
    

    const data = await user.save();
    if (data) {
      res.status(201).json({ msg: 'Data Inserted', type: 'success' });
    } else {
      res.status(400).json({ msg: 'Something Wrong', type: 'warning' });
      throw new Error("Invalid user data");
    }
  } catch (error) {
    // Handle the error and send an appropriate response
    res.status(500).json({ msg: 'An error occurred'  , type: 'error'});
  }
});

module.exports = {
  signup,
};