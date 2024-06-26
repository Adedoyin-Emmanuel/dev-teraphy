"use client";
import React, { useState, useEffect, useCallback } from "react";
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
import supabase from "@/utils/supabase/client";
import { Drawer } from "vaul";
import { User } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchData().then((user) => {
      setLoading(false);
      setCurrentUser(user as User);
    });
  }, [fetchData]);

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
              currentPath == "/dashboard" ? currentPathClass : sidebarItemsClass
            }
            href={"/dashboard"}
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

            {loading ? (
              <Skeleton className="w-full flex items-center gap-x-3 p-2  my-2">
                <div>
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
              </Skeleton>
            ) : (
              <div className="w-full flex items-center gap-x-3 p-2 cursor-pointer">
                <img
                  src={currentUser?.user_metadata?.avatar_url}
                  width={35}
                  height={35}
                  alt="User profile"
                  className="rounded-full"
                />

                <div>
                  <strong>{currentUser?.user_metadata.full_name}</strong>
                  <p className="text-[13px] text-slate-600">
                    {currentUser?.user_metadata.email}
                  </p>
                </div>
              </div>
            )}
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
                  {loading ? (
                    <Skeleton className="w-10 h-10 rounded-full" />
                  ) : (
                    <img
                      src={currentUser?.user_metadata?.avatar_url}
                      width={35}
                      height={35}
                      alt="User profile"
                      className="mx-2 rounded-full"
                    />
                  )}
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
