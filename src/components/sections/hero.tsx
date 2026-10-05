"use client"

import { img } from "@/lib/images"
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRightIcon, FileCheck2Icon, MountainSnowIcon, PlaneIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react"

import { WhatsAppIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  { icon: MountainSnowIcon, label: "Packages" },
  { icon: PlaneIcon, label: "Flights" },
  { icon: FileCheck2Icon, label: "Visas" },
  { icon: ShieldCheckIcon, label: "Insurance" },
]

function Word({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="inline-block overflow-hidden pb-2 align-bottom">
      <motion.span
        className={`inline-block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

const FLIGHT_PATH = "M 20 460 C 120 380, 60 250, 200 210 S 420 220, 470 90 S 560 10, 600 20"

export function Hero() {
  const ref = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yTop = useTransform(scrollYProgress, [0, 1], [0, -80])
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-sand pt-28 pb-20 lg:min-h-[100svh] lg:pt-32">
      {/* ambient background */}
      <div className="absolute inset-0 -z-10 bg-grain opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 size-[42rem] rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-32 -z-10 size-[34rem] rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* copy */}
        <motion.div style={{ opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur"
          >
            <span className="grid size-6 place-items-center rounded-full bg-accent text-white">
              <SparklesIcon className="size-3.5" />
            </span>
            Your trusted partner in global travel
          </motion.div>

          <h1 className="text-[3.1rem] leading-[0.95] font-extrabold text-navy sm:text-7xl xl:text-[5.4rem]">
            <Word delay={0.1}>One world.</Word>
            <br />
            <Word delay={0.25}>Endless</Word>{" "}
            <Word delay={0.4} className="text-gradient">
              journeys.
            </Word>
          </h1>

          <motion.p
            initial={{ opacity: 0, rotate: -4, y: 10 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-3 origin-left font-script text-3xl text-primary sm:text-4xl"
          >
            We create reasons to travel.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From the Char Dham and the valleys of Kashmir to cherry blossoms in Japan and the Northern Lights of
            Scandinavia — Nilex Holidays plans your whole trip: stays, transfers, flights, visas and insurance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.95 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="accent" size="lg" className="group">
              <Link href="/#destinations">
                Explore destinations
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={whatsappLink("Hi Nilex Holidays! I'd like help planning a trip.")} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5 text-[#25D366]" /> WhatsApp us
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
            className="mt-10 grid max-w-lg grid-cols-4 gap-2"
          >
            {services.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white bg-white/60 px-2 py-3 text-center text-xs font-semibold text-navy shadow-sm backdrop-blur"
              >
                <Icon className="size-5 text-accent" />
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* collage */}
        <div className="relative mx-auto aspect-[5/6] w-full max-w-[34rem] sm:aspect-[6/6]">
          {/* flight path */}
          <svg viewBox="0 0 620 480" className="pointer-events-none absolute inset-0 z-40 h-full w-full overflow-visible" aria-hidden>
            <motion.path
              d={FLIGHT_PATH}
              fill="none"
              stroke="var(--color-navy)"
              strokeOpacity={0.55}
              strokeWidth={2}
              strokeDasharray="6 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, ease: "easeInOut", delay: 0.6 }}
            />
            {/* plane flying along the path (rotated so its nose follows the tangent) */}
            <g>
              <g transform="scale(1.3) rotate(45) translate(-12 -12)">
                <path
                  d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                  fill="var(--color-accent)"
                  stroke="white"
                  strokeWidth={0.8}
                />
              </g>
              <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={FLIGHT_PATH} begin="0s" />
            </g>
          </svg>

          <motion.div
            style={{ y: yMain }}
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="absolute top-[8%] left-[18%] z-10 h-[78%] w-[62%] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl shadow-navy/30"
          >
            <Image
              src={img.kedarnathCrowd}
              alt="Kedarnath temple beneath snow peaks in Uttarakhand"
              fill
              preload
              sizes="(min-width: 1024px) 22rem, 60vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yTop }}
            initial={{ opacity: 0, x: 40, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 1.1, ease, delay: 0.45 }}
            className="absolute top-[2%] right-0 z-20 w-[44%]"
          >
            <div className="animate-float overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-xl shadow-navy/25">
              <div className="relative aspect-[4/3]">
                <Image src={img.fujiPagoda} alt="Mount Fuji behind the Chureito pagoda" fill sizes="16rem" className="object-cover" />
              </div>
              <p className="px-3 py-2 text-xs font-bold text-navy">🇯🇵 Japan</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yBottom }}
            initial={{ opacity: 0, x: -40, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -7 }}
            transition={{ duration: 1.1, ease, delay: 0.6 }}
            className="absolute bottom-[4%] left-0 z-20 w-[46%]"
          >
            <div className="animate-float-slow overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-xl shadow-navy/25">
              <div className="relative aspect-[4/3]">
                <Image src={img.marinaBay} alt="Marina Bay Sands in Singapore" fill sizes="16rem" className="object-cover" />
              </div>
              <p className="px-3 py-2 text-xs font-bold text-navy">🇸🇬 Singapore</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1.3 }}
            className="absolute right-[2%] bottom-[18%] z-30 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 shadow-xl shadow-navy/20 backdrop-blur"
          >
            <div className="relative size-11 overflow-hidden rounded-xl">
              <Image src={img.helicopter} alt="" fill sizes="44px" className="object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-[0.65rem] font-bold tracking-wider text-accent-strong uppercase">By helicopter</p>
              <p className="font-display text-sm font-bold text-navy">Char Dham Yatra</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
