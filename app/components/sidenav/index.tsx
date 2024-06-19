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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { Drawer } from "vaul";

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

  const SidebarContent = () => {
    return (
      <div className="border-r-[1px] flex flex-col justify-between h-full p-3">
        <section className="-mx-1">
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
            href={"/app/teraphists"}
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
            href={"/app/appointments"}
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
            href={"/app/messages"}
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
              href={"/app/settings"}
            >
              <Settings strokeWidth={1.5} size={20} />
              <Text>Settings</Text>
            </Link>
            <section className={sidebarItemsClass}>
              <LogOut strokeWidth={1.5} size={20} />
              <Text>Logout</Text>
            </section>
          </section>

          <section className="mt-5">
            <Separator />

            <div className="w-full flex items-center gap-x-3 p-2 cursor-pointer">
              <img
                src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                width={30}
                height={30}
                alt="User profile"
              />

              <div>
                <strong>Adedoyin Emmanuel</strong>
                <p className="text-[13px] text-slate-600">
                  adedoyine535@gmail.com
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  };

  return (
    <div className="h-screen w-screen flex ">
      <section className="md:flex hidden">
        <SidebarContent />
      </section>

      <section className="md:hidden ">
        <Drawer.Root direction="left">
          <div
            className={`border-b-[1px] border-secondary container-fluid backdrop-filter z-[100] backdrop-blur-md fixed top-0 right-0 left-0 ${className}`}
          >
            <section className="w-full flex items-center justify-between p-1">
              <Drawer.Trigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-primary focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`h-7 w-7`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </Drawer.Trigger>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img
                    src="https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"
                    width={30}
                    height={30}
                    alt="User profile"
                    className="mx-2"
                  />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </section>
          </div>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col justify-between h-full w-3/4 mt-24 fixed bottom-0 z-[1000]">
              <SidebarContent />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </section>

      <section className="p-3 w-full md:w-3/4 lg:w-11/12 overflow-y-auto ">
        <section className="md:hidden">
          <br />
          <br />
        </section>
        {children}
      </section>
    </div>
  );
};

export default Sidenav;
