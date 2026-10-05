/**
 * Business details for Nilex Holidays.
 *
 * TODO: Replace every value marked "PLACEHOLDER" with Nilex's real details
 * before going live. Everything on the site reads from this one file.
 */
export const site = {
  name: "Nilex Holidays",
  shortName: "Nilex",
  tagline: "One world. Endless journeys.",
  description:
    "Nilex Holidays plans holiday packages, flight bookings, visas and travel insurance across North India, Char Dham and the world's most loved destinations.",
  url: "https://nilexholidays.com", // PLACEHOLDER domain

  phone: "+91 00000 00000", // PLACEHOLDER
  phoneHref: "tel:+910000000000", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER: country code + number, digits only
  email: "hello@nilexholidays.com", // PLACEHOLDER
  address: "Office address, City, State – PIN, India", // PLACEHOLDER
  hours: "Mon – Sat, 10:00 AM – 7:00 PM", // PLACEHOLDER

  socials: {
    instagram: "#", // PLACEHOLDER
    facebook: "#", // PLACEHOLDER
    youtube: "#", // PLACEHOLDER
  },
} as const

export const nav = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Char Dham", href: "/#char-dham" },
  { label: "Services", href: "/#services" },
  { label: "Why Nilex", href: "/#why-nilex" },
  { label: "FAQ", href: "/#faq" },
] as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
