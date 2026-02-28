import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { BottomNav, type TabId } from "@/components/layout/BottomNav";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-[60dvh]">
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("adab");

  return (
    <AppShell>
      {activeTab === "adab" && <PlaceholderPage title="Adab Sunnah" />}
      {activeTab === "shalat" && <PlaceholderPage title="Bacaan Shalat" />}
      {activeTab === "tajweed" && <PlaceholderPage title="Tajweed" />}
      {activeTab === "favorites" && <PlaceholderPage title="Favorit" />}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </AppShell>
  );
}
