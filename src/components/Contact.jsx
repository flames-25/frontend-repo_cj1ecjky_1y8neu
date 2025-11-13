import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" title="Contact Us" subtitle="Reach out for partnerships, sponsorships, and custom leagues.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <div className="mt-4 grid gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@royalarena.gg</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 98765 43210</div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Bengaluru, India</div>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white grid gap-3">
          <input className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40" placeholder="Name" />
          <input type="email" className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40" placeholder="Email" />
          <textarea rows={4} className="rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40" placeholder="Message" />
          <button type="button" className="rounded-xl bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-6 py-3 font-semibold text-white">Send</button>
        </form>
      </div>
    </Section>
  );
}
