import React from "react"

export default function SalesInfoCard() {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-center text-center min-h-[150px]">
      <h3 className="text-lg font-bold text-[#8750E5] mb-2">
        Haben Sie weitere Fragen?
      </h3>
      <p className="text-sm text-gray-700 mb-2">
        Sprechen Sie uns persönlich an unserem Stand oder kontaktieren Sie uns über unser Kontaktformular:
      </p>
      <a
        href="https://www.intrum.ch/de/business-solutions/dienstleistungen/sign/kontaktformular-sign/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#033334] font-semibold underline"
      >
        Kontaktformular
      </a>
    </div>
  )
}