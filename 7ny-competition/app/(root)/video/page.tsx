"use client";

import { useRouter } from "@/node_modules/next/navigation";
import Videobar from "../../../components/videobar";
import Videomain from "../../../components/videomain";

export default function Video() {
  return (
    <main className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {/* <Videobar /> */}
      <Videomain />
    </main>
  );
}
