import React, { useState } from "react"
import LandingPage from "./components/LandingPage"
import Hero from "./components/Hero"
import Calculator from "./components/Calculator"
import KPISection from "./components/KPISection"
import ChartsSection from "./components/ChartsSection"
import CO2Chart from "./components/CO2Chart"
import ImpactScore from "./components/ImpactScore"
import CO2Counter from "./components/CO2Counter"
import PDFExport from "./components/PDFExport"
import ROISimulator from "./components/ROISimulator"
import Benchmark from "./components/Benchmark"
import ShareLink from "./components/ShareLink"
import AdvancedImpactChart from "./components/AdvancedImpactChart"
import AdminMode from "./components/AdminMode"
import Footer from "./components/Footer"

export default function App() {
  const [impactData, setImpactData] = useState({
    docs: 10,
    signs: 2,
    totalHand: 0,
    totalDigital: 0,
    timeSaved: 0,
    moneySaved: 0,
    co2Saved: 0
  })

  const [started, setStarted] = useState(false)

  if(!started) return <LandingPage start={() => setStarted(true)} />

  return (
    <AdminMode>
      <div className="bg-[#F1E8FA] min-h-screen p-4">
        <Hero />

        <section className="max-w-7xl mx-auto py-6" id="dashboard">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Calculator impactData={impactData} setImpactData={setImpactData} />
            <ChartsSection data={impactData} />
            <KPISection data={impactData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <ImpactScore data={impactData} />
            <CO2Counter data={impactData} />
            <PDFExport data={impactData} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <ROISimulator data={impactData} />
            <Benchmark data={impactData} />
            <ShareLink data={impactData} />
          </div>

          <div className="mt-6">
            <CO2Chart data={impactData} />
            <AdvancedImpactChart data={impactData} />
          </div>

        </section>

        <Footer />
      </div>
    </AdminMode>
  )
}
