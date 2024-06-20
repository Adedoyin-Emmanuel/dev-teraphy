"use client";
import { useToast } from "@/components/ui/use-toast";
import supabase from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Text from "../components/text";
import { Video, MessageCircleMore } from "lucide-react";

import Loader from "@/app/components/loader";

const Dashboard = async () => {
  const { toast } = useToast();
  const router = useRouter();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <div className="w-full flex xl:flex-row flex-col  justify-between p-1 flex-wrap">
      <section className="">
        <h1 className="text-[20px] font-extrabold text-capitalize">
          Statistics
        </h1>

        <section className="my-2 flex md:flex-row flex-col gap-4 flex-wrap">
          <section className="lg:w-72 w-full border rounded-md p-4 cursor-pointer">
            <section className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold">20</h1>

              <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
                <Video strokeWidth={1} size={30} />
              </div>
            </section>
            <Text className="mt-2">20+ appointments</Text>
          </section>

          <section className="lg:w-72 w-full border rounded-md p-4 cursor-pointer">
            <section className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold">15</h1>

              <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
                <MessageCircleMore strokeWidth={1} size={30} />
              </div>
            </section>
            <Text className="mt-2">15+ messages</Text>
          </section>

          <section className="lg:w-72 w-full border rounded-md p-4 cursor-pointer">
            <section className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold">15</h1>

              <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
                <MessageCircleMore strokeWidth={1} size={30} />
              </div>
            </section>
            <Text className="mt-2">15+ messages</Text>
          </section>
        </section>

        <section className="recent my-10">
          <h1 className="text-[20px] font-extrabold text-capitalize my-2">
            Past appointments{" "}
          </h1>
          <section className="border rounded-md p-4 cursor-pointer flex items-center justify-between">
            <section className="flex items-center gap-3">
              <img
                src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                width={30}
                height={30}
                alt="User profile"
              />

              <section>
                <h2 className="text-[15px]">Quick call with Emmysoft</h2>
                <Text className="text-slate-500 text-sm">2024/06/14</Text>
              </section>
            </section>

            <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
              <MessageCircleMore strokeWidth={1.5} size={20} />
            </div>
          </section>
        </section>
      </section>
      <br className="md:hidden" />
      <section className="xl:w-2/6 lg:w-4/6">
        <h1 className="text-[20px] font-extrabold text-capitalize">Schedule</h1>

        <section className="w-full my-2 flex flex-col gap-4">
          <section className="border rounded-md p-4 cursor-pointer flex items-center justify-between">
            <section className="flex items-center gap-3">
              <img
                src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                width={30}
                height={30}
                alt="User profile"
              />

              <section>
                <h2 className="text-[15px]">Quick call with Emmysoft</h2>
                <Text className="text-slate-500 text-sm">2024/06/14</Text>
              </section>
            </section>

            <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
              <MessageCircleMore strokeWidth={1.5} size={20} />
            </div>
          </section>

          <section className="border rounded-md p-4 cursor-pointer flex items-center justify-between">
            <section className="flex items-center gap-3">
              <img
                src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                width={30}
                height={30}
                alt="User profile"
              />

              <section>
                <h2 className="text-[15px]">Quick call with Emmysoft</h2>
                <Text className="text-slate-500 text-sm">2024/06/14</Text>
              </section>
            </section>

            <div className="border rounded-md w-auto h-auto flex p-1 items-center justify-center">
              <MessageCircleMore strokeWidth={1.5} size={20} />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
