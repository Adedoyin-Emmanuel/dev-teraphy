"use client";
import React from "react";
import Text from "@/app/components/text";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useToast } from "@/components/ui/use-toast";
import { Axios } from "@/app/api/axios";
import Loader from "@/app/components/loader";
import { useRouter } from "next/navigation";

const OTP = () => {
  const [value, setValue] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!value || value.length !== 6) {
      toast({
        title: "Error",
        description: "OTP is required",
        variant: "destructive",
        duration: 3000,
      });
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await Axios.post("/auth/verify-otp", {
        otp: value,
      });

      toast({
        title: "Verification successful",
        description: data.message,
      });

      router.push("/auth/teraphist/login");
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
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {isLoading && <Loader loading={isLoading} />}
      <section className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-3xl capitalize font-bold">OTP</h3>
          <Text>Input the OTP you sent to your email </Text>
        </section>

        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup className="w-full flex items-center justify-between">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button className="w-full my-3" onClick={handleSubmit}>
          Proceed
        </Button>
      </section>
    </div>
  );
};

export default OTP;
