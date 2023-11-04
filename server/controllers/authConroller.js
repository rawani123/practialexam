import userModel from "../models/userModel.js";
import  JWT from "jsonwebtoken";

const JWTSECRETKEY="BGBUDNFIYDVBKL"

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is required" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Register Please Login",
      });
    }

    const user = await new userModel({
      name,
      email,
      address,
      phone,
      password,
      answer,
    }).save();

    res.status(200).send({
      success: true,
      message: "user register succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in resistration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
     
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }

      if (password !=user.password) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      
      const token = await JWT.sign({ _id: user._id }, JWTSECRETKEY, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

