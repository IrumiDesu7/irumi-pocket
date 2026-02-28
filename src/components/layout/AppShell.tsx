import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-background pt-[env(safe-area-inset-top)]">
      <main className="pb-20">{children}</main>
    </div>
  );
}
