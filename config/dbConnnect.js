import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    } )
    console.log("Mongodb Conneted")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default dbConnect;