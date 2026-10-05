"use client"

import { motion } from "motion/react"

import { WhatsAppIcon } from "@/components/icons"
import { whatsappLink } from "@/lib/site"

export function WhatsAppFab() {
  return (
    <motion.a
      href={whatsappLink("Hi Nilex Holidays! I'd like help planning a trip.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Nilex Holidays on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px] shadow-[#25D366]/60 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative size-7" />
    </motion.a>
  )
}
