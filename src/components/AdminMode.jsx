import React, { useState } from "react"

export default function AdminMode({ children }) {

  const [presentation, setPresentation] = useState(false)

  return (
    <div>
      <button
        onClick={() => setPresentation(!presentation)}
        className="fixed bottom-4 right-4 bg-intrumPurple text-white px-3 py-2 rounded shadow"
      >
        {presentation ? "Normal Mode" : "Presentation Mode"}
      </button>

      <div className={presentation ? "p-10 scale-110" : ""}>
        {children}
      </div>
    </div>
  )
}