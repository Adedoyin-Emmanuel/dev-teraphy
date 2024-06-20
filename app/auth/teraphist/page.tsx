"use client";
import Text from "@/app/components/text";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Axios } from "@/app/api/axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/app/components/loader";

const TeraphistSignup = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    fullname: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleInputChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { toast } = useToast();

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement> | any
  ) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, fullname, password } = formData;
    if (!email || !fullname || !password) {
      toast({
        title: "Validation Error",
        description: "All fields are required",
        duration: 3000,
      });
      return;
    }
    try {
      const { data } = await Axios.post("/auth/signup/teraphist", {
        email,
        name: fullname,
        password,
      });
      console.log(data);

      toast({
        title: "Signup successful",
        description: data.message,
      });
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
      <form
        className="w-11/12 md:w-1/2 xl:w-1/4"
        onSubmit={handleFormSubmit}
        method="POST"
      >
        <section className="header-section my-8">
          <h3 className="text-3xl capitalize font-bold">Signup</h3>
          <p>Signup as a teraphist</p>
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            value={formData.fullname}
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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </section>

        <section className="mt-4 mb-2 w-full">
          <Button className="w-full">Create account</Button>
        </section>
        <section>
          <Text className="inline">Got an account ? </Text>
          <Link
            href={"/auth/teraphist/login"}
            className="underline text-[15px]"
          >
            Login
          </Link>
        </section>
      </form>
    </div>
  );
};

export default TeraphistSignup;
