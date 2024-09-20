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

export const getUserId = async (req, res) => {
  try {
    const { id } = req.params; // assuming you're using route params to pass the ID

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const deleteData = async (req, res) => {
  try {
    const { id } = req.params; // assuming the ID is passed as a URL parameter

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Deleted successfully", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const update = async (req, res) => {
  try {
    const { id } = req.params; // Get the user ID from URL params

    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

