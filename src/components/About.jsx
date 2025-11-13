import React from 'react';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About Us" subtitle="Elite organizers, precision execution, unforgettable showdowns.">
      <div className="grid md:grid-cols-3 gap-6">
        {["Strategy & Ops", "Broadcast & Production", "Community & Growth"].map((title, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-white/70 text-sm">We craft end-to-end tournament journeys: brackets, lobbies, rulebooks, moderation, casting, and highlight reels — all aligned to world-class standards.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
