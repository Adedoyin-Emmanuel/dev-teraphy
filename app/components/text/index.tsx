import React from "react";

interface TextProps {
  className?: string;
  children: String;
}

const Text = ({ className, children }: TextProps) => {
  const formattedChildren =
    children.charAt(0).toUpperCase() + children.slice(1).toLowerCase();

  return <p className={`${className} text-[15px]`}>{formattedChildren}</p>;
};

export default Text;
