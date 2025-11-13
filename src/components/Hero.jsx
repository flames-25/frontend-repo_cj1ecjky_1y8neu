import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#120a2a] to-[#0D0D0D]" />
        <div className="absolute inset-0 opacity-[0.35]">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(67,97,238,0.5),rgba(58,12,163,0)_60%)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(199,125,255,0.4),rgba(58,12,163,0)_60%)] blur-3xl" />
        </div>
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/10 to-[#0D0D0D] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4361EE] shadow-[0_0_12px_4px_rgba(67,97,238,.7)]" />
            Premier Esports & Tournament Management
          </div>

          <h1 className="mt-6 font-orbitron text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(58,12,163,.15)]">
            Royal-grade Tournaments for the Next Generation
          </h1>
          <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl">
            We design, host, and scale elite competitive experiences. From battle-ready lobbies to broadcast-quality streams — crafted with precision and flair.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#tournaments" className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] shadow-[0_12px_40px_-15px_rgba(67,97,238,1)]">
              Explore Tournaments
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#join" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white/90 border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10">
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
