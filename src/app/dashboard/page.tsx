// app/dashboard/page.tsx

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import LiveTicker from "@/components/dashboard/LiveTicker";
import MarketOverview from "@/components/dashboard/MarketOverview";
import TradingView from "@/components/dashboard/TradingView";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import TradeHistory from "@/components/dashboard/TradeHistory";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <LiveTicker />
        <PortfolioSummary />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TradingView />
          <MarketOverview />
        </div>
        <TradeHistory />
      </div>
    </MainLayout>
  );
}
