import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartsSection({ data }) {
  const chartData = {
    labels: ["Handgeschrieben", "Digital SIGN"],
    datasets: [
      {
        label: "Kosten CHF",
        data: [data.totalHand, data.totalDigital],
        backgroundColor: ['#170456', '#1316C7'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="text-lg font-bold mb-4 text-[#8750E5]">Kostenvergleich</h3>
      <Doughnut className="chart-canvas" data={chartData} />
    </div>
  );
}
