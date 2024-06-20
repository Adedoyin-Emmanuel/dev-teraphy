"use client";
import React from "react";
import Text from "@/app/components/text";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "@/app/api/axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/app/components/loader";

const TeraphistLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = formData;
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "All fields are required",
        duration: 3000,
      });
      return;
    }
    try {
      const { data } = await Axios.post("/auth/login/teraphist", {
        email,
        password,
      });

      toast({
        title: "Login successful",
        description: data.message,
      });

      router.push("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response.data.message || error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-around">
      {isLoading && <Loader loading={isLoading} />}
      <form className="w-11/12 md:w-1/2 xl:w-1/4" onSubmit={handleSubmit}>
        <section className="header-section my-8">
          <h3 className="text-3xl capitalize font-bold">Login</h3>
          <p>Welcome back </p>
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Shhh it's a secret"
            value={formData.password}
            onChange={handleInputChange}
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
