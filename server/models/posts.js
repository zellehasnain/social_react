import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    userPicturePath: String,
    picturePath: String,
    likes: {
      type: Map,
      of: Boolean,
      default: {},
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
