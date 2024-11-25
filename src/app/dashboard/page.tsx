"use client";
import React from "react";
import { Wallet, ArrowUpDown } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

// Define types for our dashboard data
interface MarketSummary {
  symbol: string;
  price: number;
  change: number;
}

interface PortfolioSummary {
  totalValue: number;
  dailyChange: number;
  positions: number;
  profitLoss: number;
}

export default function DashboardPage() {
  // Mock data
  const marketSummary: MarketSummary[] = [
    { symbol: "BTC/USD", price: 35420.5, change: 2.34 },
    { symbol: "ETH/USD", price: 2180.75, change: -1.2 },
    { symbol: "EUR/USD", price: 1.1234, change: 0.15 },
  ];

  const portfolioSummary: PortfolioSummary = {
    totalValue: 100234.56,
    dailyChange: 2.34,
    positions: 8,
    profitLoss: 1234.56,
  };

  return (
    <MainLayout>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Portfolio Value</p>
              <p className="text-2xl font-bold">
                ${portfolioSummary.totalValue.toLocaleString()}
              </p>
              <p className="text-green-500 text-sm">
                +{portfolioSummary.dailyChange}%
              </p>
            </div>
            <Wallet className="text-gray-400" />
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">Open Positions</p>
              <p className="text-2xl font-bold">{portfolioSummary.positions}</p>
              <p className="text-gray-400 text-sm">Active Trades</p>
            </div>
            <ArrowUpDown className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Summary */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Market Summary</h2>
          <div className="space-y-4">
            {marketSummary.map((market) => (
              <div
                key={market.symbol}
                className="flex justify-between items-center"
              >
                <span className="text-gray-300">{market.symbol}</span>
                <div className="text-right">
                  <p className="font-semibold">
                    ${market.price.toLocaleString()}
                  </p>
                  <p
                    className={
                      market.change >= 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {market.change >= 0 ? "+" : ""}
                    {market.change}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-gray-400">Chart Coming Soon</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
