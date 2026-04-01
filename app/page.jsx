"use client";

import { CodeDemo } from "@/components/demo-components-animate-code";
import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import { AI_TAGS, AVATARS, LOGOS, ROLES, SLOTS } from "@/lib/data";
import {
  GoldTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusables";
import { Bot, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedBentoCard } from "@/components/animated-bento-card";
import { motion } from "motion/react";

function MockUI({ rows = 3 }) {
  const widths = ["w-4/5", "w-3/5", "w-2/5", "w-4/5", "w-1/2"];
  const colors = [
    "bg-white/5",
    "bg-white/5",
    "bg-red-500/15",
    "bg-white/5",
    "bg-white/5",
  ];

  return (
    <div className="mt-5 rounded-xl bg-[#141417] border border-white/10 overflow-hidden">
      <div className="h-9 bg-white/5 border-b border-white/10 flex items-center px-3.5 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full ${widths[i]} ${colors[i]}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0 } },
  };

  const STAGGER = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-black overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden">
        <StarsBackgroundDemo />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '4s' }} />

        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={STAGGER}
          className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2"
        >
          <motion.div variants={FADE_UP}>
            <Badge variant="gold">Powered by AI — Now in Beta</Badge>
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl mt-6"
          >
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            className="relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed"
          >
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto"
          >
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get started
              </Button>
            </Link>

            <Link href="/explore">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={FADE_UP}
            className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16"
          >
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={av.src}
                    alt="user avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via Prept
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3"
        >
          <CodeDemo duration={30000} writing />
        </motion.div>
      </section>

      {/* LOGOS */}
      <section className="relative z-10 border-y border-white/10 py-14 overflow-hidden">
        <p className="text-center text-xs font-medium text-stone-600 tracking-widest uppercase mb-8 relative z-20">
          Interviewees landed roles at
        </p>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black h-16">
          <Marquee repeat={6} className="[--duration:30s] flex items-center">
            {LOGOS.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={80}
                height={40}
                className="h-6 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300 mx-6 object-contain"
              />
            ))}
          </Marquee>
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black via-black/80 to-transparent z-10"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 py-28 max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-16"
        >
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
            gray="Everything you need,"
            gold="nothing you don't"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
          className="grid grid-cols-12 gap-4"
        >
          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-7">
            <AnimatedBentoCard
              icon={<Bot size={20} className="text-red-500" />}
              title={<GrayTitle>AI Question Generator</GrayTitle>}
              desc="Interviewers get a live AI co-pilot generating role-specific questions on demand — system design, behavioural, DSA — all tailored to the candidate's level."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {AI_TAGS.map((t) => (
                  <Badge key={t.label} variant={t.active ? "gold" : "outline"}>
                    {t.label}
                  </Badge>
                ))}
              </div>
            </AnimatedBentoCard>
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-5">
            <AnimatedBentoCard
              icon={<Wallet size={16} className="text-red-500" />}
              title={<GrayTitle>Credit System</GrayTitle>}
              desc="Subscribe for monthly credits. Book sessions. Interviewers earn and withdraw any time."
            >
              <div className="mt-5 rounded-xl bg-[#141417] border border-white/10 p-5 flex justify-between items-end">
                <div>
                  <p className="text-xs text-stone-600 mb-1">Your balance</p>
                  <p className="font-serif text-4xl leading-none bg-linear-to-br from-red-400 to-red-600 bg-clip-text text-transparent">
                    28
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    credits remaining
                  </p>
                </div>

                <Badge variant="secondary">+10 this month</Badge>
              </div>
            </AnimatedBentoCard>
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-4">
            <AnimatedBentoCard
              icon="📹"
              title="HD Video Calls"
              desc="Powered by Stream. Screen sharing, recording, and instant playback links — all built in."
            >
              <MockUI rows={3} />
            </AnimatedBentoCard>
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-4">
            <AnimatedBentoCard
              icon="💬"
              title="Persistent Chat"
              desc="Message your interviewer before and after the call. Share resources, prep notes, and follow-ups in one thread."
            />
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-4">
            <AnimatedBentoCard
              icon="🔒"
              title="Security by Arcjet"
              desc="Bot protection, rate limiting, and abuse prevention baked into every API route."
            />
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-6">
            <AnimatedBentoCard
              icon="📊"
              title={<GrayTitle>AI Feedback Reports</GrayTitle>}
              desc="Post-interview analysis by Gemini with actionable insights."
            >
              <MockUI rows={5} />
            </AnimatedBentoCard>
          </motion.div>

          <motion.div variants={FADE_UP} className="col-span-12 md:col-span-6">
            <AnimatedBentoCard
              icon="🗓️"
              title={<GoldTitle>Slot-based Scheduling</GoldTitle>}
              desc="Interviewers set availability once. Interviewees pick from open slots and confirm with one click — no back-and-forth needed."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {SLOTS.map((s) => (
                  <span
                    key={s.label}
                    className={`text-xs px-3 py-1.5 rounded-lg border ${s.cls}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </AnimatedBentoCard>
          </motion.div>
        </motion.div>
      </section>

      {/* ROLES */}
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-16"
        >
          <SectionLabel>Who it&apos;s for</SectionLabel>
          <SectionHeading gray="Built for both sides" gold="of the table" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
          className="grid md:grid-cols-2 gap-6"
        >
          {ROLES.map((role) => (
            <motion.div
              variants={FADE_UP}
              key={role.label}
              className="relative bg-[#0f0f11] border border-white/10 hover:border-red-500/20 rounded-2xl p-12 h-full transition duration-300 overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.05)_0%,transparent_70%)] pointer-events-none transition duration-500 group-hover:scale-110 group-hover:bg-[radial-gradient(circle,rgba(239,68,68,0.1)_0%,transparent_70%)]" />

              <span className="inline-block text-xs font-semibold text-red-500 tracking-widest uppercase border border-red-500/20 bg-red-500/10 rounded-full px-3 py-1.5 mb-5 relative z-10">
                {role.label}
              </span>

              <h3 className="font-serif text-2xl tracking-tight mb-4 relative z-10">
                {role.title}
              </h3>

              <p className="text-sm text-stone-400 leading-relaxed mb-8 relative z-10">
                {role.desc}
              </p>

              <ul className="space-y-3 relative z-10">
                {role.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-stone-400">
                    <span className="mt-0.5 min-w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-xs text-red-500">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRICING */}
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-16"
        >
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading
            gray="Simple, transparent"
            gold="credit-based plans"
          />
          <p className="text-stone-400 mt-3 text-sm">
            Each credit = one session. Unused credits roll over.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
        >
          <motion.div variants={FADE_UP}>
            <PricingSection />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="relative border border-red-500/20 rounded-3xl px-3 sm:px-16 py-20 bg-linear-to-br from-red-500/5 text-center overflow-hidden"
        >
          <StarsBackgroundDemo />

          <h2 className="font-serif relative text-4xl md:text-5xl leading-tight tracking-tight mb-4 z-10">
            <GrayTitle>Your next interview</GrayTitle>
            <br />
            <GoldTitle>starts here</GoldTitle>
          </h2>

          <p className="relative text-stone-400 font-light text-sm mb-11 z-10">
            Join thousands of engineers already levelling up on Prept.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link href="/onboarding" className="relative">
              <Button variant="gold" size="hero">
                Get started
              </Button>
            </Link>

            <Link href="/explore" className="relative">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}