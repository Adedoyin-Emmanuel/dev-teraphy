import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthCodeError = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold capitalize my-3">An error occured</h1>

      <p>An error occured during authentication</p>

      <Link href={"/"}>
        <Button className="w-10/12 md:w-56 my-2">Go back</Button>
      </Link>
    </div>
  );
};

export default AuthCodeError;
