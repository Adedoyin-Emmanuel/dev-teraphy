import React from "react";
import { FadeLoader } from "react-spinners";

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
    <div
      className={`flex items-center justify-center w-full h-full ${className}`}
    >
      <FadeLoader loading={loading} radius={10} width={width} height={height} />
    </div>
  );
};

export default Loader;
