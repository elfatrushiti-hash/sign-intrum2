import React from "react"
import jsPDF from "jspdf"

export default function PDFExport({ data }) {
  const exportPDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" })

    const date = new Date().toLocaleDateString()
    doc.setFontSize(20)
    doc.setTextColor(41, 7, 74)
    doc.text("SIGN Impact Report", 40, 40)
    doc.setFontSize(12)
    doc.setTextColor(100)
    doc.text(`Generated on ${date}`, 40, 60)

    // Charts automatisch übernehmen (Canvas IDs müssen gesetzt werden)
    const chartIds = ["chart-doughnut", "chart-co2", "chart-advanced"]
    let yPos = 100
    chartIds.forEach(id => {
      const canvas = document.getElementById(id)
      if(canvas){
        const imgData = canvas.toDataURL("image/png")
        doc.addImage(imgData, "PNG", 40, yPos, 500, 300)
        yPos += 320
      }
    })

    // KPIs
    doc.setFontSize(14)
    doc.setTextColor(0)
    doc.text(`Dokumente: ${data.docs}`, 40, yPos)
    doc.text(`Signaturen: ${data.signs}`, 40, yPos + 20)
    doc.text(`Kosten Handgeschrieben: ${data.totalHand.toFixed(2)} CHF`, 40, yPos + 40)
    doc.text(`Kosten Digital: ${data.totalDigital.toFixed(2)} CHF`, 40, yPos + 60)
    doc.text(`Zeitersparnis: ${data.timeSaved.toFixed(2)} h`, 40, yPos + 80)
    doc.text(`Geldersparnis: ${data.moneySaved.toFixed(2)} CHF`, 40, yPos + 100)
    doc.text(`CO₂ Einsparung: ${data.co2Saved.toFixed(2)} kg`, 40, yPos + 120)

    doc.save("sign-impact-report.pdf")
  }

  return (
    <button
      onClick={exportPDF}
      className="bg-bgPurple40 text-white px-4 py-2 rounded shadow hover:opacity-90"
    >
      PDF Report herunterladen
    </button>
  )
}
