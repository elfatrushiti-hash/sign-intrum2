import React, { useRef } from "react"
import ReportHeader from "./ReportHeader"
import ChartsSection from "./ChartsSection"
import CO2Chart from "./CO2Chart"
import KPISection from "./KPISection"

export default function PDFExport({ data }) {
  const printRef = useRef()

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML
    const originalContents = document.body.innerHTML

    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = originalContents
    window.location.reload() // Refresh, um React wieder korrekt zu rendern
  }

  return (
    <>
      <button
        onClick={handlePrint}
        className="bg-bgPurple40 text-white px-4 py-2 rounded shadow hover:opacity-90"
      >
        PDF Report herunterladen
      </button>

      {/* Verstecktes PDF Layout */}
      <div ref={printRef} className="hidden">
        <div className="bg-white p-6 text-black min-h-screen">
          <ReportHeader />
          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <KPISection data={data} />
            <ChartsSection data={data} />
            <CO2Chart data={data} />
          </section>

        </div>
      </div>
    </>
  )
}
