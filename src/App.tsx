import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/AppShell";
import { BottomNav, type TabId } from "@/components/layout/BottomNav";
import { AdabSunnah } from "@/pages/AdabSunnah";
import { BacaanShalat } from "@/pages/BacaanShalat";
import { Tajweed } from "@/pages/Tajweed";
import { Favorites } from "@/pages/Favorites";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("adab");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="irumi-pocket-theme">
      <AppShell>
        {activeTab === "adab" && <AdabSunnah />}
        {activeTab === "shalat" && <BacaanShalat />}
        {activeTab === "tajweed" && <Tajweed />}
        {activeTab === "favorites" && <Favorites />}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </AppShell>
    </ThemeProvider>
  );
}
