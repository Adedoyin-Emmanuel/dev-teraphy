"use client";
import React from "react";
import Image from "next/image";
import Text from "@/app/components/text";
import Link from "next/link";
import {
  Gauge,
  Brain,
  Video,
  MessageCircleMore,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface SidenavProps {
  children: React.ReactNode;
  className?: string;
}

const Sidenav = ({ children, className }: SidenavProps) => {
  const currentPath = usePathname();

  const baseClass =
    "flex items-center gap-x-3 border-[1px] p-2 rounded cursor-pointer transition-all ease-linear duration-150 my-2";
  const hoverClass =
    "hover:border-[1px] hover:border-[#e5e7eb] hover:bg-slate-50";
  const sidebarItemsClass = `${baseClass} border-transparent ${hoverClass}`;
  const currentPathClass = `${baseClass} bg-slate-50`;

  return (
    <div
      className={`${className} md:w-3/12 lg:w-2/12 border h-screen fixed p-2 flex flex-col justify-between`}
    >
      <section className="nav-items -mx-1">
        <section className="flex items-center gap-x-2 mt-3 mb-4 mx-1">
          <Image
            src={"/assets/dark.svg"}
            width={24}
            height={24}
            alt="Dev teraphy logo"
          />
          <h1 className="font-bold text-[18px]">Dev teraphy</h1>
        </section>
        <Link
          className={
            currentPath.includes("app") ? currentPathClass : sidebarItemsClass
          }
          href={"/app"}
        >
          <Gauge strokeWidth={1.5} size={20} />
          <Text>Dashboard</Text>
        </Link>
        <Link
          className={
            currentPath.includes("teraphists")
              ? currentPathClass
              : sidebarItemsClass
          }
          href={"/teraphists"}
        >
          <Brain strokeWidth={1.5} size={20} />
          <Text>Teraphists</Text>
        </Link>
        <Link
          className={
            currentPath.includes("appointments")
              ? currentPathClass
              : sidebarItemsClass
          }
          href={"/appointments"}
        >
          <Video strokeWidth={1.5} size={20} />
          <Text>Appointments</Text>
        </Link>
        <Link
          className={
            currentPath.includes("messages")
              ? currentPathClass
              : sidebarItemsClass
          }
          href={"/messages"}
        >
          <MessageCircleMore strokeWidth={1.5} size={20} />
          <Text>Messages</Text>
        </Link>
      </section>

      <section>
        <section className="bottom">
          <Link
            className={
              currentPath.includes("settings")
                ? currentPathClass
                : sidebarItemsClass
            }
            href={"/settings"}
          >
            <Settings strokeWidth={1.5} size={20} />
            <Text>Settings</Text>
          </Link>
          <section className={sidebarItemsClass}>
            <LogOut strokeWidth={1.5} size={20} />
            <Text>Logout</Text>
          </section>
        </section>

        <section className="mt-5 mb-2">
          <div className="w-full flex items-center gap-x-3 rounded border p-2 cursor-pointer">
            <img
              src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
              width={30}
              height={30}
              alt="User profile"
            />

            <div>
              <strong>Adedoyin Emmanuel</strong>
              <p className="text-sm text-slate-600">adedoyine535@gmail.com</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Sidenav;
