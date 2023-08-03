import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
      min: 2,
      max: 50,
    },
    lastName: {
      required: true,
      type: String,
      min: 2,
      max: 50,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      min: 8,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
