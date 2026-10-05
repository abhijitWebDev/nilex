import { CharDham } from "@/components/sections/char-dham"
import { Destinations } from "@/components/sections/destinations"
import { Enquiry } from "@/components/sections/enquiry"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { Services } from "@/components/sections/services"
import { Spotlight } from "@/components/sections/spotlight"
import { WhyUs } from "@/components/sections/why-us"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Destinations />
      <CharDham />
      <Spotlight />
      <WhyUs />
      <Faq />
      <Enquiry />
    </>
  )
}
