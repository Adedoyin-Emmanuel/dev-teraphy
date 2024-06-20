"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function Home() {
  const { toast } = useToast();

  const handleContinueWithGoogle = async () => {
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback?next=/dashboard",
      },
    });

    if (response.error) {
      toast({
        title: "Oh sugar! Authentication failed",
        description: response.error.message,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <section className="header-section my-8 mx-auto">
        <h3 className="text-3xl capitalize font-bold">Welcome chief 🙌</h3>
      </section>

      <section className="flex flex-col gap-4">
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

        <Link href={"/auth/teraphist/"}>
          <Button className="w-full">Create a teraphist account</Button>
        </Link>
      </section>
    </div>
  );
}
