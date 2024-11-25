import React from "react";
import { Card } from "@tremor/react";
import { DollarSign, TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function PortfolioSummary() {
  const metrics = [
    {
      title: "Total Balance",
      value: "$24,567.84",
      change: "+2.45%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Day P/L",
      value: "$345.20",
      change: "+1.2%",
      icon: Activity,
      trend: "up",
    },
    {
      title: "Open Positions",
      value: "8",
      change: "-2",
      icon: TrendingUp,
      trend: "neutral",
    },
    {
      title: "Margin Used",
      value: "45%",
      change: "+5%",
      icon: TrendingDown,
      trend: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-gray-800 p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm">{metric.title}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <p
                className={`text-sm mt-1 ${
                  metric.trend === "up"
                    ? "text-green-500"
                    : metric.trend === "down"
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                {metric.change}
              </p>
            </div>
            <metric.icon className="h-6 w-6 text-gray-400" />
          </div>
        </Card>
      ))}
    </div>
  );
}
