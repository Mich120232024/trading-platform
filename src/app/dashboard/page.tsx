// src/app/dashboard/page.tsx
"use client";
import React, { useState } from "react";
import { LiveTicker } from "@/components/dashboard/LiveTicker";
import { PortfolioView } from "@/components/dashboard/PortfolioView";
import { TradingModules } from "@/components/dashboard/TradingModules";
import { MainLayout } from "@/components/layout/MainLayout";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <MainLayout>
      {/* Market Tickers */}
      <LiveTicker />

      {/* Portfolio Section */}
      <PortfolioView />

      {/* Trading Modules */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
        <div className="border-b border-gray-700/50">
          <div className="flex gap-1 p-1">
            {["Orders", "Positions", "Executions"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.toLowerCase()
                    ? "bg-gray-700/80 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/40"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 min-h-[300px]">
          <TradingModules activeTab={activeTab} />
        </div>
      </div>
    </MainLayout>
  );
}
