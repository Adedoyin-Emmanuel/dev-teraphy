import { Suspense } from "react";
import Sidenav from "@/app/components/sidenav";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Sidenav>{children}</Sidenav>;
};

export default AppLayout;
