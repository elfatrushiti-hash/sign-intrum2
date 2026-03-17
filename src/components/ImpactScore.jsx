import React, { useState, useEffect } from "react"

export default function ImpactScore({ data }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  const calculateSignImpactScore = (impactData) => {
    if (!impactData.totalHand || !impactData.totalDigital) return 0
    const timePercent = Math.min((impactData.timeSaved / ((impactData.timeSaved || 0) + 0.0001)) * 100, 100)
    const moneyPercent = Math.min((impactData.moneySaved / (impactData.totalHand || 1)) * 100, 100)
    const co2Percent = Math.min((impactData.co2Saved / ((impactData.co2Saved || 0) + 0.0001)) * 100, 100)
    return Math.round((timePercent + moneyPercent + co2Percent) / 3)
  }

  const score = calculateSignImpactScore(data)

  useEffect(() => {
    let start = 0
    const end = score
    if (start === end) return
    let stepTime = Math.abs(Math.floor(1000 / (end || 1)))
    let timer = setInterval(() => {
      start += 1
      setAnimatedScore(start)
      if (start === end) clearInterval(timer)
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
      <p className="text-4xl font-bold">{animatedScore} / 100</p>
      <p className="text-sm mt-2">zeigt den Gesamteffekt von Zeit-, Kosten- und CO₂-Einsparungen</p>
    </div>
  )
}