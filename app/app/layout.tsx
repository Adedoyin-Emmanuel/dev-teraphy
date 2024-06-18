import { Suspense } from "react";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense>
      <section className="w-screen h-screen scroll-smooth">
        <section className="w-full">{children}</section>
      </section>
    </Suspense>
  );
}
