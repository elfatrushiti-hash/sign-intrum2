import React from "react"
import jsPDF from "jspdf"

export default function PDFExport({ data }) {

  const exportPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text("SIGN Impact Report", 20, 20)
    doc.setFontSize(12)
    doc.text(`Dokumente: ${data.docs}`, 20, 40)
    doc.text(`Signaturen: ${data.signs}`, 20, 50)
    doc.text(`Kosten Handgeschrieben: ${data.totalHand.toFixed(2)} CHF`, 20, 70)
    doc.text(`Kosten Digital: ${data.totalDigital.toFixed(2)} CHF`, 20, 80)
    doc.text(`Zeitersparnis: ${data.timeSaved.toFixed(2)} h`, 20, 100)
    doc.text(`Geldersparnis: ${data.moneySaved.toFixed(2)} CHF`, 20, 110)
    doc.text(`CO₂ Einsparung: ${data.co2Saved.toFixed(2)} kg`, 20, 130)
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