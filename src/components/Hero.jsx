import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">
            New • Futuristic Design
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Glow — the product platform that makes your brand shine
          </h1>
          <p className="mt-5 text-lg text-zinc-300">
            A minimal, corporate-grade experience with a glowing 3D aesthetic. Built for teams who value precision, performance, and style.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center items-center rounded-md bg-white text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">
              Start free trial
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 border border-white/10 transition-colors">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
