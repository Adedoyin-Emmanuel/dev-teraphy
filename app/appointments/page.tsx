"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Appointment = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Appointment works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default Appointment;
