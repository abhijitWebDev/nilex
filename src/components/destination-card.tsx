"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRightIcon, CalendarDaysIcon } from "lucide-react"

import { staggerItem } from "@/components/motion"
import type { Destination } from "@/lib/destinations"
import { cn } from "@/lib/utils"

export function DestinationCard({ d, className, tall = false }: { d: Destination; className?: string; tall?: boolean }) {
  // Match the requested image width to how wide the bento cell actually renders.
  const lgWidth = className?.includes("lg:col-span-3") ? "100vw" : className?.includes("lg:col-span-2") ? "66vw" : "34vw"
  const sizes = `(min-width: 1024px) ${lgWidth}, (min-width: 640px) 50vw, 100vw`
  return (
    <motion.div variants={staggerItem} className={cn("h-full", className)}>
      <Link
        href={`/destinations/${d.slug}`}
        className={cn(
          "group relative block h-full min-h-80 overflow-hidden rounded-3xl bg-navy shadow-lg shadow-navy/10 ring-1 ring-black/5",
          tall && "min-h-[26rem]"
        )}
      >
        <Image
          src={d.cover}
          alt={`${d.name} — ${d.tagline}`}
          fill
          sizes={sizes}
          quality={85}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute top-4 right-4 grid size-11 translate-y-2 place-items-center rounded-full bg-white/90 text-navy opacity-0 shadow-lg backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRightIcon className="size-5" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="font-script text-2xl leading-none text-accent">{d.tagline}</p>
          <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{d.name}</h3>
          <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-2 text-sm leading-relaxed text-white/80">{d.short}</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white/70">
                <CalendarDaysIcon className="size-3.5 text-accent" />
                {d.bestTime.split("·")[0].trim()}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
