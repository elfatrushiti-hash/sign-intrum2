import React, { useRef } from "react";
import { jsPDF } from "jspdf";

export default function PDFExport({ data }) {
  const exportPDF = async () => {
    const doc = new jsPDF("p", "pt", "a4");
    const margin = 40;
    let y = margin;

    // Header
    doc.setFontSize(22);
    doc.setTextColor("#29074A");
    doc.text("SIGN Impact Report", margin, y);
    y += 30;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const date = new Date().toLocaleDateString();
    doc.text(`Generated on: ${date}`, margin, y);
    y += 30;

    // KPI Section
    doc.setFontSize(14);
    doc.setTextColor("#8750E5");
    doc.text("Key Metrics", margin, y);
    y += 20;

    const kpis = [
      { label: "Dokumente", value: data.docs },
      { label: "Signaturen", value: data.signs },
      { label: "Kosten Handgeschrieben", value: `${data.totalHand.toFixed(2)} CHF` },
      { label: "Kosten Digital", value: `${data.totalDigital.toFixed(2)} CHF` },
      { label: "Zeitersparnis", value: `${data.timeSaved.toFixed(2)} h` },
      { label: "Geldersparnis", value: `${data.moneySaved.toFixed(2)} CHF` },
      { label: "CO₂ Einsparung", value: `${data.co2Saved.toFixed(2)} kg` }
    ];

    doc.setFontSize(12);
    kpis.forEach(kpi => {
      doc.text(`${kpi.label}: ${kpi.value}`, margin, y);
      y += 18;
    });

    y += 20;

    // Charts Section
    const charts = document.querySelectorAll(".chart-canvas"); // Alle Chart Canvas auf der Seite
    for (let i = 0; i < charts.length; i++) {
      const canvas = charts[i];
      const imgData = canvas.toDataURL("image/png");

      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth() - margin * 2;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (y + pdfHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }

      doc.addImage(imgData, "PNG", margin, y, pdfWidth, pdfHeight);
      y += pdfHeight + 20;
    }

    // Speichern
    doc.save("sign-impact-report.pdf");
  };

  return (
    <button
      onClick={exportPDF}
      className="bg-bgPurple40 text-white px-4 py-2 rounded shadow hover:opacity-90"
    >
      PDF Report herunterladen
    </button>
  );
}
