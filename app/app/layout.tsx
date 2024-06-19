import { Suspense } from "react";
import Sidenav from "../components/sidenav";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense>
      <Sidenav>{children}</Sidenav>
    </Suspense>
  );
}
