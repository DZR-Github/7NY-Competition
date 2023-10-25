"use client";
import { updateUser } from "@/lib/actions/user.actions";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div>
        <p className="text-center text-[30px] font-extrabold">Home Page</p>

        <SignOutButton></SignOutButton>
        <Button
          onClick={() => {
            updateUser({
              userId: "1234567",
              username: "username_test01",
            })
              .then((res) => {
                console.log("connect success!");
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Create01
        </Button>
        <Button
          onClick={() => {
            updateUser({
              userId: "1234567",
              username: "username_test02",
            })
              .then((res) => {
                console.log("connect success!");
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Create02
        </Button>
        <Button
          onClick={() => {
            updateUser({
              userId: "1234567",
              username: "username_test03",
            })
              .then((res) => {
                console.log("connect success!");
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Create03
        </Button>
        <Button onClick={() => {}}>Create</Button>
      </div>
    </main>
  );
}
