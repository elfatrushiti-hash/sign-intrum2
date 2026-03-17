import React from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function PDFExport({ data }) {
  const exportToPDF = async () => {
    const input = document.getElementById("dashboard")
    const pdf = new jsPDF("p", "mm", "a4")

    const canvas = await html2canvas(input, { scale: 2, useCORS: true })
    const imgData = canvas.toDataURL("image/png")

    const logo = new Image()
    logo.src = "/intrum-logo.png"
    logo.onload = () => {
      pdf.addImage(logo, "PNG", 160, 10, 40, 15)
      pdf.addImage(imgData, "PNG", 10, 30, 190, (canvas.height * 190) / canvas.width)
      pdf.save("SIGN_Impact_Report.pdf")
    }
  }

  return (
    <button
      onClick={exportToPDF}
      className="bg-[#8750E5] text-white px-6 py-2 rounded hover:bg-[#4F1D8D] transition"
    >
      PDF herunterladen
    </button>
  )
}
