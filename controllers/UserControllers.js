import User from "../models/User.js";

export const user = async (req, res) => {
  try {
   const users = await User.find();

   return res.json({
    users
   })
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {
  const { name, email, lastname} = req.body;
  try {
    const user = await User.create({
      name, 
      email,
      lastname
    })
  
    res.json({
      user
    })
  } catch (error) {
    res.json({
      message: "Invalid"
    })
  }
}