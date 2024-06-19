"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Teraphists = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Teraphists works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default Teraphists;
