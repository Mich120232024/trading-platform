import React from "react";
import { Card } from "@tremor/react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Trade {
  id: string;
  symbol: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  time: string;
  status: "completed" | "pending" | "cancelled";
}

export default function TradeHistory() {
  const trades: Trade[] = [
    {
      id: "1",
      symbol: "BTC/USD",
      type: "buy",
      amount: 0.5,
      price: 35420.5,
      time: "2024-11-20 13:45",
      status: "completed",
    },
    {
      id: "2",
      symbol: "ETH/USD",
      type: "sell",
      amount: 2.0,
      price: 2180.75,
      time: "2024-11-20 13:30",
      status: "completed",
    },
  ];

  return (
    <Card className="bg-gray-800 p-4">
      <h2 className="text-xl font-bold text-white mb-4">Recent Trades</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-gray-400 text-left">
              <th className="pb-3">Time</th>
              <th className="pb-3">Pair</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} className="border-t border-gray-700">
                <td className="py-3">{trade.time}</td>
                <td className="py-3">{trade.symbol}</td>
                <td className="py-3">
                  <span
                    className={`flex items-center ${
                      trade.type === "buy" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {trade.type === "buy" ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {trade.type.toUpperCase()}
                  </span>
                </td>
                <td className="py-3">${trade.price.toLocaleString()}</td>
                <td className="py-3">{trade.amount}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      trade.status === "completed"
                        ? "bg-green-500/20 text-green-500"
                        : trade.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {trade.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
