import Image from "next/image";
import { Favorite, Sms, BookmarkBorder, Reply } from "@mui/icons-material";
import { getUserMsg, getUserMsgRes } from "../lib/actions/user.actions";
import {
  deleteVideoByVideoId,
  getAllVideos,
  getVideoByUserId,
  uploadVideo,
} from "@/lib/actions/video.actions";
import useUserId from "@/lib/hooks/useUserId";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function DYmain() {
  const { loading, userId } = useUserId();
  const [id, setId] = useState(userId);

  const CreateUser = () => {
    const userIdString: string = String(id); // 将id转换为字符串类型
    getUserMsg(userIdString)
      .then((res) => {
        console.log("connect success!");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getAllVideos().then((res) => {
  //   console.log(res);
  // });
  return (
    <div className="m-auto">
      <Button onClick={CreateUser}>CreateUser</Button>
      <div className="w-[600px]">
        <div className="flex justify-between">
          <div className=" flex">
            <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
              <Image src="/1.jpg" alt="" width={56} height={56} />
            </div>
            <div className="flex flex-col ml-[6px]">
              <p>11111</p>
              <p>1111</p>
              <p>111</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[90px] h-[35px] border border-rose-500 text-rose-500 text-center leading-[32px] rounded">
              关注
            </div>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="ml-[54px] rounded">video</div>
          <div className="flex flex-col">
            <div className="mb-[5px]">
              <div className="w-12 h-12 mb-[4px] flex justify-center items-center rounded-full bg-gray-100">
                <Favorite />
              </div>
              <div className="text-xs text-center">111k</div>
            </div>
            <div className="mb-[5px]">
              <div className="w-12 h-12 mb-[4px] flex justify-center items-center rounded-full bg-gray-100">
                <Sms />
              </div>
              <div className="text-xs text-center">11</div>
            </div>
            <div className="mb-[5px]">
              <div className="w-12 h-12 mb-[4px] flex justify-center items-center rounded-full bg-gray-100">
                <BookmarkBorder />
              </div>
              <div className="text-xs text-center">111</div>
            </div>
            <div className="mb-[5px]">
              <div className="w-12 h-12 mb-[4px] flex justify-center items-center rounded-full bg-gray-100">
                <Reply className="scale-x-[-1]" />
              </div>
              <div className="text-xs text-center">111k2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
