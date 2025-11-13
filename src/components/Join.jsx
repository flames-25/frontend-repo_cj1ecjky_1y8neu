import React from 'react';
import Section from './Section';

export default function Join() {
  return (
    <Section id="join" title="Join The Arena" subtitle="Players and organizers — register to enter our royal brackets.">
      <form className="mx-auto max-w-2xl grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white/80 text-sm">Full Name</label>
            <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4361EE]/60" placeholder="Aarav Sharma" />
          </div>
          <div>
            <label className="text-white/80 text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4361EE]/60" placeholder="you@example.com" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white/80 text-sm">Role</label>
            <select className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none">
              <option className="bg-[#0D0D0D]">Player</option>
              <option className="bg-[#0D0D0D]">Organizer</option>
            </select>
          </div>
          <div>
            <label className="text-white/80 text-sm">Game</label>
            <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C77DFF]/50" placeholder="Valorant / BGMI / CS2" />
          </div>
        </div>
        <div>
          <label className="text-white/80 text-sm">Message</label>
          <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3A0CA3]/60" placeholder="Tell us your team, rank, or event details" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm">By submitting, you agree to our terms.</p>
          <button type="button" className="rounded-xl bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-6 py-3 font-semibold text-white shadow-[0_12px_40px_-15px_rgba(199,125,255,1)] hover:opacity-95">Submit Registration</button>
        </div>
      </form>
    </Section>
  );
}
