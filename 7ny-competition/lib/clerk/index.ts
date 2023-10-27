"use server";
import { currentUser } from "@clerk/nextjs";

export async function getUserId(): Promise<string | undefined> {
  try {
    const result = await currentUser().then((res) => {
      return res?.id;
    });
    return result;
  } catch (error) {
    console.log("Error at getUserId()");
  }
}
