import React from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function PDFExport({ data }) {

  const exportPDF = async () => {
    const element = document.getElementById("pdf-content")
    if (!element) {
      alert("PDF-Content nicht gefunden!")
      return
    }

    // html2canvas: hoher Scale für bessere Auflösung
    const canvas = await html2canvas(element, { scale: 2, useCORS: true })
    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
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
