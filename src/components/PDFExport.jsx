import React from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

export default function PDFExport({ data }) {

  const exportPDF = async () => {
    const input = document.getElementById("pdf-content")
    if (!input) return

    // Canvas rendern
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      backgroundColor: "#F1E8FA"
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    })

    const margin = 10
    const pdfWidth = pdf.internal.pageSize.getWidth() - margin * 2
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    // Titel oben
    pdf.setFontSize(22)
    pdf.setTextColor("#29074A")
    pdf.text("SIGN Impact Report", pdf.internal.pageSize.getWidth() / 2, 15, { align: "left" })

    // Bildinhalt darunter einfügen (mit Margin)
    pdf.addImage(imgData, "PNG", margin, 20, pdfWidth, pdfHeight)

    // Footer mit Datum & Hinweis
    const date = new Date().toLocaleDateString()
    pdf.setFontSize(10)
    pdf.setTextColor("#555555")
    const footerText = `Generated on ${date} • by SIGN Intrum`
    pdf.text(footerText, pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() - 10, { align: "left" })

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
