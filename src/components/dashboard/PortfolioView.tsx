// src/components/dashboard/PortfolioView.tsx
import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FXPosition {
  ticker: string; // e.g., "EUR-AUD-2024-12-18"
  price: number;
  cobPrice: number; // Close of Business Price
  dailyPnL: number;
  mtdPnL: number; // Month to Date PnL
  ytdPnL: number; // Year to Date PnL
  position: number;
  notional?: number; // Optional notional value
  currency: string;
}

export const PortfolioView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [groupBy, setGroupBy] = useState("assetClass");
  const [showClosed, setShowClosed] = useState(false);

  const fxPositions: FXPosition[] = [
    {
      ticker: "EUR-AUD-2024-12-18",
      price: 1.66,
      cobPrice: 1.6,
      dailyPnL: -169792,
      mtdPnL: 642461,
      ytdPnL: 733600,
      position: -24000000,
      currency: "EUR",
    },
    // Add more positions...
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-gray-700/50 border-none rounded-lg p-2 px-4 w-32"
            />
            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <select
            className="bg-gray-700/50 border-none rounded-lg p-2 px-4"
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
          >
            <option value="assetClass">By Asset Class</option>
            <option value="currency">By Currency</option>
            <option value="strategy">By Strategy</option>
          </select>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showClosed}
              onChange={(e) => setShowClosed(e.target.checked)}
              className="rounded bg-gray-700"
            />
            <span>Show Closed</span>
          </label>
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors">
            Add/Modify
          </button>
          <button className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-500/30 transition-colors">
            Clean Cash
          </button>
        </div>
      </div>

      {/* Portfolio Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-b border-gray-700/50">
              <th className="p-3 text-left">TICKER</th>
              <th className="p-3 text-right">PRICE</th>
              <th className="p-3 text-right">COB PRICE</th>
              <th className="p-3 text-right">DAILY PNL</th>
              <th className="p-3 text-right">MTD PNL</th>
              <th className="p-3 text-right">YTD PNL</th>
              <th className="p-3 text-right">POSITION</th>
            </tr>
          </thead>
          <tbody>
            {fxPositions.map((position) => (
              <tr
                key={position.ticker}
                className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors"
              >
                <td className="p-3">{position.ticker}</td>
                <td className="p-3 text-right">{position.price.toFixed(4)}</td>
                <td className="p-3 text-right">
                  {position.cobPrice.toFixed(4)}
                </td>
                <td
                  className={`p-3 text-right ${
                    position.dailyPnL >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {position.dailyPnL.toLocaleString()}
                </td>
                <td
                  className={`p-3 text-right ${
                    position.mtdPnL >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {position.mtdPnL.toLocaleString()}
                </td>
                <td
                  className={`p-3 text-right ${
                    position.ytdPnL >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {position.ytdPnL.toLocaleString()}
                </td>
                <td className="p-3 text-right">
                  {position.position.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="mt-4 flex justify-end">
        <div className="bg-gray-700/30 p-4 rounded-lg">
          <span className="text-gray-400 mr-2">Grand Total PnL:</span>
          <span className="text-xl font-bold text-red-400">-1,248,250,237</span>
        </div>
      </div>
    </div>
  );
};
