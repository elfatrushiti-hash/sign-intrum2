import React, { useState, useEffect } from "react"

export default function ImpactScore({ data }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  // Dynamische Berechnung des Scores basierend auf Input
  const calculateSignImpactScore = (impactData) => {
    const { docs, signs, totalHand, totalDigital, timeSaved, co2Saved } = impactData

    // Maximal mögliche Einsparungen basierend auf Eingaben
    // Handgeschrieben pro Doc & Sign
    const HAND_COST_PER_DOC_SIGN = 76.02
    const DIGITAL_COST_PER_DOC_SIGN = 11.24
    const MAX_COST_SAVINGS = docs * signs * (HAND_COST_PER_DOC_SIGN - DIGITAL_COST_PER_DOC_SIGN)

    const WORK_HOURS_HAND = 0.5
    const WORK_HOURS_DIGITAL = 0.05
    const MAX_TIME_SAVED = docs * signs * (WORK_HOURS_HAND - WORK_HOURS_DIGITAL)

    const CO2_PER_DOC_SIGN = 0.5
    const MAX_CO2_SAVED = docs * signs * CO2_PER_DOC_SIGN

    const costScore = MAX_COST_SAVINGS > 0 ? Math.min((totalHand - totalDigital) / MAX_COST_SAVINGS * 100, 100) : 0
    const timeScore = MAX_TIME_SAVED > 0 ? Math.min(timeSaved / MAX_TIME_SAVED * 100, 100) : 0
    const co2Score = MAX_CO2_SAVED > 0 ? Math.min(co2Saved / MAX_CO2_SAVED * 100, 100) : 0

    // Durchschnitt aller drei Komponenten
    return Math.round((costScore + timeScore + co2Score) / 3)
  }

  const score = calculateSignImpactScore(data)

  // Animation des Scores
  useEffect(() => {
    let start = 0
    const end = score
    if (start === end) return
    const stepTime = Math.max(Math.floor(1000 / (end || 1)), 10)
    const timer = setInterval(() => {
      start += 1
      setAnimatedScore(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [score])

  // Farbe je nach Score
  const getColor = () => {
    if (score >= 70) return "bg-[#03A4AD]"
    if (score >= 40) return "bg-[#2395FF]"
    return "bg-[#8750E5]"
  }

  return (
    <div className={`p-6 rounded-lg shadow text-black text-center ${getColor()}`}>
      <p className="text-sm mb-2 font-medium">SIGN Impact Score</p>
      <p className="text-4xl font-bold">{animatedScore} / 100</p>
      <p className="text-sm mt-2">zeigt den Gesamteffekt von Zeit-, Kosten- und CO₂-Einsparungen</p>
    </div>
  )
}
