import React from 'react'

export default function Calculator({ impactData, setImpactData }) {
  const handleChange = (field, value) => {
    const docs = field === 'docs' ? Number(value) : impactData.docs || 10
    const signs = field === 'signs' ? Number(value) : impactData.signs || 2
    const pages = field === 'pages' ? Number(value) : impactData.pages || 1

    // Handgeschrieben
    const paperCost = docs * signs * 2.5 * pages
    const postage = docs * signs * 2.2 * pages
    const workHours = docs * signs * 0.5 * pages
    const workCost = workHours * 63
    const totalHand = paperCost + postage + workCost

    // Digital SIGN
    const digitalCost = docs * signs * 2.2 * pages
    const digitalWorkCost = docs * signs * 0.05 * 63 * pages
    const totalDigital = digitalCost + digitalWorkCost

    const timeSaved = workHours - (docs * signs * 0.05 * pages)
    const moneySaved = totalHand - totalDigital
    const co2Saved = docs * signs * 0.5 * pages

    setImpactData({ docs, signs, pages, totalHand, totalDigital, timeSaved, moneySaved, co2Saved })
  }

  return (
    <section className="flex flex-col h-full justify-start bg-bgGrey20 p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4 text-center text-primaryPurple">
        Was kann ich mit SIGN sparen?
      </h2>
      <p className="mb-2 text-sm text-black text-center">
        Bitte geben Sie die Anzahl Dokumente, Signaturen und Seiten ein:
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="flex flex-col">
          <label htmlFor="docs" className="text-sm font-medium mb-1 text-black">Anzahl Dokumente</label>
          <input
            id="docs"
            type="number"
            value={impactData.docs || 10}
            onChange={e => handleChange('docs', e.target.value)}
            className="border border-primaryPurple p-2 rounded text-center w-32"
            min="0"
            placeholder="z.B. 10"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="signs" className="text-sm font-medium mb-1 text-black">Signaturen pro Dokument</label>
          <input
            id="signs"
            type="number"
            value={impactData.signs || 2}
            onChange={e => handleChange('signs', e.target.value)}
            className="border border-primaryPurple p-2 rounded text-center w-32"
            min="0"
            placeholder="z.B. 2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pages" className="text-sm font-medium mb-1 text-black">Seiten pro Dokument</label>
          <input
            id="pages"
            type="number"
            value={impactData.pages || 1}
            onChange={e => handleChange('pages', e.target.value)}
            className="border border-primaryPurple p-2 rounded text-center w-32"
            min="1"
            placeholder="z.B. 5"
          />
        </div>
      </div>
    </section>
  )
}
