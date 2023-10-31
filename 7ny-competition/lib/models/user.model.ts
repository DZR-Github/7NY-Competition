import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: false,
    required: true,
  },
  bio: {
    type: String,
  },
  headImg: {
    type: String,
  },
  collections: [
    {
      type: String,
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  follows: [
    {
      type: String,
    },
  ],
  fans: [
    {
      type: String,
    },
  ],
  beLikes: [
    {
      type: String,
    },
  ],
  videos: [
    {
      type: String,
    },
  ],
  isOnboarded: {
    type: Boolean,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
