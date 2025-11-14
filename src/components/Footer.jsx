export default function Footer(){
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Glow. All rights reserved.</p>
        <div className="text-sm text-zinc-500">Built with care.</div>
      </div>
    </footer>
  )
}
