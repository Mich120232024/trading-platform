import React from "react";
import { Card } from "@tremor/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TradingView() {
  const [activeAsset, setActiveAsset] = React.useState("EUR/USD");

  const assets = ["EUR/USD", "BTC/USD", "ETH/USD", "GOLD"];
  const chartData = [
    { time: "1", value: 1.1234 },
    { time: "2", value: 1.1255 },
    { time: "3", value: 1.1245 },
    { time: "4", value: 1.1267 },
  ];

  return (
    <Card className="bg-gray-800 p-4">
      <div className="flex space-x-2 mb-4">
        {assets.map((asset) => (
          <button
            key={asset}
            onClick={() => setActiveAsset(asset)}
            className={`px-3 py-1 rounded ${
              activeAsset === asset
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {asset}
          </button>
        ))}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <XAxis dataKey="time" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0088FE"
              fill="#0088FE"
              fillOpacity={0.1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
