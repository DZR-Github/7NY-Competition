"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div>
        <UserButton afterSignOutUrl="/" />
        <p>Home Page</p>
      </div>
    </main>
  );
}
