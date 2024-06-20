import React from "react";
import Text from "../components/text";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="w-full">
      <h1 className="text-[20px] font-extrabold text-capitalize">
        General details
      </h1>
      <Text>Update your profile details</Text>

      <form className="w-full md:w-5/6 lg:w-4/6 xl:w-3/6">
        <section className="my-4 mb-5">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
          />
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email adddress"
          />
        </section>

        <section className="my-4 mb-5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea placeholder="Type your bio" name="bio" />
        </section>

        <Button className="w-full">Save changes</Button>
      </form>
    </div>
  );
};

export default Settings;
