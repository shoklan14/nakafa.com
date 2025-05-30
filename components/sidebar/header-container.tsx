"use client";

import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function HeaderContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/60 backdrop-blur-sm lg:hidden lg:border-t",
        // If the pathname is the home page, don't show the header
        pathname === "/" && "border-0",
        pathname === "/search" && "border-b"
      )}
    >
      {children}
    </header>
  );
}
