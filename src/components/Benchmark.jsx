import React from "react"

export default function Benchmark({ data }) {

  const benchmarkCost = 8.5
  const userCost = data.totalHand / (data.docs || 1)
  const better = userCost > benchmarkCost

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Markt Benchmark</h3>
      <p className="text-sm mb-2">Durchschnittskosten pro Dokument im Markt: <b>{benchmarkCost} CHF</b></p>
      <p className="text-sm mb-4">Ihre aktuellen Kosten: <b>{userCost.toFixed(2)} CHF</b></p>
      <div className={`p-3 rounded text-white text-sm ${better ? "bg-red-500" : "bg-green-500"}`}>
        {better ? "Ihre Prozesse sind teurer als der Markt." : "Ihre Prozesse sind effizienter als der Markt."}
      </div>
    </div>
  )
}