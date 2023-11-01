"use server";
import { connectToDB } from "../mongoose";
import { status, typeComment } from "../type";
import Comment from "../models/comment.model";

interface createCommentRes {
  status: status;
}
//创建评论
export async function createComment({
  commentId,
  videoId,
  username,
  headImg,
  content,
  time,
}: typeComment): Promise<createCommentRes> {
  try {
    connectToDB();
    console.log("try createComment here");
    await Comment.create({
      commentId,
      videoId,
      username,
      headImg,
      content,
      time,
    });
    return { status: "success" };
  } catch (error) {
    console.log("error at createComment");
    return { status: "fail" };
  }
}

interface deleteCommentRes {
  status: status;
}
//删除评论
export async function deleteComment(
  commentId: string
): Promise<deleteCommentRes> {
  try {
    connectToDB();
    console.log("try deleteComment here");
    await Comment.findOneAndDelete({
      commentId,
    });
    return { status: "success" };
  } catch (error) {
    console.log("error at deleteComment!");
    return { status: "fail" };
  }
}

interface getCommentsByVideoIdRes {
  status: status;
  res: typeComment[];
}
//根据videoId获取评论
export async function getCommentsByVideoId(
  videoId: string
): Promise<getCommentsByVideoIdRes> {
  try {
    connectToDB();
    console.log("try getCommentsByVideoId here");
    const result = await Comment.find({ videoId });
    return {
      status: "success",
      res: result,
    };
  } catch (error) {
    console.log("error at getCommentsByVideoId!");
    return {
      status: "fail",
      res: [],
    };
  }
}
