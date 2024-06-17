import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Button className="flex items-center justify-between gap-4" size={"lg"}>
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
