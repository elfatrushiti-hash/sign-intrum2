import React from "react"

export default function Comparison({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Vergleich Papier vs. SIGN</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Kategorie</th>
            <th className="p-2">Papier</th>
            <th className="p-2">Digital SIGN</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">Kosten CHF</td>
            <td className="p-2">{data.totalHand.toFixed(2)}</td>
            <td className="p-2">{data.totalDigital.toFixed(2)}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">Zeitersparnis h</td>
            <td className="p-2">0</td>
            <td className="p-2">{data.timeSaved.toFixed(2)}</td>
          </tr>
          <tr className="border-b">
            <td className="p-2">CO₂ Einsparung kg</td>
            <td className="p-2">0</td>
            <td className="p-2">{data.co2Saved.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}