import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: {
    type: String,
    unique: true,
    required: true,
  },
  videoId: {
    type: String,
  },
  username: {
    type: String,
  },
  headImg: {
    type: String,
  },
  content: {
    type: String,
  },

  time: {
    type: String,
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
