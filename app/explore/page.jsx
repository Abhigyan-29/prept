"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Star, Clock } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// Mock Data for UI
const MOCK_INTERVIEWERS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "Senior Staff Engineer",
    company: "Google",
    rating: 4.9,
    reviews: 124,
    tags: ["FRONTEND", "SYSTEM_DESIGN", "BEHAVIORAL"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    price: "1 Credit",
  },
  {
    id: 2,
    name: "David Chen",
    title: "Engineering Manager",
    company: "Netflix",
    rating: 5.0,
    reviews: 89,
    tags: ["BACKEND", "SYSTEM_DESIGN"],
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    price: "1 Credit",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Lead Developer",
    company: "Atlassian",
    rating: 4.8,
    reviews: 210,
    tags: ["FULLSTACK", "REACT", "DSA"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    price: "1 Credit",
  },
  {
    id: 4,
    name: "Michael Chang",
    title: "Principal Engineer",
    company: "Amazon",
    rating: 4.9,
    reviews: 156,
    tags: ["BACKEND", "SYSTEM_DESIGN", "DSA"],
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    price: "1 Credit",
  },
  {
    id: 5,
    name: "James Wilson",
    title: "Senior iOS Engineer",
    company: "Uber",
    rating: 4.7,
    reviews: 64,
    tags: ["MOBILE", "SWIFT", "BEHAVIORAL"],
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    price: "1 Credit",
  },
  {
    id: 6,
    name: "Anita Desai",
    title: "Frontend Architect",
    company: "Meta",
    rating: 4.9,
    reviews: 412,
    tags: ["FRONTEND", "REACT", "PERFORMANCE"],
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    price: "2 Credits",
  },
];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? MOCK_INTERVIEWERS.filter((i) => i.tags.includes(activeCategory))
    : MOCK_INTERVIEWERS;

  return (
    <main className="min-h-screen relative pt-24 pb-16 px-4 sm:px-8 bg-black">
      {/* Background Radiance */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
          >
            Find your <span className="text-red-500 bg-linear-to-r from-red-600 to-red-400 bg-clip-text text-transparent">expert</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg max-w-2xl"
          >
            Book 1:1 sessions with engineers who have cracked the toughest hiring loops. Get insider feedback today.
          </motion.p>
        </header>

        {/* Categories Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 pb-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer",
                activeCategory === cat.value
                  ? "bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  : "bg-white/5 text-stone-400 border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Interviewers Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((interviewer, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={interviewer.id}
              className="group relative bg-[#0f0f11] border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] rounded-2xl p-6 transition-all duration-500 overflow-hidden flex flex-col gap-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <Avatar className="w-16 h-16 border border-white/10 rounded-2xl shrink-0">
                    <AvatarImage src={interviewer.avatar} className="rounded-2xl object-cover" />
                    <AvatarFallback className="rounded-2xl bg-red-500/10 text-red-500">
                      {interviewer.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-white">{interviewer.name}</h3>
                    <p className="text-sm text-stone-400">{interviewer.title}</p>
                    <p className="text-xs font-semibold text-stone-500 mt-0.5">{interviewer.company}</p>
                  </div>
                </div>
                <Badge variant="outline" className="flex items-center gap-1 border-white/5 bg-white/5 shadow-none pb-0.5">
                  <Star size={12} className="text-red-400 fill-red-400" />
                  <span className="text-stone-300 font-semibold">{interviewer.rating}</span>
                </Badge>
              </div>

              <div className="flex flex-wrap gap-1.5 min-h-[50px]">
                {interviewer.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-red-500/5 border-red-500/20 text-red-400 hover:text-red-400 font-normal shadow-none cursor-default">
                    {tag.replace("_", " ")}
                  </Badge>
                ))}
              </div>

              <div className="h-px bg-white/10 w-full" />

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-stone-400 text-sm">
                  <Clock size={14} />
                  <span>45 mins</span>
                </div>
                <Button variant="gold" size="sm" className="px-5">
                  Book • {interviewer.price}
                </Button>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center flex flex-col items-center justify-center gap-4">
              <Search className="w-12 h-12 text-stone-600 mb-2" />
              <h3 className="text-xl text-white font-medium">No experts found</h3>
              <p className="text-stone-400">Try selecting a different category label.</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
