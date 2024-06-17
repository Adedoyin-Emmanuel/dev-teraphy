"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/supabase/client";

export default function Home() {
  const handleContinueWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:"http://localhost:3000/auth/callback"
      }
    });
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Button
        className="flex items-center justify-between gap-4"
        size={"lg"}
        onClick={handleContinueWithGoogle}
      >
        <Image
          src={"/assets/google.svg"}
          width={24}
          height={24}
          alt="Google icon"
        />
        Continue with google
      </Button>
    </div>
  );
}
