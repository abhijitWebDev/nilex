import Link from "next/link"
import { CompassIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center pt-28 text-center">
      <div>
        <CompassIcon className="mx-auto size-14 animate-spin text-accent [animation-duration:6s]" />
        <h1 className="mt-6 text-5xl font-extrabold text-navy">Off the map</h1>
        <p className="mt-2 font-script text-3xl text-primary">Even explorers take a wrong turn.</p>
        <Button asChild variant="accent" size="lg" className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  )
}
