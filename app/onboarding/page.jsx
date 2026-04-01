"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ONBOARDING_ROLES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSubmit = async () => {
    if (!selectedRole) return;
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center pt-24 pb-12 px-4 sm:px-8 overflow-hidden bg-black">
      {/* Red Radiant Background Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 text-center">
          How do you want to use <span className="text-red-500 font-semibold tracking-wide">Prept</span>?
        </h1>
        <p className="text-stone-400 text-base md:text-lg mb-12 text-center max-w-xl">
          Select your primary goal to help us tailor your experience. Don't worry, you can always change this later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          {ONBOARDING_ROLES.map((role, idx) => {
            const isSelected = selectedRole === role.value;
            return (
              <motion.button
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative text-left flex flex-col gap-4 p-8 rounded-2xl border transition-all duration-300 overflow-hidden group cursor-pointer",
                  isSelected
                    ? "bg-red-500/10 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                    : "bg-[#0f0f11] border-white/10 hover:border-red-500/30 hover:bg-white/5"
                )}
              >
                {/* Subtle spotlight equivalent for cards */}
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none",
                    isSelected ? "opacity-100" : "group-hover:opacity-100"
                  )}
                />

                <span className="text-4xl z-10">{role.icon}</span>
                <div className="z-10 flex flex-col gap-2">
                  <h3 className="text-xl font-medium text-white tracking-wide">
                    {role.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
                
                {isSelected && (
                  <motion.div
                    layoutId="outline"
                    className="absolute inset-0 border-2 border-red-500 rounded-2xl pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          animate={{ opacity: selectedRole ? 1 : 0, y: selectedRole ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto"
        >
          <Button
            size="hero"
            variant="gold"
            disabled={!selectedRole}
            onClick={handleSubmit}
            className={cn(
              "w-[260px] text-lg pointer-events-auto",
              !selectedRole && "opacity-50 cursor-not-allowed pointer-events-none shadow-none hover:shadow-none hover:translate-y-0 before:hidden"
            )}
          >
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
