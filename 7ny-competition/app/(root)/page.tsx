"use client";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div>
        <p className="text-center text-[30px] font-extrabold">Home Page</p>
        <Button variant="contained">
          <SignOutButton>退出登陆</SignOutButton>
        </Button>
      </div>
    </main>
  );
}
