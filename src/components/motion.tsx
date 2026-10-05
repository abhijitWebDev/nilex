"use client"

import * as React from "react"
import { motion, type HTMLMotionProps, type Variants } from "motion/react"

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  x?: number
}

/** Fades + slides content in the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 28, x = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  show: (stagger: number = 0.08) => ({
    transition: { staggerChildren: stagger },
  }),
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
}

export function Stagger({
  stagger = 0.08,
  children,
  ...props
}: HTMLMotionProps<"div"> & { stagger?: number }) {
  return (
    <motion.div
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={staggerItem} {...props}>
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  script,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow: string
  title: React.ReactNode
  script?: string
  description?: string
  align?: "center" | "left"
  tone?: "light" | "dark"
}) {
  const center = align === "center"
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${
          tone === "dark" ? "text-accent" : "text-accent-strong"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-current" />}
      </p>
      <h2
        className={`text-4xl leading-[1.05] font-bold sm:text-5xl ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {script && (
        <p className={`mt-2 font-script text-3xl ${tone === "dark" ? "text-sky-200" : "text-primary"}`}>
          {script}
        </p>
      )}
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
