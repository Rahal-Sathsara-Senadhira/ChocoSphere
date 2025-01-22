import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://smarsathsara:X2KiPnC9pliQkkTa@cluster0.cocvn.mongodb.net/Choco-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
