import React from "react"

export default function ReportHeader() {

  const date = new Date().toLocaleDateString()

  return (

    <div className="report-header hidden print:block">

      <div className="flex justify-between items-center border-b pb-4 mb-6">

        <div>
          <h1 className="text-2xl font-bold text-[#29074A]">
            SIGN Impact Report
          </h1>

          <p className="text-sm text-gray-600">
            Generated on {date}
          </p>
        </div>

        <img
          src="/intrum-logo.png"
          alt="Intrum"
          className="h-10"
        />

      </div>

    </div>

  )

}