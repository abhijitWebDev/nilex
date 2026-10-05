"use client"

import { motion } from "motion/react"
import { HandshakeIcon, HeadsetIcon, MapPinnedIcon, PencilRulerIcon, UtensilsIcon, WalletIcon } from "lucide-react"

import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion"

const reasons = [
  { icon: PencilRulerIcon, title: "Tailor-made, never templated", body: "Every itinerary is built around your dates, pace and budget." },
  { icon: MapPinnedIcon, title: "On-ground expertise", body: "Local knowledge that keeps the journey running when plans change." },
  { icon: HeadsetIcon, title: "24×7 support", body: "A real person on call from the moment you leave home." },
  { icon: WalletIcon, title: "Transparent pricing", body: "Clear quotes with what's included — no surprises later." },
  { icon: HandshakeIcon, title: "Trusted partners", body: "Handpicked hotels and verified drivers across every route." },
  { icon: UtensilsIcon, title: "Comfort that counts", body: "Hygienic meals, good rooms and sensible travel times." },
]

const steps = [
  { title: "Tell us your dream trip", body: "Share where, when and who's travelling — by WhatsApp, call or the form below." },
  { title: "Get a custom itinerary", body: "We send a day-by-day plan with stays, transfers and a clear quote." },
  { title: "We book everything", body: "Flights, hotels, visas and insurance — handled and confirmed for you." },
  { title: "Travel, fully supported", body: "Enjoy the journey with round-the-clock help, from arrival to departure." },
]

export function WhyUs() {
  return (
    <section id="why-nilex" className="relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Why Nilex"
              title="Weather closes a road. A hotel overbooks. We've got it."
              description="Great trips aren't just about the plan — they're about what happens when things don't go to plan. That's where our ground expertise earns its place."
            />
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group rounded-3xl border border-white bg-white/70 p-6 shadow-sm backdrop-blur transition-colors hover:border-accent/30 hover:bg-white"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* process */}
        <div className="mt-28">
          <SectionHeading eyebrow="How it works" title="From first message to final flight home" />
          <div className="relative mt-16">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 origin-left bg-gradient-to-r from-accent via-primary to-navy lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={0.2 + i * 0.15} className="relative text-center">
                  <div>
                    <div className="relative mx-auto grid size-14 place-items-center rounded-full border-4 border-sand bg-navy font-display text-lg font-bold text-white shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
