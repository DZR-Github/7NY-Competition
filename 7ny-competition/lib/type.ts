export interface typeUser {
  username: string; //用户名
  userId: string; //用户ID
  headImg: string; //头像
  bio: string; //个人简介
  collections: string[]; //收藏的视频videoId
  likes: string[]; //点赞的视频videoId
  follows: string[]; //关注作者userId
  fans: string[]; //粉丝userId数组
  beLikes: string[]; //点赞者userId数组
  videos: string[]; //视频videoId数组
  isOnboarded: boolean; //是否登记过信息
}

export interface typeVideo {
  videoId: string; //视频ID
  videoURL: string; //视频URL
  author: string; //作者
  authorId: string; //作者ID
  authorImg: string; //作者头像
  likes: string[]; //点赞userId数组
  collections: string[]; //收藏userId数组
  share: string[]; //分享userId数组
  comments: string[]; //评论commentId数组
  description: string; //视频文案
  createTime: string; //发表时间
  classification: string; //视频分类
}

export interface typeComment {
  commentId: string; //评论ID
  videoId: string; //视频ID
  username: string; //评论人
  headImg: string; //头像
  content: string; //评论内容
  time: string; //评论时间
}

export const videoClassification = {
  FOOD: "food", //美食类
  EMOTION: "emotion", //情感类
  SPORTS: "sports", //体育类
  LIFE: "life", //生活类
  EDUCATE: "educate", //教育类
  TRAVEL: "travel", //旅行类
  TWODIMENSIONS: "twoDimensions", //二次元类
  CAR: "car", //汽车类
};

export type status = "success" | "fail";

export const SUCCESS = "success";

export const FAIL = "fail";
