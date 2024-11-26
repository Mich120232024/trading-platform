// src/components/dashboard/TradingModules.tsx
import React from "react";
import { Line, Bar } from "react-chartjs-2";

export const PnLChartModule: React.FC = () => {
  // Add PnL chart configuration
  return (
    <div className="h-[300px] bg-gray-800/50 p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">PnL Analysis</h3>
      {/* Add Line chart here */}
    </div>
  );
};

export const ExposureModule: React.FC = () => {
  return (
    <div className="h-[300px] bg-gray-800/50 p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Currency Exposure</h3>
      {/* Add Bar chart here */}
    </div>
  );
};

export const RiskMetricsModule: React.FC = () => {
  return (
    <div className="h-[300px] bg-gray-800/50 p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Risk Metrics</h3>
      {/* Add metrics and mini charts here */}
    </div>
  );
};
