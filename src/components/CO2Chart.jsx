import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement)

export default function CO2Chart({ data }) {

  const chartData = {
    labels: ['Papierprozess', 'Digital SIGN'],
    datasets: [
      {
        label: 'CO₂ kg',
        data: [data.co2Saved + 10, 10],
        backgroundColor: ['#7c3aed', '#10b981']
      }
    ]
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">
        CO₂ Impact Vergleich
      </h3>
      <Bar id="chart-co2" data={chartData} />
    </div>
  )
}
