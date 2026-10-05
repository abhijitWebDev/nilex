"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import { CheckCircle2Icon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react"

import { WhatsAppIcon } from "@/components/icons"
import { Reveal } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { international, northIndia } from "@/lib/destinations"
import { site, whatsappLink } from "@/lib/site"

/**
 * The enquiry form has no backend: on submit it opens WhatsApp with the
 * details pre-filled. To send to email/CRM instead, replace `onSubmit`
 * with a Server Action or API route.
 */
export function Enquiry({ defaultDestination }: { defaultDestination?: string }) {
  const [destination, setDestination] = React.useState(defaultDestination ?? "")
  const [sent, setSent] = React.useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const lines = [
      "Hi Nilex Holidays! I'd like a trip quote.",
      "",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Destination: ${destination || "Not sure yet"}`,
      `Travel month: ${f.get("month") || "Flexible"}`,
      `Travellers: ${f.get("travellers") || "-"}`,
      f.get("message") ? `Notes: ${f.get("message")}` : "",
    ].filter(Boolean)
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <section id="enquire" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-[oklch(0.42_0.13_252)] to-navy p-6 text-white shadow-2xl shadow-navy/30 sm:p-12 lg:p-16">
          <div aria-hidden className="absolute -top-24 -right-24 size-96 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 left-1/3 size-96 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.25em] text-accent uppercase">Plan your trip</p>
              <h2 className="mt-3 text-4xl leading-tight font-bold sm:text-5xl">Let&apos;s create journeys you&apos;ll love and remember.</h2>
              <p className="mt-4 max-w-md text-white/75">
                Share a few details and we&apos;ll get back with an itinerary and quote — usually the same day.
              </p>

              <ul className="mt-10 space-y-5">
                <ContactRow icon={PhoneIcon} label="Call us" value={site.phone} href={site.phoneHref} />
                {/* <ContactRow icon={MailIcon} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow icon={MapPinIcon} label="Visit" value={site.address} /> */}
                <ContactRow icon={ClockIcon} label="Hours" value={site.hours} />
              </ul>

              <Button asChild variant="whatsapp" size="lg" className="mt-10">
                <a href={whatsappLink("Hi Nilex Holidays! I'd like help planning a trip.")} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" /> Chat on WhatsApp
                </a>
              </Button>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative rounded-3xl bg-white p-6 text-foreground shadow-xl sm:p-8">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-96 flex-col items-center justify-center text-center"
                    >
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}>
                        <CheckCircle2Icon className="size-16 text-emerald-500" />
                      </motion.div>
                      <h3 className="mt-5 text-2xl font-bold text-navy">Almost there!</h3>
                      <p className="mt-2 max-w-xs text-muted-foreground">
                        We&apos;ve opened WhatsApp with your details — just hit send and our team will take it from there.
                      </p>
                      <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                        Send another enquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" htmlFor="name">
                        <Input id="name" name="name" required placeholder="Full name" autoComplete="name" />
                      </Field>
                      <Field label="Phone / WhatsApp" htmlFor="phone">
                        <Input id="phone" name="phone" required type="tel" placeholder="+91" autoComplete="tel" />
                      </Field>
                      <Field label="Where to?" htmlFor="destination" className="sm:col-span-2">
                        <Select value={destination} onValueChange={setDestination}>
                          <SelectTrigger id="destination">
                            <SelectValue placeholder="Choose a destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>North India</SelectLabel>
                              <SelectItem value="Char Dham Yatra">Char Dham Yatra</SelectItem>
                              <SelectItem value="Char Dham Yatra by Helicopter">Char Dham by Helicopter</SelectItem>
                              {northIndia.map((d) => (
                                <SelectItem key={d.slug} value={d.name}>
                                  {d.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                            <SelectSeparator />
                            <SelectGroup>
                              <SelectLabel>International</SelectLabel>
                              {international.map((d) => (
                                <SelectItem key={d.slug} value={d.name}>
                                  {d.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                            <SelectSeparator />
                            <SelectItem value="Something else">Something else / not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Travel month" htmlFor="month">
                        <Input id="month" name="month" type="month" />
                      </Field>
                      <Field label="Travellers" htmlFor="travellers">
                        <Input id="travellers" name="travellers" type="number" min={1} placeholder="2" />
                      </Field>
                      <Field label="Anything else?" htmlFor="message" className="sm:col-span-2">
                        <Textarea id="message" name="message" placeholder="Budget, hotel preference, flights or visa needed…" />
                      </Field>
                      <Button type="submit" variant="accent" size="lg" className="group sm:col-span-2">
                        Get my itinerary
                        <SendIcon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground sm:col-span-2">
                        Opens WhatsApp with your details pre-filled.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, className, children }: { label: string; htmlFor: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <Label htmlFor={htmlFor} className="text-navy">
        {label}
      </Label>
      {children}
    </div>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
        <Icon className="size-5 text-accent" />
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-wider text-white/60 uppercase">{label}</span>
        <span className="font-medium">{value}</span>
      </span>
    </>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  )
}
