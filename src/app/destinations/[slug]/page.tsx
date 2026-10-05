import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CalendarDaysIcon, CompassIcon, MapPinIcon, SparklesIcon, StarIcon, UsersIcon } from "lucide-react"

import { DestinationCard } from "@/components/destination-card"
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/motion"
import { Enquiry } from "@/components/sections/enquiry"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { destinations, getDestination } from "@/lib/destinations"
import { whatsappLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/icons"

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const d = getDestination(slug)
  if (!d) return {}
  return {
    title: `${d.name} Tour Packages`,
    description: `${d.name} — ${d.tagline}. ${d.short} Custom itineraries by Nilex Holidays.`,
    openGraph: { images: [{ url: d.hero }] },
  }
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params
  const d = getDestination(slug)
  if (!d) notFound()

  const related = destinations.filter((x) => x.region === d.region && x.slug !== d.slug).slice(0, 3)
  const regionLabel = d.region === "north-india" ? "North India" : "International"

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sand pt-28 pb-16 sm:pt-36">
        <div className="absolute inset-0 bg-grain opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Link href="/#destinations" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-navy">
                <ArrowLeftIcon className="size-4" /> All destinations
              </Link>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="accent">
                  <MapPinIcon /> {regionLabel}
                </Badge>
                <Badge variant="outline">
                  <CalendarDaysIcon /> {d.bestTime.split("·")[0].trim()}
                </Badge>
              </div>
              <h1 className="mt-5 text-5xl leading-[0.95] font-extrabold text-navy sm:text-7xl">{d.name}</h1>
              <p className="mt-2 font-script text-3xl text-primary sm:text-4xl">{d.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <a href="#enquire">Get a custom quote</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={whatsappLink(`Hi Nilex Holidays! I'm interested in a ${d.name} trip.`)} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="size-5 text-[#25D366]" /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={40}>
            <div className="relative">
              <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-accent/30 to-primary/30 blur-sm" />
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl shadow-navy/25">
                <Image src={d.hero} alt={`${d.name} — ${d.tagline}`} fill preload sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick facts */}
      <section className="container-x -mt-2 py-16">
        <Stagger className="grid gap-4 md:grid-cols-3">
          <StaggerItem className="rounded-3xl border bg-card p-6 shadow-sm">
            <CalendarDaysIcon className="size-6 text-accent" />
            <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">Best time to visit</p>
            <p className="mt-1 font-display text-lg font-bold text-navy">{d.bestTime}</p>
          </StaggerItem>
          <StaggerItem className="rounded-3xl border bg-card p-6 shadow-sm">
            <UsersIcon className="size-6 text-accent" />
            <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">Ideal for</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {d.idealFor.map((x) => (
                <Badge key={x} variant="secondary">
                  {x}
                </Badge>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem className="rounded-3xl border bg-card p-6 shadow-sm">
            <CompassIcon className="size-6 text-accent" />
            <p className="mt-4 text-xs font-bold tracking-wider text-muted-foreground uppercase">We cover</p>
            <p className="mt-1 font-display text-lg font-bold text-navy">{d.places.length} places, fully customisable</p>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Highlights */}
      <section className="bg-sand py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Highlights" title={`The best of ${d.name}`} />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.highlights.map((h) => (
              <StaggerItem key={h.name} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                {h.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={h.image} alt={h.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ) : (
                  <div className="grid aspect-[4/1.4] place-items-center bg-gradient-to-br from-secondary to-white">
                    <SparklesIcon className="size-8 text-accent transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-navy">{h.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.blurb}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Places + attractions */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold text-navy">Places we cover</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {d.places.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium text-navy shadow-xs transition-colors hover:border-accent hover:bg-accent/10"
              >
                <MapPinIcon className="size-3.5 text-accent" /> {p}
              </span>
            ))}
          </div>
          {d.offbeat && (
            <div className="mt-8 rounded-3xl border border-dashed border-accent/40 bg-accent/5 p-6">
              <p className="text-xs font-bold tracking-wider text-accent-strong uppercase">Off the beaten path</p>
              <p className="mt-2 font-display text-lg font-semibold text-navy">{d.offbeat.join(" · ")}</p>
            </div>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold text-navy">Must-visit attractions</h2>
          <ul className="mt-6 divide-y rounded-3xl border bg-card px-6 shadow-sm">
            {d.attractions.map((a, i) => (
              <li key={a} className="flex items-center gap-4 py-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <span className="font-medium text-navy">{a}</span>
                <StarIcon className="ml-auto size-4 shrink-0 fill-accent/20 text-accent" />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Enquiry defaultDestination={d.name} />

      {related.length > 0 && (
        <section className="container-x pb-8">
          <SectionHeading eyebrow="Keep exploring" title={`More ${regionLabel} journeys`} />
          <Stagger className="mt-12 grid auto-rows-[20rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <DestinationCard key={r.slug} d={r} />
            ))}
          </Stagger>
        </section>
      )}
    </>
  )
}
