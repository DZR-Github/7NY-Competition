import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoId: {
    type: String,
    unique: true,
    required: true,
  },
  videoURL: {
    type: String,
  },
  author: {
    type: String,
  },
  authorId: {
    type: String,
  },
  authorImg: {
    type: String,
  },

  likes: [
    {
      type: String,
    },
  ],
  collections: [
    {
      type: String,
    },
  ],
  share: [
    {
      type: String,
    },
  ],
  comments: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  createTime: {
    type: String,
  },
  classification: {
    type: String,
  },
});

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);

export default Video;
