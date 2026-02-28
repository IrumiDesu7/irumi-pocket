import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-dvh bg-background pt-[env(safe-area-inset-top)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-primary/[0.03] to-transparent" />
      <main className="relative z-10 pb-20">{children}</main>
    </div>
  );
}
