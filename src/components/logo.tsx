import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Nilex Holidays home">
      <span className="relative grid size-11 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-500 group-hover:-rotate-6">
        <Image src="/logo-mark.png" alt="" width={450} height={350} className="h-8 w-auto" preload />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-accent">NILEX</span>{" "}
          <span className={light ? "text-white" : "text-primary"}>HOLIDAYS</span>
        </span>
        <span
          className={cn(
            "mt-1 hidden text-[0.6rem] font-semibold sm:block tracking-[0.18em] uppercase",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Packages · Flights · Visas · Insurance
        </span>
      </span>
    </Link>
  )
}
