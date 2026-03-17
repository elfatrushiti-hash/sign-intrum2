import React, { useEffect, useState } from "react"

export default function CO2Counter({ data }) {

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let step = 0
    const interval = setInterval(() => {
      step += 1
      setDisplay(data.co2Saved * (step / 20))
      if (step >= 20) clearInterval(interval)
    }, 40)
  }, [data])

  return (
    <div className="bg-green-50 p-6 rounded-lg text-center shadow">
      <h3 className="text-lg font-bold mb-2">
        CO₂ Einsparung
      </h3>
      <div className="text-3xl font-bold text-green-600">
        {display.toFixed(2)} kg
      </div>
      <p className="text-sm mt-2 text-gray-500">
        durch digitale Signaturen mit SIGN
      </p>
    </div>
  )
}