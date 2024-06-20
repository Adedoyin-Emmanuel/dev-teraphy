import Text from "@/app/components/text";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TeraphistLogin = () => {
  return (
    <div className="w-screen h-screen flex items-center flex-col justify-around">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-3xl capitalize font-bold">Login</h3>
          <p>Welcome back </p>
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Shhh it's a secret"
          />
        </section>

        <section className="mt-4 mb-2 w-full">
          <Button className="w-full">Login</Button>
        </section>
        <section>
          <Text className="inline">No account ? </Text>
          <Link href={"/auth/teraphist/"} className="underline text-[15px]">
            Create account
          </Link>
        </section>
      </form>
    </div>
  );
};

export default TeraphistLogin;
