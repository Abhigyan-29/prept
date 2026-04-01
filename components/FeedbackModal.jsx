"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, MessageSquare, Target, Zap } from "lucide-react";
import { RATING_CONFIG } from "@/lib/data";

export function FeedbackModal({ open, onOpenChange, feedback, intervieweeName }) {
  if (!feedback) return null;

  const { summary, technicalDepth, communication, problemSolving, overallRating } = feedback;
  const ratingConfig = RATING_CONFIG[overallRating] || RATING_CONFIG.GOOD;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-[#0f0f11] border-white/10 text-stone-200 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
              <Star className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-serif text-white">
                Interview Feedback
              </DialogTitle>
              {intervieweeName && (
                <p className="text-sm text-stone-400 mt-1">For {intervieweeName}</p>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-8 pb-4">
          {/* Overall Rating */}
          <div className={`p-6 rounded-2xl border ${ratingConfig.className} bg-linear-to-br ${ratingConfig.bg} to-transparent flex items-center justify-between`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Overall Performance</p>
              <h3 className="text-2xl font-bold">{ratingConfig.label} {ratingConfig.emoji}</h3>
            </div>
            <Zap className="w-8 h-8 opacity-20" />
          </div>

          {/* AI Summary */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-red-500">
              <MessageSquare size={16} />
              <h4 className="text-sm font-semibold uppercase tracking-widest">AI Summary</h4>
            </div>
            <p className="text-stone-300 leading-relaxed text-sm bg-white/5 border border-white/10 p-5 rounded-2xl">
              {summary}
            </p>
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MetricCard label="Technical" score={technicalDepth} icon={<Target size={14} />} />
            <MetricCard label="Communication" score={communication} icon={<MessageSquare size={14} />} />
            <MetricCard label="Logic" score={problemSolving} icon={<Zap size={14} />} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MetricCard({ label, score, icon }) {
  return (
    <div className="bg-[#141417] border border-white/10 p-5 rounded-2xl flex flex-col gap-3 group hover:border-red-500/30 transition-colors">
      <div className="flex items-center gap-2 text-stone-500 group-hover:text-red-400 transition-colors">
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
         <span className="text-2xl font-serif text-white">{score}</span>
         <span className="text-xs text-stone-600">/ 10</span>
      </div>
    </div>
  );
}