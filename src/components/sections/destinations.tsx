"use client"

import { GlobeIcon, MountainIcon } from "lucide-react"

import { DestinationCard } from "@/components/destination-card"
import { SectionHeading, Stagger } from "@/components/motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { international, northIndia } from "@/lib/destinations"

// Bento spans so the grids feel editorial rather than uniform.
const northSpans = ["lg:col-span-2 lg:row-span-2", "", "", "", "", "lg:col-span-2", "lg:col-span-2"]
const intlSpans = ["lg:row-span-2", "lg:col-span-2", "", "", "sm:col-span-2 lg:col-span-3"]

export function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title={
            <>
              North India, unfolded. <span className="text-gradient">The world, too.</span>
            </>
          }
          description="Uttarakhand is our home ground — and we plan just as carefully for Japan, Singapore, Malaysia, China and Scandinavia."
        />

        <Tabs defaultValue="north" className="mt-12 items-center">
          <TabsList className="bg-white shadow-sm ring-1 ring-black/5">
            <TabsTrigger value="north">
              <MountainIcon /> North India
            </TabsTrigger>
            <TabsTrigger value="intl">
              <GlobeIcon /> International
            </TabsTrigger>
          </TabsList>

          <TabsContent value="north" className="mt-10 w-full">
            <Stagger className="grid auto-rows-[20rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {northIndia.map((d, i) => (
                <DestinationCard key={d.slug} d={d} className={northSpans[i]} />
              ))}
            </Stagger>
          </TabsContent>

          <TabsContent value="intl" className="mt-10 w-full">
            <Stagger className="grid auto-rows-[20rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {international.map((d, i) => (
                <DestinationCard key={d.slug} d={d} className={intlSpans[i]} />
              ))}
            </Stagger>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
