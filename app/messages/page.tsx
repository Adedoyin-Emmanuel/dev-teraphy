"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Text from "../components/text";

const Messages = () => {
  const pathname = usePathname();

  return (
    <div className="w-full my-2">
      <h1 className="text-[20px] font-extrabold text-capitalize">
        Your Messages
      </h1>

      <br />
      <section className="flex items-start gap-x-3 border p-2 md:w-5/6 lg:w-1/2 xl:w-2/4 my-2 cursor-pointer">
        <img
          src="https://api.dicebear.com/7.x/big-smile/svg?seed=emmysoft"
          alt="User image"
          width={50}
          height={50}
        />
        <section className="w-full">
          <section className="w-full flex items-center justify-between">
            <strong className="font-bold">Adedoyin Emmanuel</strong>
            <Text className="text-sm text-slate-500">5 hours ago</Text>
          </section>
          <section className="message text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            praesentium.
          </section>
        </section>
      </section>

      <section className="flex items-start gap-x-3 border p-2 md:w-5/6 lg:w-1/2 xl:w-2/4 my-2 cursor-pointer">
        <img
          src="https://api.dicebear.com/7.x/big-smile/svg?seed=claire"
          alt="User image"
          width={50}
          height={50}
        />
        <section className="w-full">
          <section className="w-full flex items-center justify-between">
            <strong className="font-bold">Claire Daveson</strong>
            <Text className="text-sm text-slate-500">5 hours ago</Text>
          </section>
          <section className="message text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            praesentium.
          </section>
        </section>
      </section>

      <section className="flex items-start gap-x-3 border p-2 md:w-5/6 lg:w-1/2 xl:w-2/4 my-2 cursor-pointer">
        <img
          src="https://api.dicebear.com/7.x/big-smile/svg?seed=adeniyi"
          alt="User image"
          width={50}
          height={50}
        />
        <section className="w-full">
          <section className="w-full flex items-center justify-between">
            <strong className="font-bold">Adedoyin Adeniyi</strong>
            <Text className="text-sm text-slate-500">5 hours ago</Text>
          </section>
          <section className="message text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            praesentium.
          </section>
        </section>
      </section>
    </div>
  );
};

export default Messages;
