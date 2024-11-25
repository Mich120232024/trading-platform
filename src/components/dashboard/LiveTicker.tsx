import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
}

export default function LiveTicker() {
  const tickers: TickerItem[] = [
    { symbol: "BTC/USD", price: 35420.5, change: 2.34 },
    { symbol: "ETH/USD", price: 2180.75, change: -1.2 },
    { symbol: "EUR/USD", price: 1.1234, change: 0.15 },
    { symbol: "Gold", price: 1890.3, change: -0.45 },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto bg-gray-800 p-4 rounded-lg">
      {tickers.map((ticker) => (
        <div
          key={ticker.symbol}
          className="flex-none bg-gray-700 p-3 rounded-md min-w-[160px]"
        >
          <div className="text-sm text-gray-400">{ticker.symbol}</div>
          <div className="text-lg font-semibold">
            ${ticker.price.toLocaleString()}
          </div>
          <div
            className={`flex items-center ${
              ticker.change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {ticker.change >= 0 ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            <span className="ml-1">{Math.abs(ticker.change)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
