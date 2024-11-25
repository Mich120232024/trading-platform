import React from "react";
import { Card } from "@tremor/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MarketOverview() {
  const marketData = [
    { time: "09:30", BTC: 35000, ETH: 2200, EUR: 1.12 },
    { time: "10:30", BTC: 35200, ETH: 2180, EUR: 1.13 },
    { time: "11:30", BTC: 35400, ETH: 2220, EUR: 1.14 },
    { time: "12:30", BTC: 35100, ETH: 2190, EUR: 1.12 },
  ];

  return (
    <Card className="bg-gray-800 p-4">
      <h2 className="text-xl font-bold text-white mb-4">Market Overview</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={marketData}>
            <XAxis dataKey="time" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Line type="monotone" dataKey="BTC" stroke="#0088FE" />
            <Line type="monotone" dataKey="ETH" stroke="#00C49F" />
            <Line type="monotone" dataKey="EUR" stroke="#FFBB28" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
