"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  userId: string;
  username: string;
}

export async function updateUser({ userId, username }: Params): Promise<void> {
  try {
    connectToDB();
    console.log("try here!");
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        onboarded: true,
      },
      { upsert: true }
    );
  } catch (error) {
    console.log("Error at here!");
    // console.log(error);
  }
}
