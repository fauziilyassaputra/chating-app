import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connect to mongoDB");
  } catch (err) {
    console.log("error connecting to mongoDB", err.message);
  }
};

export default connectToMongoDB;
