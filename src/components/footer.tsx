import Image from "next/image"
import { img } from "@/lib/images"
import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { international, northIndia } from "@/lib/destinations"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-white">
      <div className="relative h-40 sm:h-56">
        <Image
          src={img.himalayaPanorama}
          alt="Snow-covered Himalayan range under a blue sky"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-navy" />
      </div>

      <div className="container-x grid gap-12 pt-6 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-white p-3">
            <Image src="/logo-full-new.jpeg" alt="Nilex Holidays" width={1280} height={539} className="h-auto w-[119px]" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Holiday packages, flight bookings, visas and travel insurance — planned end to end by people who
            know the ground.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: site.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: site.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: site.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-accent hover:bg-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterList title="North India" items={northIndia.map((d) => ({ label: d.name, href: `/destinations/${d.slug}` }))} />
        <FooterList
          title="International"
          items={[
            ...international.map((d) => ({ label: d.name, href: `/destinations/${d.slug}` })),
            { label: "Char Dham Yatra", href: "/#char-dham" },
          ]}
        />

        <div>
          <h3 className="text-sm font-bold tracking-[0.2em] text-accent uppercase">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.address}
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                <PhoneIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
                <MailIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nilex Holidays. All rights reserved.</p>
          <p className="font-script text-lg text-white/70">We create reasons to travel.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[0.2em] text-accent uppercase">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-white/75 transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
