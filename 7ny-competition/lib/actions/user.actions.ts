"use server";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { status, typeUser } from "../type";

interface createUserRes {
  status: status;
}
//初始化User信息
export async function createUser({
  userId,
  username,
  bio,
  headImg,
  collections,
  likes,
  follows,
  fans,
  beLikes,
  videos,
  isOnboarded,
}: typeUser): Promise<createUserRes> {
  try {
    connectToDB();
    console.log("try createUser");
    await User.create({
      userId,
      username,
      bio,
      isOnboarded,
      headImg,
      collections,
      likes,
      follows,
      fans,
      beLikes,
      videos,
    });
    return { status: "success" };
  } catch (error) {
    console.log("Error at createUser!");
    return { status: "fail" };
  }
}

interface updateUserRes {
  status: status;
}
//更新User信息
export async function updateUser({
  userId,
  username,
  bio,
  headImg,
  collections,
  likes,
  follows,
  fans,
  beLikes,
  videos,
  isOnboarded,
}: typeUser): Promise<updateUserRes> {
  try {
    connectToDB();
    console.log("try updateUser");
    await User.findOneAndUpdate(
      { userId },
      {
        username,
        bio,
        isOnboarded,
        headImg,
        collections,
        likes,
        follows,
        fans,
        beLikes,
        videos,
      },
      {
        upsert: true,
      }
    );
    return { status: "success" };
  } catch (error) {
    console.log("Error at updateUser");
    return { status: "fail" };
  }
}

interface getUserMsgRes {
  res: typeUser | null;
  status: status;
}

//获取用户信息
export async function getUserMsg(userId: string): Promise<getUserMsgRes> {
  try {
    console.log("try getUserMsg here");
    connectToDB();
    const result = await User.findOne({ userId });
    return { status: "success", res: result };
  } catch (error) {
    console.log("error at getUserMsg");
    return { status: "fail", res: null };
  }
}
