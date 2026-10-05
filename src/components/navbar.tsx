"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { MenuIcon, PhoneIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { nav, site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/icons"

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > 600 && y > prev)
  })

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3"
    >
      <div
        className={cn(
          "container-x flex h-16 items-center justify-between rounded-2xl transition-all duration-500",
          scrolled
            ? "border border-white/60 bg-white/80 shadow-[0_10px_40px_-15px] shadow-navy/25 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="text-navy">
            <a href={site.phoneHref}>
              <PhoneIcon /> {site.phone}
            </a>
          </Button>
          <Button asChild variant="accent">
            <Link href="/#enquire">Plan my trip</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-sand">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
            </SheetHeader>
            <nav className="flex flex-col px-5">
              {nav.map((item, i) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-navy/10 py-4 font-display text-2xl font-semibold text-navy"
                  >
                    {item.label}
                    <span className="text-sm text-muted-foreground">0{i + 1}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetFooter>
              <SheetClose asChild>
                <Button asChild variant="accent" size="lg">
                  <Link href="/#enquire">Plan my trip</Link>
                </Button>
              </SheetClose>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink("Hi Nilex Holidays! I'd like help planning a trip.")} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" /> Chat on WhatsApp
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
