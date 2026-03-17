import React from "react"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function AdvancedImpactChart({ data }) {

  const chartData = {
    labels: ["Heute", "3 Monate", "6 Monate", "1 Jahr"],
    datasets: [
      {
        label: "Kosten Papierprozess",
        data: [data.totalHand, data.totalHand * 3, data.totalHand * 6, data.totalHand * 12],
        borderColor: "#ef4444"
      },
      {
        label: "Kosten mit SIGN",
        data: [data.totalDigital, data.totalDigital * 3, data.totalDigital * 6, data.totalDigital * 12],
        borderColor: "#10b981"
      }
    ]
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Kostenentwicklung</h3>
      <Line id="chart-advanced" data={chartData}/>
    </div>
  )
}
