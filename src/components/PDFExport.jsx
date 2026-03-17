import React from "react"
import Card from "./Card"

export default function PDFExport({ data }) {
  const handleClick = () => alert("PDF Download is blocked without jsPDF/html2canvas, placeholder only")
  return (
    <Card>
      <p className="text-sm text-gray-500">Export PDF</p>
      <button onClick={handleClick} className="mt-2 px-4 py-2 bg-[#8750E5] text-white rounded-md hover:bg-[#4F1D8D] transition">
        Download PDF
      </button>
    </Card>
  )
}
