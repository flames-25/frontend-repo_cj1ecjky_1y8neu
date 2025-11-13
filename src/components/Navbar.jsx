import React from 'react';
import { Menu, X, Trophy, Gamepad2, PhoneCall, UserPlus, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about', icon: Info },
  { label: 'Tournaments', href: '#tournaments', icon: Trophy },
  { label: 'Join', href: '#join', icon: UserPlus },
  { label: 'Contact', href: '#contact', icon: PhoneCall },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_1px_0_rgba(255,255,255,.2),0_12px_40px_-10px_rgba(67,97,238,.35)]"
        >
          <div className="flex items-center justify-between p-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#3A0CA3] to-[#4361EE] shadow-[0_0_30px_-8px_#3A0CA3]">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-orbitron font-extrabold tracking-wider text-white text-lg">Royal Arena</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group px-3 py-2 rounded-xl text-sm font-medium text-white/80 hover:text-white transition relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon ? <item.icon className="w-4 h-4" /> : null}
                    {item.label}
                  </span>
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition" />
                  <span className="absolute -inset-px rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 shadow-[0_0_18px_0_rgba(199,125,255,.6)] transition" />
                </a>
              ))}
              <a
                href="#join"
                className="ml-2 bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] px-4 py-2 rounded-xl text-white font-semibold shadow-[0_10px_30px_-12px_rgba(67,97,238,.8)] hover:shadow-[0_10px_40px_-10px_rgba(67,97,238,1)] transition"
              >
                Register
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden px-3 pb-3"
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
                    >
                      {item.icon ? <item.icon className="w-4 h-4" /> : null}
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#join"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-xl text-center bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#C77DFF] text-white font-semibold"
                  >
                    Register
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </div>
  );
}
