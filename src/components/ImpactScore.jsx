import React, { useState, useEffect } from "react"

export default function ImpactScore({ data }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  // Maximal mögliche Einsparungen pro Dokument pro Signatur
  const COST_HAND = 76.02    // Handgeschrieben
  const COST_DIGITAL = 11.24 // Digital
  const MAX_COST_SAVINGS = COST_HAND - COST_DIGITAL

  const TIME_HAND = 0.5      // Stunden pro Signatur
  const TIME_DIGITAL = 0.05
  const MAX_TIME_SAVED = TIME_HAND - TIME_DIGITAL

  const CO2_PER_DOC = 0.5    // kg CO₂ pro Signatur
  const MAX_CO2_SAVED = CO2_PER_DOC

  // Berechnung des Scores (0–100)
  const calculateScore = () => {
    const { docs, signs, totalHand, totalDigital, timeSaved, co2Saved } = data

    const costScore = MAX_COST_SAVINGS > 0 ? ((totalHand - totalDigital) / (docs * signs * MAX_COST_SAVINGS)) * 100 : 0
    const timeScore = MAX_TIME_SAVED > 0 ? (timeSaved / (docs * signs * MAX_TIME_SAVED)) * 100 : 0
    const co2Score = MAX_CO2_SAVED > 0 ? (co2Saved / (docs * signs * MAX_CO2_SAVED)) * 100 : 0

    // Durchschnitt aller drei Scores
    const rawScore = (costScore + timeScore + co2Score) / 3

    // Begrenzung auf 0–100
    return Math.min(Math.max(rawScore, 0), 100)
  }

  const score = calculateScore()

  // Animation
  useEffect(() => {
    let start = 0
    const end = Math.round(score)
    if (start === end) return

    const stepTime = Math.max(Math.floor(1000 / (end || 1)), 20) // nicht zu schnell
    let current = start

    const timer = setInterval(() => {
      current += 1
      setAnimatedScore(current)
      if (current >= end) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [score])

  // Farbe abhängig vom Score
  const getColor = () => {
    if (score >= 70) return "bg-[#03A4AD]"   // Teal
    if (score >= 40) return "bg-[#2395FF]"   // Blue
    return "bg-[#8750E5]"                    // Purple
  }

  return (
    <div className={`p-6 rounded-lg shadow text-black text-center bg-bgPurple40`}>
      <p className="text-sm mb-2 font-medium">SIGN Impact Score</p>
      <p className="text-4xl font-bold text-white">{animatedScore} / 100</p>
      <div className={`h-2 w-full rounded-full mt-2 ${getColor()}`} style={{ transition: "all 0.5s ease" }}></div>
      <p className="text-sm mt-2">zeigt den Gesamteffekt von Zeit-, Kosten- und CO₂-Einsparungen</p>
    </div>
  )
}
