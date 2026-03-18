import React from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function PDFExport({ data }) {

  const exportPDF = async () => {
    const input = document.getElementById("pdf-content")
    if (!input) return

    // Mit html2canvas den Inhalt rendern
    const canvas = await html2canvas(input, {
      scale: 2,              // hohe Auflösung für Charts
      useCORS: true,         // falls externe Bilder
      scrollY: -window.scrollY,
      backgroundColor: "#F1E8FA"
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    })

    // Ränder festlegen
    const margin = 10
    const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, "PNG", margin, margin, pdfWidth, pdfHeight)
    pdf.save("sign-impact-report.pdf")
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
