
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const Dashboard = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Dashboard works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default Dashboard;
    