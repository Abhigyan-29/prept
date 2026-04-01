"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AppointmentCard } from "@/components/AppointementCard";
import CreditButton from "@/components/CreditButton";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Calendar, History, Wallet } from "lucide-react";

const MOCK_INTERVIEWER = {
  name: "Emily Carter",
  title: "Principal Engineer",
  company: "Stripe",
  imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  categories: ["SYSTEM_DESIGN", "BACKEND"]
};

const MOCK_BOOKINGS = [
  {
    id: "b1",
    startTime: new Date(Date.now() + 86400000 * 2), // 2 days from now
    endTime: new Date(Date.now() + 86400000 * 2 + 3600000),
    status: "SCHEDULED",
    creditsCharged: 1,
    streamCallId: "call_abc123",
    interviewer: MOCK_INTERVIEWER,
  },
  {
    id: "b2",
    startTime: new Date(Date.now() - 86400000 * 5), // 5 days ago
    endTime: new Date(Date.now() - 86400000 * 5 + 3600000),
    status: "COMPLETED",
    creditsCharged: 1,
    recordingUrl: "https://example.com/recording",
    feedback: {
      summary: "Candidate showcased deep knowledge in distributed systems but needs to work on communicating tradeoffs more clearly.",
      overallRating: "GOOD"
    },
    interviewer: {
      ...MOCK_INTERVIEWER,
      name: "David Chen",
      company: "Netflix",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("UPCOMING");

  const upcomingBookings = MOCK_BOOKINGS.filter(b => b.status === "SCHEDULED");
  const pastBookings = MOCK_BOOKINGS.filter(b => b.status !== "SCHEDULED");
  
  const displayedBookings = activeTab === "UPCOMING" ? upcomingBookings : pastBookings;

  return (
    <main className="min-h-screen relative pt-24 pb-16 px-4 sm:px-8 bg-black flex justify-center">
      {/* Background Radiance */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
          <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-white font-serif text-2xl flex items-center gap-2">
              <LayoutDashboard size={20} className="text-red-500" />
              Dashboard
            </h2>
            <div className="h-px bg-white/10 w-full" />
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab("UPCOMING")}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm border cursor-pointer",
                  activeTab === "UPCOMING" 
                    ? "bg-red-500/10 text-red-400 border-red-500/30" 
                    : "bg-transparent text-stone-400 border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <Calendar size={16} />
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab("PAST")}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm border cursor-pointer",
                  activeTab === "PAST" 
                    ? "bg-red-500/10 text-red-400 border-red-500/30" 
                    : "bg-transparent text-stone-400 border-transparent hover:bg-white/5 hover:text-white"
                )}
              >
                <History size={16} />
                Past Sessions
              </button>
            </div>
            <div className="h-px bg-white/10 w-full mt-2" />
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between text-sm text-stone-400">
                <span className="flex items-center gap-1.5"><Wallet size={14} /> Balance</span>
                <span className="font-semibold text-white">4 Credits</span>
              </div>
              <CreditButton role="INTERVIEWEE" credits={4} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeTab}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl font-serif text-white tracking-tight">
              {activeTab === "UPCOMING" ? "Your Upcoming Interviews" : "Past Interview Feedback"}
            </h1>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <div className="flex flex-col gap-6 w-full">
              {displayedBookings.length > 0 ? (
                displayedBookings.map((booking, idx) => (
                  <motion.div
                    key={booking.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="w-full"
                  >
                    <AppointmentCard 
                      booking={booking} 
                      mode="interviewee" 
                      isPast={activeTab === "PAST"} 
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full bg-[#0f0f11] border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    {activeTab === "UPCOMING" ? <Calendar size={24} className="text-stone-500" /> : <History size={24} className="text-stone-500" />}
                  </div>
                  <h3 className="text-xl text-white font-medium">No {activeTab.toLowerCase()} sessions</h3>
                  <p className="text-stone-400 max-w-sm">
                    {activeTab === "UPCOMING" 
                      ? "You don't have any upcoming mock interviews scheduled. Head over to Explore to book one!"
                      : "You haven't completed any interviews yet. Complete one to view your AI feedback report."}
                  </p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </section>

      </div>
    </main>
  );
}
