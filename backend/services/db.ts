import mongoose from "mongoose";
import { ENV_MONOGO_URI } from "../constants/envconstants";

export const connecttodb = async () => {
  try {
    await mongoose.connect(ENV_MONOGO_URI).then(() => {
      console.log("Database connection success");
    });
  } catch (error) {
    throw new Error("Database connection failed");
  }
};
