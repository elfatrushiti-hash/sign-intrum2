import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 text-center">
      <p>
        Mehr Infos zu unserem Produkt:{" "}
        <a
          href="https://www.intrum.ch/de/business-solutions/dienstleistungen/digital-onboarding/signing/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-intrumPurple"
        >
          SIGN auf Intrum.ch
        </a>
      </p>
    </footer>
  )
}