import React from "react";
import { FadeLoader } from "react-spinners";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  loading?: boolean;

  width?: number;
  height?: number;
}

const Loader = ({
  className,
  loading,
  width = 4,
  height = 12,
}: LoaderProps) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[1000] bg-black/40  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
      ></div>
      <div className="w-screen h-screen flex items-center justify-center fixed ">
        <FadeLoader
          loading={loading}
          radius={10}
          width={width}
          height={height}
          speedMultiplier={1.2}
        />
      </div>
    </>
  );
};

export default Loader;
