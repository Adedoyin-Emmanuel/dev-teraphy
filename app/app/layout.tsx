import { Suspense } from "react";
import Sidenav from "../components/sidenav";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense>
      <section className="w-screen h-screen scroll-smooth">
        <section className="w-full">
          <Sidenav>{children}</Sidenav>
        </section>
      </section>
    </Suspense>
  );
}
