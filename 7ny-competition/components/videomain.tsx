import React from "react";
import ControllableStates from "./videosort";
import { AlternateEmail, Numbers } from "@mui/icons-material";

export default function Videomain() {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50">
      <div className="w-[700px] h-[600px] rounded-xl shadow bg-white p-7 flex items-center flex-col">
        {/* 上传视频 */}
        <div className="w-[600px] h-[300px] mb-[30px] border border-dashed rounded-md flex justify-center items-center flex-col">
          <div>
            <svg
              fill="#b0b0b4"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              style={{
                color: "var(--tux-colorTextQuaternary)",
                width: "48px",
                height: "48px",
              }}
            >
              <path d="M25.84 37h8.66a9.5 9.5 0 0 0 1.35-18.9A12 12 0 0 0 12 20v.01A8.5 8.5 0 0 0 12.5 37h10.34V25.6l-1.72 1.74a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 0 1 0-1.41l4.4-4.4c.68-.76 1.22-.77 2 .08l4.28 4.32a1 1 0 0 1 0 1.4l-.7.72a1 1 0 0 1-1.42 0l-1.72-1.75V37Z"></path>
            </svg>
          </div>
          <div>选择要上传的文件</div>
          <div className="text-gray-500 text-center text-sm">
            <div>或拖放文件</div>
            <div>MP4或WebM</div>
            <div>720x1280 分辨率或更高</div>
            <div>长达10分钟</div>
            <div>小于10GB</div>
          </div>
          <div
            className="w-[300px] h-[40px] text-white text-center mt-[10px] leading-[40px] rounded"
            style={{ backgroundColor: "#fe2c55" }}
          >
            选择文件
          </div>
        </div>
        {/* 字幕 */}
        <div>
          <div className="h-[25px]">
            <span className="float-left">字幕</span>
            <span className="float-right">0/2200</span>
          </div>
          <div className="w-[600px] h-[40px] p-[6px] border border-gray-200 rounded relative">
            <input type="text" className="w-[500px] outline-none pl-[5px]" />
            <AlternateEmail />
            <Numbers className="ml-4" />
          </div>
        </div>
        {/* 视频分类 */}
        <ControllableStates />
      </div>
    </div>
  );
}

// export { Videomain };
