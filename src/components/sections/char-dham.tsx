"use client"

import { img } from "@/lib/images"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { ClockIcon, CrownIcon, FootprintsIcon, MountainIcon, MountainSnowIcon, ShieldCheckIcon } from "lucide-react"

import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { charDham } from "@/lib/destinations"

const heliPerks = [
  { icon: ClockIcon, title: "Save time", body: "Cover all four Dhams in a fraction of the road time." },
  { icon: ShieldCheckIcon, title: "Safe & comfortable", body: "Modern helicopters with experienced pilots." },
  { icon: MountainSnowIcon, title: "Aerial views", body: "Soar above the Garhwal Himalaya." },
  { icon: CrownIcon, title: "Premium care", body: "VIP darshan assistance and dedicated support." },
]

export function CharDham() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const mapY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const mapRotate = useTransform(scrollYProgress, [0, 1], [-4, 4])

  return (
    <section id="char-dham" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.5_0.14_250/0.5),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.72_0.18_55/0.18),transparent_55%)]" />

      <div ref={ref} className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Char Dham Yatra"
              title="Sacred journey. Eternal blessings."
              script="One journey, countless blessings"
              description="A pilgrimage to the four holy shrines of the Himalaya — Yamunotri, Gangotri, Kedarnath and Badrinath — with comfortable stays, hygienic vegetarian meals, experienced guides and 24×7 support at every step."
            />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="lg">
                <Link href="/#enquire">Enquire for Char Dham</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                <a href="#heli">Helicopter option</a>
              </Button>
            </Reveal>
          </div>

          <motion.div style={{ y: mapY, rotate: mapRotate }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-white/5 blur-2xl" />
            <div className="relative aspect-[4/3.3] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src={img.kedarnathValley}
                alt="Pilgrims gathered at Kedarnath temple beneath snow-capped Himalayan peaks"
                fill
                sizes="(min-width: 1024px) 40rem, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
              {/* route */}
              <ol className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 sm:inset-x-6 sm:bottom-6">
                {charDham.map((d, i) => (
                  <li key={d.name} className="flex items-center gap-1.5">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-md ring-1 ring-white/25 sm:text-sm">
                      <span className="text-accent">{i + 1}</span> {d.name}
                    </span>
                    {i < charDham.length - 1 && <span className="text-white/60">→</span>}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>

        <Stagger className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {charDham.map((dham, i) => (
            <motion.article
              key={dham.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white text-navy shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dham.image}
                  alt={`${dham.name} temple`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${dham.color} px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow`}>
                  {i + 1}. {dham.name}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{dham.blurb}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 border-t pt-4 text-center text-[0.7rem]">
                  <div>
                    <MountainIcon className="mx-auto size-4 text-accent" />
                    <dt className="mt-1 text-muted-foreground">Altitude</dt>
                    <dd className="font-bold">{dham.altitude}</dd>
                  </div>
                  <div>
                    <ClockIcon className="mx-auto size-4 text-accent" />
                    <dt className="mt-1 text-muted-foreground">Season</dt>
                    <dd className="font-bold">May – Oct</dd>
                  </div>
                  <div>
                    <FootprintsIcon className="mx-auto size-4 text-accent" />
                    <dt className="mt-1 text-muted-foreground">Trek</dt>
                    <dd className="font-bold">{dham.trek}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </Stagger>

        {/* Helicopter */}
        <Reveal>
          <div id="heli" className="mt-20 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur lg:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-64">
              <Image src={img.helicopter} alt="Helicopter flying over snow-covered Himalayan peaks" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/60 max-lg:bg-gradient-to-t" />
              <motion.div
                className="absolute top-6 left-6 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Char Dham by helicopter
              </motion.div>
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-3xl font-bold">All four Dhams, from the sky</h3>
              <p className="mt-3 text-white/70">
                Helipads at Kharsali (Yamunotri), Harsil (Gangotri), Phata / Sirsi (Kedarnath) and Govindghat
                (Badrinath) — ideal for senior travellers and tight schedules.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {heliPerks.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-white/60">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
