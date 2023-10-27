"use server";
import { connectToDB } from "../mongoose";
import { status, typeVideo } from "../type";
import Video from "../models/video.model";

interface uploadVideoRes {
  status: status;
}
//上传视频
export async function uploadVideo({
  videoId,
  videoURL,
  author,
  authorId,
  authorImg,
  likes,
  collections,
  share,
  comments,
  description,
  createTime,
  classification,
}: typeVideo): Promise<uploadVideoRes> {
  try {
    connectToDB();
    console.log("try uploadVideo here");
    await Video.create({
      videoId,
      videoURL,
      author,
      authorId,
      authorImg,
      likes,
      collections,
      share,
      comments,
      description,
      createTime,
      classification,
    });
    return { status: "success" };
  } catch (error) {
    console.log("error at uploadVideo!");
    return { status: "fail" };
  }
}

interface deleteVideoByVideoIdRes {
  status: status;
}
//根据videoId删除视频
export async function deleteVideoByVideoId(
  videoId: string
): Promise<deleteVideoByVideoIdRes> {
  try {
    console.log("try deleteVideobyVideoId here");
    connectToDB();
    await Video.findOneAndDelete({ videoId });
    return { status: "success" };
  } catch (error) {
    console.log("error at deleteVideoByVideoId");
    return { status: "fail" };
  }
}

interface getVideoByUserIdRes {
  res: typeVideo[];
  status: status;
}

//根据userId获取视频
export async function getVideoByUserId(
  userId: string
): Promise<getVideoByUserIdRes> {
  try {
    console.log("try getVideoByUserId here");
    connectToDB();
    const result = await Video.find({ authorId: userId });
    return { status: "success", res: result };
  } catch (error) {
    console.log("error at getVideoByUserId");
    return { status: "fail", res: [] };
  }
}

interface getAllVideosRes {
  status: status;
  res: typeVideo[];
}
//获取所有视频
export async function getAllVideos(): Promise<getAllVideosRes> {
  try {
    console.log("try getAllVideos here");
    connectToDB();
    const result = await Video.find({});
    return { status: "success", res: result };
  } catch (error) {
    return { status: "fail", res: [] };
  }
}
