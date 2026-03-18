import React, { useState, useEffect } from "react"

export default function ImpactScore({ data }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  const COST_HAND = 76.02
  const COST_DIGITAL = 11.24
  const TIME_HAND = 0.5
  const TIME_DIGITAL = 0.05
  const CO2_PER_PAGE = 0.25

  const calculateScore = () => {
    const { docs = 1, signs = 1, pages = 1, totalHand, totalDigital, timeSaved, co2Saved } = data

    const maxCostSavings = (COST_HAND - COST_DIGITAL) * docs * signs
    const costScore = maxCostSavings > 0 ? ((totalHand - totalDigital) / maxCostSavings) * 100 : 0

    const maxTimeSaved = (TIME_HAND - TIME_DIGITAL) * docs * signs * pages
    const timeScore = maxTimeSaved > 0 ? (timeSaved / maxTimeSaved) * 100 : 0

    const maxCO2Saved = CO2_PER_PAGE * docs * signs * pages
    const co2Score = maxCO2Saved > 0 ? (co2Saved / maxCO2Saved) * 100 : 0

    const rawScore = (costScore + timeScore + co2Score) / 3
    return Math.min(Math.max(rawScore, 0), 100)
  }

  const score = calculateScore()

  useEffect(() => {
    let start = 0
    const end = Math.round(score)
    if (start === end) return
    const stepTime = Math.max(Math.floor(1000 / (end || 1)), 20)
    let current = start
    const timer = setInterval(() => {
      current += 1
      setAnimatedScore(current)
      if (current >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [score])

  const getColor = () => {
    if (score >= 70) return "bg-[#03A4AD]"
    if (score >= 40) return "bg-[#2395FF]"
    return "bg-[#8750E5]"
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
