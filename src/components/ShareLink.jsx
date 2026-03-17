import React from "react"

export default function ShareLink({ data }) {

  const generateLink = () => {

    const url = `${window.location.origin}?docs=${data.docs}&signs=${data.signs}`

    navigator.clipboard.writeText(url)

    alert("Link kopiert!")

  }

  return (

    <button
      onClick={generateLink}
      className="bg-bgPurple40 text-white px-4 py-2 rounded shadow hover:opacity-90"
    >

      Ergebnis Link kopieren

    </button>

  )
}