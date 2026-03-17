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
import SalesInfoCard from "./components/SalesInfoCard"

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

  // LandingPage starten
  if(!started){
    return <LandingPage start={() => setStarted(true)} />
  }

  return (
    <AdminMode>
      <div className="bg-[#F1E8FA] min-h-screen">

        <Hero />

        <section className="max-w-7xl mx-auto px-4 py-6" id="dashboard">

          {/* Alles, was im PDF sein soll */}
          <div id="pdf-content">

            {/* Main Grid: Calculator | Charts | KPI */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Calculator impactData={impactData} setImpactData={setImpactData} />
              <ChartsSection data={impactData} />
              <KPISection data={impactData} />
            </div>

            {/* SIGN Impact Score + CO2 Counter + Sales Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <ImpactScore data={impactData} />
              <CO2Counter data={impactData} />
              <SalesInfoCard />
            </div>

            {/* ROI & Benchmark Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <ROISimulator data={impactData} />
              <Benchmark data={impactData} />
              <ShareLink data={impactData} />
            </div>

            {/* Weitere Charts */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CO2Chart data={impactData} />
              <AdvancedImpactChart data={impactData} />
            </div>

          </div>

          {/* PDF Export Button */}
          <div className="mt-6 flex justify-end">
            <PDFExport data={impactData} />
          </div>

        </section>

        <Footer />

      </div>
    </AdminMode>
  )
}
