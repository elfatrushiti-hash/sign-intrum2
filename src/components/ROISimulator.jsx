import React from "react"

export default function ROISimulator({ data }) {

  const yearlyDocs = data.docs * 12
  const yearlySavings = data.moneySaved * 12
  const yearlyCO2 = data.co2Saved * 12
  const yearlyTime = data.timeSaved * 12

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">
        Jährlicher SIGN Impact
      </h3>
      <div className="space-y-2 text-sm">
        <p>Dokumente pro Jahr: <b>{yearlyDocs}</b></p>
        <p>Geldersparnis: <b>{yearlySavings.toFixed(2)} CHF</b></p>
        <p>Zeitersparnis: <b>{yearlyTime.toFixed(2)} Stunden</b></p>
        <p>CO₂ Einsparung: <b>{yearlyCO2.toFixed(2)} kg</b></p>
      </div>
    </div>
  )
}