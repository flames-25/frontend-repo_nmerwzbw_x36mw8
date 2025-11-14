import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-zinc-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-lg shadow-cyan-500/30" />
              <span className="text-white font-semibold tracking-wide">Glow</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium transition-colors border border-white/10">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white p-2">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-zinc-900/80">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-zinc-200 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="block text-white py-2 font-medium">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
