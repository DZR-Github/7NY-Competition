"use client";
import { getUserId } from "@/lib/clerk";
import { useEffect, useState } from "react";

const useUserId = () => {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | undefined>("");
  const [refresh, setRefresh] = useState(1);

  const getUserid = () => {
    setLoading(true);
    getUserId()
      .then((res) => {
        setUserId(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUserid();
  }, [refresh]);

  return {
    loading,
    userId,
    setRefresh,
  };
};

export default useUserId;
