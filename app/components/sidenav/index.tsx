import React from "react";
import Image from "next/image";
import Text from "@/app/components/text";
import {
  Gauge,
  Brain,
  Video,
  MessageCircleMore,
  Settings,
  LogOut,
} from "lucide-react";

interface SidenavProps {
  children: React.ReactNode;
  className?: string;
}

const Sidenav = ({ children, className }: SidenavProps) => {
  const sidebarItemsClass =
    "flex items-center gap-x-3 border-[1px] border-transparent p-2 rounded cursor-pointer hover:border-[1px] hover:border-[#e5e7eb] hover:bg-slate-50 transition-all ease-linear duration-150 my-2";
  return (
    <div
      className={`${className} md:w-3/12 lg:w-2/12 border h-screen fixed p-2`}
    >
      <section className="flex items-center gap-x-2 my-2 mx-1">
        <Image
          src={"/assets/dark.svg"}
          width={24}
          height={24}
          alt="Dev teraphy logo"
        />
        <h1 className="font-bold text-[18px]">Dev teraphy</h1>
      </section>

      <section className="nav-items -mx-1">
        <section className={sidebarItemsClass}>
          <Gauge strokeWidth={1.5} size={20} />
          <Text>Dashboard</Text>
        </section>
        <section className={sidebarItemsClass}>
          <Brain strokeWidth={1.5} size={20} />
          <Text>Teraphists</Text>
        </section>
        <section className={sidebarItemsClass}>
          <Video strokeWidth={1.5} size={20} />
          <Text>Appointments</Text>
        </section>
        <section className={sidebarItemsClass}>
          <MessageCircleMore strokeWidth={1.5} size={20} />
          <Text>Messages</Text>
        </section>
        <section className={sidebarItemsClass}>
          <Settings strokeWidth={1.5} size={20} />
          <Text>Settings</Text>
        </section>
        <section className={sidebarItemsClass}>
          <LogOut strokeWidth={1.5} size={20} />
          <Text>Logout</Text>
        </section>
      </section>
    </div>
  );
};

export default Sidenav;
