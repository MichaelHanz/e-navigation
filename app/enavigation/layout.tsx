import PortalShell from "@/components/shell/PortalShell";

export default function EnavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PortalShell>{children}</PortalShell>;
}
