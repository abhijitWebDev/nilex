import { Reveal, SectionHeading } from "@/components/motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Can you customise a package to my dates and budget?",
    a: "Yes — every Nilex trip is tailor-made. Tell us your dates, number of travellers, the kind of stay you prefer and a rough budget, and we'll send a day-by-day itinerary with a clear quote.",
  },
  {
    q: "Do you help with visas for international trips?",
    a: "We help with tourist visa documentation, form filling and appointment scheduling for destinations like Japan, Singapore, Malaysia, China and the Schengen/Nordic countries. Final approval always rests with the embassy.",
  },
  {
    q: "Is flight booking and travel insurance included?",
    a: "They can be. We book domestic and international flights and arrange travel insurance, either as part of your package or as standalone services.",
  },
  {
    q: "When is the best time for the Char Dham Yatra?",
    a: "The shrines are generally open from around May to October/November, with exact opening and closing dates announced each year. May–June and September–October are the most popular windows. We'll help you pick dates and handle registration.",
  },
  {
    q: "Is the helicopter Char Dham option suitable for senior citizens?",
    a: "It's the most comfortable way to cover all four Dhams quickly and is popular with senior travellers. Weight limits and weather can apply, and we'll walk you through them before you book.",
  },
  {
    q: "How do I pay, and what's your cancellation policy?",
    a: "Once you confirm your itinerary, we share payment details and the cancellation terms that apply to your specific hotels, flights and services — in writing, before you pay anything.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions travellers ask us"
          description="Can't find what you're looking for? Message us on WhatsApp and we'll reply quickly."
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-3xl border bg-card px-6 shadow-sm sm:px-8">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
