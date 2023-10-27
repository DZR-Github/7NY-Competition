"use client";
import useUserId from "@/lib/hooks/useUserId";

export default function Onboarding() {
  const { loading, userId } = useUserId();
  return (
    <main>
      <div>
        <p className="text-center text-[30px] font-extrabold">
          Onboarding Page
        </p>
      </div>
    </main>
  );
}
