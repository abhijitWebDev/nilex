import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)} aria-label="Nilex Holidays home">
      <Image src="/logo-full-new.png" alt="Nilex Holidays" width={1265} height={495} className="h-12 w-auto" preload />
    </Link>
  )
}
