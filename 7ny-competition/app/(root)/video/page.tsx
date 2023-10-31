"use client";

import { useRouter } from "@/node_modules/next/navigation";
import Videobar from "../../../components/videobar";
import Videomain from "../../../components/videomain";

export default function Video() {
  return (
    <main className="flex">
      <Videobar />
      <Videomain />
    </main>
  );
}
