"use client";
import {
  createComment,
  deleteComment,
  getCommentsByVideoId,
} from "@/lib/actions/comment.actions";
import { createUser, updateUser } from "@/lib/actions/user.actions";
import {
  deleteVideoByVideoId,
  getAllVideos,
  getVideoByUserId,
  uploadVideo,
} from "@/lib/actions/video.actions";
import { videoClassification } from "@/lib/type";
import { SignOutButton } from "@clerk/nextjs";
import { Button, TextField } from "@mui/material";
import useUserId from "@/lib/hooks/useUserId";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Dayjs from "dayjs";
import { deleteFile, getVideoUrl, uploadFile } from "../../lib/qiniu/qiniu";
import NestedList from "../../components/siderbar";
import DYmain from "../../components/dymain";

export default function Home() {
  const { loading, userId } = useUserId();
  const [id, setId] = useState(userId);
  const [url, setUrl] = useState<string>();
  const [file, setFile] = useState<FormData>();

  useEffect(() => {
    setId(userId);
  }, [loading]);

  const CreateUser = () => {
    createUser({
      userId: id!,
      username: "username_test03",
      headImg: "headImgUrl03",
      collections: [],
      likes: [],
      follows: [],
      fans: [],
      beLikes: [],
      videos: [],
      isOnboarded: false,
    })
      .then((res) => {
        console.log("connect success!");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const UploadVideo = () => {
    uploadVideo({
      videoId: "1asaasas02",
      videoURL: "videoURL",
      author: "username",
      authorId: "userId2",
      authorImg: "authorImgURL",
      likes: ["userId01", "userId02", "userId03"],
      collections: [],
      share: [],
      comments: [],
      description: "description",
      createTime: Dayjs().format("YYYY-MM-DD HH:mm:ss"),
      classification: videoClassification.CAR,
    }).then((res) => {
      console.log(res);
    });
  };

  const CreateComment = () => {
    createComment({
      commentId: "22222adfa3a",
      videoId: "videoIdasdf",
      username: "username",
      headImg: "headImgURL",
      content: "I like it!",
      time: Dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });
  };

  const UpdateUser = () => {
    updateUser({
      userId: id!,
      username: "username_test12",
      headImg: "headImgUrl11",
      collections: [],
      likes: [],
      follows: [],
      fans: [],
      beLikes: [],
      videos: [],
      isOnboarded: false,
    });
  };

  const DeleteComment = () => {
    deleteComment("2222");
  };

  const getComments = () => {
    getCommentsByVideoId("videoId").then((res) => {
      console.log(res);
    });
  };

  const deleteVideo = () => {
    deleteVideoByVideoId("111222");
  };

  const getVideo = () => {
    getVideoByUserId("userId1").then((res) => {
      console.log(res);
    });
  };

  const getAllVideo = () => {
    getAllVideos().then((res) => {
      console.log(res);
    });
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const Files = event.target.files;
    console.log(event.target.files);
    const formData = new FormData();
    Files && formData.append("image", Files[0]);
    Files && setFile(formData);
  };

  const deleteFiles = () => {
    deleteFile("images/upload_380ddd9d4f14504d34a9ab75a89f250f.mp4").then(
      (res) => {
        console.log(res);
      }
    );
  };

  const getOneVideoUrl = () => {
    getVideoUrl("images/upload_380ddd9d4f14504d34a9ab75a89f250f.mp4").then(
      (res) => {
        setUrl(res.data);
      }
    );
  };

  useEffect(() => {}, [file]);

  const upload = () => {
    file && uploadFile(file);
  };

  return (
    <main>
      <div>
        <p className="text-center text-[30px] font-extrabold">Home Page</p>
        <SignOutButton></SignOutButton>
        <Button onClick={CreateUser}>CreateUser</Button>
        <Button onClick={UpdateUser}>updateUser</Button>
        <Button onClick={UploadVideo}>uploadVideo</Button>
        <Button onClick={deleteVideo}>deleteVideo</Button>
        <Button onClick={getVideo}>getVideoByUserId</Button>
        <Button onClick={getAllVideo}>getAllVideo</Button>
        <Button onClick={CreateComment}>createComment</Button>
        <Button onClick={DeleteComment}>deleteComment</Button>
        <Button onClick={getComments}>getComments</Button>
      </div>

      <form>
        <input type="file" id="uploadfile" onChange={handleFileInput} />
      </form>
      <Button onClick={upload}>上传文件</Button>
      <Button onClick={deleteFiles}>删除文件</Button>
      <Button onClick={getOneVideoUrl}>获取一个视频</Button>
      {url && <video width={500} controls src={url}></video>}

      <div className="flex">
        <NestedList />
        <DYmain />
      </div>
    </main>
  );
}
