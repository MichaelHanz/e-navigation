"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import BreadcrumbBar from "@/components/shell/BreadcrumbBar";
import PortalHeader from "@/components/shell/PortalHeader";
import Sidebar from "@/components/shell/Sidebar";

export default function PortalShell({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <PortalHeader
        onMenuClick={() => {
          setMobileNavOpen((value) => !value);
          setDesktopNavOpen(true);
        }}
      />
      <BreadcrumbBar />
      <div className="relative flex flex-1 overflow-hidden">
        <Sidebar
          mobileOpen={mobileNavOpen}
          desktopOpen={desktopNavOpen}
          onCloseMobile={() => setMobileNavOpen(false)}
          onCollapseDesktop={() => setDesktopNavOpen(false)}
        />
        <main className="min-w-0 flex-1 overflow-y-auto p-4 md:p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
