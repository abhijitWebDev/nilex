import { destinations } from "@/lib/destinations"

const words = [...destinations.map((d) => d.name), "Char Dham Yatra", "Flights", "Visas", "Travel Insurance"]

export function Marquee() {
  return (
    <div className="relative -mt-6 overflow-hidden bg-navy py-5 text-white [--gap:2.5rem] sm:-rotate-1">
      <div className="flex w-max animate-marquee gap-(--gap) hover:[animation-play-state:paused]">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-(--gap) font-display text-2xl font-semibold whitespace-nowrap sm:text-3xl">
            {w}
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
