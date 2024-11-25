"use client";
import React, { useState } from "react";
import { Wallet, ArrowUpDown, ChevronDown } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

// ... (keep existing interfaces)

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const marketTickers = [
    { symbol: "BTC/USD", price: 35420.5, change: 2.34 },
    { symbol: "ETH/USD", price: 2180.75, change: -1.2 },
    { symbol: "EUR/USD", price: 1.123, change: 0.15 },
    { symbol: "AAPL", price: 189.55, change: 0.45 },
    { symbol: "MSFT", price: 378.33, change: -0.23 },
  ];

  return (
    <MainLayout>
      {/* Market Tickers with enhanced hover and transition effects */}
      <div className="grid grid-cols-5 gap-3 mb-6 overflow-x-auto pb-2">
        {marketTickers.map((ticker) => (
          <div
            key={ticker.symbol}
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl transition-all duration-200 hover:bg-gray-800/80 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <div className="text-sm text-gray-400 font-medium">
              {ticker.symbol}
            </div>
            <div className="text-xl font-bold tracking-tight">
              ${ticker.price.toLocaleString()}
            </div>
            <div
              className={`text-sm font-medium ${
                ticker.change >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {ticker.change >= 0 ? "+" : ""}
              {ticker.change}%
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Overview with smooth transitions */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl mb-6 transition-all duration-200 hover:bg-gray-800/80">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Portfolio Overview</h2>
          <select className="bg-gray-700/50 border-none rounded-lg p-2 px-4 transition-all duration-200 hover:bg-gray-700/80 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Account 1</option>
            <option>Account 2</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-gray-400 text-left">
              <tr>
                <th className="py-3 px-4 font-medium">Symbol</th>
                <th className="py-3 px-4 font-medium">Quantity</th>
                <th className="py-3 px-4 font-medium">Entry Price</th>
                <th className="py-3 px-4 font-medium">Current Price</th>
                <th className="py-3 px-4 font-medium">P/L</th>
                <th className="py-3 px-4 font-medium">% Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700/50 transition-colors duration-150 hover:bg-gray-700/20">
                <td className="py-3 px-4">AAPL</td>
                <td className="py-3 px-4">100</td>
                <td className="py-3 px-4">$180.50</td>
                <td className="py-3 px-4">$189.55</td>
                <td className="py-3 px-4 text-green-400">+$905.00</td>
                <td className="py-3 px-4 text-green-400">+5.01%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabs Section with smooth transitions */}
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
        <div className="p-6 min-h-[300px]">{/* Tab content here */}</div>
      </div>
    </MainLayout>
  );
}
