"use client";

import { usePathname } from "next/navigation";

const routeTitles: Record<string, string> = {
  "/mycsd": "MyCSD",
};

export function getRouteTitle(pathname: string): string {
  const mapped = routeTitles[pathname];
  if (mapped) return mapped;
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return "Home";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export default function RouteTitle() {
  const pathname = usePathname();
  return <>{getRouteTitle(pathname)}</>;
}
