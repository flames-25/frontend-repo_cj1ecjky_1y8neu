import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const socials = [
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0D0D0D]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Royal Arena. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href }) => (
              <a key={href} href={href} className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
