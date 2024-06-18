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

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SidebarContent = () => {
    return (
      <>
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
                <p className="text-sm text-slate-600">adedoyine535@gmail.com</p>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  };

  return (
    <div className="w-screen h-screen">
      <div
        className={`${className} md:w-3/12 lg:w-2/12 border h-screen fixed p-3 md:flex flex-col justify-between hidden`}
      >
        <SidebarContent />
      </div>

      <section className="fixed md:hidden">
        <Drawer.Root direction="left">
          <div
            className={`border-b-[1px] border-secondary container-fluid backdrop-filter z-[100] backdrop-blur-md fixed top-0 right-0 left-0 ${className}`}
          >
            <section className="w-full flex items-center justify-between p-1">
              <Drawer.Trigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-[#5A83ED] focus:outline-none"
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
            <Drawer.Content className="bg-white flex flex-col justify-between h-full w-3/4 p-3 mt-24 fixed bottom-0">
              <SidebarContent />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </section>
    </div>
  );
};

export default Sidenav;
