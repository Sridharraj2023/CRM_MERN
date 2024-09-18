import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 const connectDB = async () => {
    return mongoose 
    .connect("mongodb://localhost:27017/mern-crm")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

export default connectDB;

