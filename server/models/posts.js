import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userID: Number,
    
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
