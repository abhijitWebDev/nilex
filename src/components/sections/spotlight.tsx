"use client"

import { img } from "@/lib/images"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRightIcon, MapPinIcon } from "lucide-react"

import { Reveal } from "@/components/motion"
import { Button } from "@/components/ui/button"

const mustVisit = [
  { name: "Key Monastery", body: "The spiritual heart of Spiti." },
  { name: "Kibber Village", body: "One of the highest villages in the world." },
  { name: "Chandra Taal", body: "The mirror-still 'Moon Lake'." },
  { name: "Langza", body: "Fossils and the valley's great Buddha." },
  { name: "Kunzum Pass", body: "The dramatic gateway to Spiti." },
]

export function Spotlight() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 100])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div className="relative h-[30rem] sm:h-[36rem]">
          <motion.div style={{ y: y1 }} className="absolute top-0 left-0 h-[75%] w-[78%] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
            <Image src={img.keyMonastery} alt="Key Monastery perched on a rocky hill in Spiti Valley" fill sizes="(min-width: 1024px) 34vw, 80vw" className="object-cover" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute right-0 bottom-0 h-[52%] w-[48%] overflow-hidden rounded-[2rem] border-[6px] border-background shadow-2xl shadow-navy/20">
            <Image src={img.spitiBuddha} alt="A Buddha statue facing rugged Spiti mountain peaks" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
          </motion.div>
          <div className="absolute top-[62%] left-[6%] z-10 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
            <p className="flex items-center gap-1.5 text-xs font-bold text-accent-strong">
              <MapPinIcon className="size-3.5" /> 32.24° N, 78.15° E
            </p>
            <p className="font-display text-sm font-bold text-navy">Altitude 3,200 – 4,600 m</p>
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-accent-strong uppercase">Offbeat spotlight · Himachal</p>
            <h2 className="mt-3 text-5xl font-extrabold text-navy sm:text-6xl">Spiti Valley</h2>
            <p className="mt-1 font-script text-3xl text-primary">Land of serenity. Soul of the Himalayas.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A high-altitude desert where ancient monasteries, dramatic landscapes and warm hospitality come
              together. Trek, bike or drive through high passes — then disconnect under the clearest night skies in
              India.
            </p>
          </Reveal>

          <div className="mt-8 space-y-1">
            {mustVisit.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07} x={-20} y={0}>
                <div className="group flex items-baseline gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-secondary">
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <span className="font-display text-lg font-bold text-navy">{m.name}</span>
                  <span className="ml-auto hidden text-sm text-muted-foreground sm:inline">{m.body}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8">
            <Button asChild size="lg" className="group">
              <Link href="/destinations/spiti-valley">
                Explore Spiti <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
