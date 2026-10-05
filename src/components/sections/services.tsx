"use client"

import { motion } from "motion/react"
import { BusIcon, FileCheck2Icon, HotelIcon, MapIcon, PlaneTakeoffIcon, ShieldCheckIcon } from "lucide-react"

import { SectionHeading, Stagger, staggerItem } from "@/components/motion"

const services = [
  {
    icon: MapIcon,
    title: "Holiday Packages",
    body: "Tailor-made itineraries across North India and abroad — built around your dates, budget and travel style.",
    tone: "bg-accent text-white",
  },
  {
    icon: PlaneTakeoffIcon,
    title: "Flight Bookings",
    body: "Domestic and international fares, group bookings and connections timed to your itinerary.",
    tone: "bg-primary text-white",
  },
  {
    icon: FileCheck2Icon,
    title: "Visa Assistance",
    body: "Document checklists, application filing and appointment support for tourist visas.",
    tone: "bg-navy text-white",
  },
  {
    icon: ShieldCheckIcon,
    title: "Travel Insurance",
    body: "Cover for medical emergencies, cancellations and lost baggage, so you travel with peace of mind.",
    tone: "bg-emerald-600 text-white",
  },
  {
    icon: HotelIcon,
    title: "Handpicked Stays",
    body: "The right hotel at the right rate — from heritage properties to houseboats and mountain homestays.",
    tone: "bg-rose-500 text-white",
  },
  {
    icon: BusIcon,
    title: "Private Transfers",
    body: "A dedicated, comfortable vehicle from arrival to departure, with drivers who know the roads.",
    tone: "bg-sky-500 text-white",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your trip needs, under one roof"
          script="One call. Every detail."
          description="Nilex takes care of the pieces that usually need five different websites — so all you do is pack."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, tone }, i) => (
            <motion.article
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-navy/10"
            >
              <span className="absolute -top-4 -right-2 font-display text-8xl font-extrabold text-secondary transition-colors group-hover:text-accent/15">
                0{i + 1}
              </span>
              <div className={`relative grid size-14 place-items-center rounded-2xl ${tone} shadow-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110`}>
                <Icon className="size-6" />
              </div>
              <h3 className="relative mt-6 text-xl font-bold text-navy">{title}</h3>
              <p className="relative mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
