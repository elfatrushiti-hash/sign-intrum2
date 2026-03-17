import React from "react"

export default function LandingPage({ start }) {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#8750E5] text-white p-6">

      <h1 className="text-5xl font-bold mb-4 text-center">
        SIGN Impact Calculator
      </h1>

      <p className="max-w-xl mb-8 text-center">
        Berechnen Sie in wenigen Sekunden, wie viel Zeit, Kosten und CO₂
        Ihr Unternehmen mit digitalen Signaturen sparen kann.
      </p>

      <button
        onClick={start}
        className="bg-white text-[#8750E5] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9B0EF] transition"
      >
        Impact berechnen
      </button>

    </div>
  )
}