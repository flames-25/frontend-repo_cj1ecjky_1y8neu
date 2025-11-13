import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function TournamentCard({ title, game, date, prize, entry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:bg-white/10 transition shadow-[inset_0_1px_0_0_rgba(255,255,255,.06),0_10px_30px_-12px_rgba(58,12,163,.6)]"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#3A0CA3]/20 via-transparent to-[#C77DFF]/20" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#3A0CA3] to-[#4361EE]">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm">{game} • {date}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#C77DFF] font-bold">Prize Pool: ₹{prize}</div>
            <div className="text-white/80 text-sm">Entry Fee: ₹{entry}</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a href="#join" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10">
            Join Now
          </a>
          <button className="text-white/70 text-sm hover:text-white">Details →</button>
        </div>
      </div>
    </motion.div>
  );
}
