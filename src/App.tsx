import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { BottomNav, type TabId } from "@/components/layout/BottomNav";
import { AdabSunnah } from "@/pages/AdabSunnah";
import { BacaanShalat } from "@/pages/BacaanShalat";
import { Tajweed } from "@/pages/Tajweed";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex h-[60dvh] items-center justify-center">
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("adab");

  return (
    <AppShell>
      {activeTab === "adab" && <AdabSunnah />}
      {activeTab === "shalat" && <BacaanShalat />}
      {activeTab === "tajweed" && <Tajweed />}
      {activeTab === "favorites" && <PlaceholderPage title="Favorit" />}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </AppShell>
  );
}
