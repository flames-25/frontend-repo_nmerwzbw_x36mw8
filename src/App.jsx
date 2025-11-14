import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="bg-[#0b0b0b] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">Simple pricing</h2>
              <p className="mt-3 text-zinc-400">Start free. Upgrade when you scale.</p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: 'Starter', price: '$0', desc: 'For trying things out'
              }, {
                name: 'Pro', price: '$29', desc: 'For growing teams'
              }, {
                name: 'Enterprise', price: 'Custom', desc: 'Advanced security and support'
              }].map((p) => (
                <div key={p.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-blue-600/10 pointer-events-none" />
                  <h3 className="text-xl font-medium">{p.name}</h3>
                  <p className="mt-1 text-3xl font-semibold">{p.price}<span className="text-base font-normal text-zinc-400">/mo</span></p>
                  <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                  <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-md bg-white text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">Choose plan</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold">Loved by modern teams</h2>
              <p className="mt-3 text-zinc-400">Built for designers, engineers, and operators who care about craft.</p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-zinc-300">“Glow helped us ship a polished experience in days, not weeks.”</p>
                  <div className="mt-4 text-sm text-zinc-500">VP Product, TechCorp</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="relative bg-[#0b0b0b] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h3 className="text-3xl sm:text-4xl font-semibold">Ready to make it glow?</h3>
            <p className="mt-3 text-zinc-400">Get started in minutes with a beautiful, futuristic foundation.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex justify-center items-center rounded-md bg-white text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-zinc-100 transition-colors">Create account</a>
              <a href="#" className="inline-flex justify-center items-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 border border-white/10 transition-colors">Book a demo</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
