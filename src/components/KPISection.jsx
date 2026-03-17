import React, { useState, useEffect } from 'react'
import { FaFileAlt, FaPenFancy, FaClock, FaMoneyBillWave, FaLeaf } from 'react-icons/fa'

export default function KPISection({ data }) {
  const [display, setDisplay] = useState({...data})
  const [openCard, setOpenCard] = useState(null)

  useEffect(() => {
    let step = 0
    const interval = setInterval(() => {
      step += 1
      if(step > 20) clearInterval(interval)
      setDisplay({
        totalHand: data.totalHand * (step/20),
        totalDigital: data.totalDigital * (step/20),
        timeSaved: data.timeSaved * (step/20),
        moneySaved: data.moneySaved * (step/20),
        co2Saved: data.co2Saved * (step/20),
      })
    }, 50)
  }, [data])

  const cards = [
    { key: 'totalHand', label: 'Handgeschrieben', value: display.totalHand.toFixed(2)+' CHF', icon: <FaFileAlt size={28}/>, description: 'Kosten für Papier, Versand und Arbeitsaufwand für handschriftliche Signaturen. Berechnet als: Dokumente x Signaturen x (Papier + Versand + Arbeitskosten).' },
    { key: 'totalDigital', label: 'Digital', value: display.totalDigital.toFixed(2)+' CHF', icon: <FaPenFancy size={28}/>, description: 'Kosten für elektronische Signaturen inkl. minimalem Arbeitsaufwand. Berechnet als: Dokumente x Signaturen x (Digitale Signaturkosten + Arbeitskosten).' },
    { key: 'timeSaved', label: 'Zeitersparnis', value: display.timeSaved.toFixed(2)+' h', icon: <FaClock size={28}/>, description: 'Gesparte Arbeitszeit durch digitale Signaturen im Vergleich zur handschriftlichen Signatur.' },
    { key: 'moneySaved', label: 'Ersparnis', value: display.moneySaved.toFixed(2)+' CHF', icon: <FaMoneyBillWave size={28}/>, description: 'Differenz der Kosten zwischen handschriftlichen und digitalen Signaturen.' },
    { key: 'co2Saved', label: 'CO₂ Einsparung', value: display.co2Saved.toFixed(2)+' kg', icon: <FaLeaf size={28}/>, description: 'Geschätzte CO₂-Einsparung durch weniger Papierverbrauch und Versand.' }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
      {cards.map((c,i) => (
        <div key={i} className="bg-bgPurple40 text-black p-4 rounded-lg shadow cursor-pointer hover:scale-105 transform transition flex flex-col justify-between h-full"
             onClick={() => setOpenCard(openCard === c.key ? null : c.key)}>
          <div className="flex items-center gap-2">
            {c.icon}
            <p className="font-bold text-lg">{c.label}</p>
          </div>
          <p className="text-xl mt-2">{c.value}</p>
          {openCard === c.key && (
            <p className="mt-2 text-sm text-white/80">{c.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}