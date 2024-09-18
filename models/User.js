import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("Users", UserSchema);

export default userModel;