
"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";


const Messages = () => {

    const pathname = usePathname();

    return (
        <div>
            <h1>Messages works!</h1>
            <p>Current pathname: {pathname}</p>
        </div>
    );  
}

export default Messages;
    