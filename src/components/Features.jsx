export default function Features(){
  const features = [
    {
      title: 'Realtime Insights',
      desc: 'Dashboards that glow with clarity. See trends, actions, and outcomes at a glance.',
    },
    {
      title: 'Secure by Design',
      desc: 'Enterprise-ready auth, encryption, and audit logs built-in from day one.',
    },
    {
      title: 'Effortless Integration',
      desc: 'Plug into your stack with clean APIs and robust webhooks.',
    },
  ]

  return (
    <section id="features" className="relative bg-[#0b0b0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Designed to perform</h2>
          <p className="mt-3 text-zinc-400">Minimal, functional, and refined — everything you need without the noise.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/80 to-blue-600/80 mb-4" />
              <h3 className="text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
