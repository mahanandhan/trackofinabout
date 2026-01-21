import React from 'react';
import { Moon, Shield, Zap, ArrowRight, Instagram, ExternalLink, MessageSquare, Vote, HelpCircle, Play, Globe, Lock } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-emerald-50 font-mono selection:bg-emerald-500 selection:text-black">
      {/* Dynamic Background Noise/Stardust Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-emerald-500/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] flex items-center justify-center animate-pulse">
              <Moon size={18} className="text-black" fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-emerald-400 uppercase">TRACKOFIN</span>
          </div>
          <div className="flex gap-4 md:gap-8">
            <a 
              href="https://trackofin.vercel.app" 
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black font-black text-xs rounded-full hover:scale-105 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <Play size={14} fill="currentColor" /> ACCESS PORTAL
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32">
        
        {/* The "Big Bang" Header */}
        <section className="text-center relative py-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
          
          <h1 className="relative text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white mb-6">
            Tracko <span className="text-emerald-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">Fin.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-3xl font-bold italic text-emerald-200">
            <span>LIVE 9:00 PM IST</span>
            <ArrowRight className="hidden md:block text-emerald-500" />
            <span className="text-emerald-500/50 line-through">9:00 AM IST</span>
            <span className="text-red-500 bg-red-500/10 px-3 py-1 rounded border border-red-500/20 uppercase tracking-widest">Deleted</span>
          </div>
        </section>

        {/* Idea Overview Section */}
        <section id="overview" className="mt-12 space-y-12">
          <div className="p-8 md:p-12 border border-emerald-500/20 rounded-[3rem] bg-emerald-500/[0.02] backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-400 mb-8 uppercase flex items-center gap-4">
              <span className="w-8 h-8 bg-emerald-500 rounded-full"></span>
              The Idea
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-emerald-100/80">
              <p>
                Trackofin is a temporary web experience that exists only for a single night and disappears by morning. 
                Each night, a new interactive portal goes live. When the night ends, all data is purged and the site goes offline.
              </p>
              <p>
                This is not a limitation — <span className="text-emerald-400 font-bold underline decoration-emerald-500/30">it is the core feature.</span> The project explores impermanence on the internet, urgency, and honest digital interactions without long-term tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Entry Protocol & Runtime Code Showcase */}
        <section id="architecture" className="mt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-emerald-400 uppercase tracking-tighter">Connection Protocol</h2>
              <p className="text-emerald-100/70 text-lg leading-relaxed">
                Access the nightly experience through the secure production link embedded in our runtime log. 
                Our instance remains active for exactly 12 hours before the purge script executes.
              </p>
              <div className="p-6 border border-emerald-500/20 rounded-2xl bg-emerald-500/5">
                <p className="text-sm text-emerald-400 mb-2 font-bold uppercase tracking-widest">System Status:</p>
                <p className="text-emerald-100/60 text-sm">Click the green link in the code area to enter the current active environment.</p>
              </div>
            </div>

            {/* Terminal Window Showcase with Clickable Link */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-[#0a0a0a] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm">
                <div className="bg-[#1a1a1a] px-4 py-3 border-b border-emerald-500/20 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  <span className="text-[10px] text-emerald-500/50 uppercase font-bold tracking-[0.2em]">production_runtime.js</span>
                </div>
                <div className="p-6 space-y-4">
                  {/* Start Sequence */}
                  <div>
                    <span className="text-emerald-500/40 font-bold block mb-1 underline text-xs">// Nightly Launch @ 21:00 IST</span>
                    <div className="flex gap-3">
                      <span className="text-emerald-500 font-bold">[9 PM]</span>
                      <span className="text-white">init_portal();</span>
                    </div>
                  </div>

                  {/* Active Link Sequence */}
                  <div className="bg-emerald-500/5 p-4 rounded-lg border border-emerald-500/10">
                    <span className="text-emerald-500/40 font-bold block mb-1 text-xs">// Secure Connection established</span>
                    <div className="flex gap-3 items-center">
                      <Globe size={14} className="text-emerald-400 animate-spin-slow" />
                      <a 
                        href="https://trackofin.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-400 font-black underline hover:text-white transition-colors flex items-center gap-2"
                      >
                        trackofin.vercel.app <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Wait Sequence */}
                  <div className="flex gap-3">
                    <span className="text-emerald-500 font-bold">[--:--]</span>
                    <span className="text-emerald-200">await participation_window();</span>
                  </div>

                  {/* Purge Sequence */}
                  <div className="mt-4 pt-4 border-t border-emerald-500/10">
                    <span className="text-red-500/40 font-bold block mb-1 underline text-xs">// Purge Protocol @ 09:00 IST</span>
                    <div className="flex gap-3 items-center mb-2">
                      <span className="text-red-500 font-bold">[9 AM]</span>
                      <span className="text-red-400 uppercase font-black text-[10px] px-1.5 py-0.5 border border-red-500/30 rounded">purge_all()</span>
                    </div>
                    <p className="text-emerald-500/60 text-xs">$ rm -rf /data/nightly_records/*</p>
                    <p className="text-white font-bold animate-pulse mt-2 text-xs tracking-tighter">SUCCESS: Instance wiped. Nightly session ended.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases / Examples Section */}
        <section id="examples" className="mt-32">
          <h2 className="text-4xl font-black text-center text-emerald-400 mb-16 uppercase tracking-widest">
            Nightly Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Nightly Polls */}
            <div className="p-10 border border-emerald-500/10 bg-black rounded-[2.5rem] hover:border-emerald-500/40 transition-all group">
              <Vote className="text-emerald-400 mx-auto mb-6 group-hover:scale-125 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">Nightly Polls</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Cricket match predictions, trending event opinions, and college-wide voting.
              </p>
            </div>

            {/* One-Night Questions */}
            <div className="p-10 border border-emerald-500/10 bg-black rounded-[2.5rem] hover:border-emerald-500/40 transition-all group">
              <HelpCircle className="text-emerald-400 mx-auto mb-6 group-hover:scale-125 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">One-Night Qs</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                "What should vanish from the internet?" - Daily questions with temporary answers.
              </p>
            </div>

            {/* Flash Discussions */}
            <div className="p-10 border border-emerald-500/10 bg-black rounded-[2.5rem] hover:border-emerald-500/40 transition-all group">
              <MessageSquare className="text-emerald-400 mx-auto mb-6 group-hover:scale-125 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4 text-white">Flash Talk</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                Pure, anonymous discussions that leave no digital archive behind.
              </p>
            </div>
          </div>
        </section>

        {/* Entertainment Disclaimer */}
        <section className="mt-32 text-center max-w-2xl mx-auto p-10 border border-emerald-500/10 bg-emerald-900/5 rounded-3xl">
          <Zap className="mx-auto text-emerald-500 mb-6" size={40} />
          <h2 className="text-2xl font-black text-white mb-4 uppercase">Entertainment Only</h2>
          <p className="text-emerald-100/60 leading-relaxed">
            Trackofin is created for <span className="text-emerald-400 font-bold uppercase underline decoration-emerald-500/30">entertainment purposes only.</span> It is a social experiment and creative project to explore digital impermanence. No serious data processing takes place.
          </p>
        </section>

        {/* The Call to Action */}
        <section id="follow" className="mt-40 text-center bg-gradient-to-b from-emerald-500/10 to-transparent p-16 rounded-[4rem] border border-emerald-500/10">
          <h2 className="text-5xl font-black mb-8">Ready for tonight?</h2>
          <p className="text-emerald-100/60 mb-10 max-w-xl mx-auto uppercase tracking-tighter text-sm">
            We announce the nightly theme and live URL only on Instagram and WhatsApp.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://instagram.com/trackofin" 
              className="flex items-center gap-3 px-10 py-5 bg-emerald-500 text-black font-black text-xl rounded-full hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all hover:scale-105 group"
            >
              <Instagram className="group-hover:rotate-12 transition-transform" /> @trackofin
            </a>
            <a 
              href="https://trackofin.vercel.app" 
              className="flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-emerald-500 text-emerald-500 font-black text-xl rounded-full hover:bg-emerald-500/10 transition-all"
            >
              Enter Nightly Portal <ExternalLink size={20} />
            </a>
          </div>
        </section>

      </main>

      {/* Futuristic Footer */}
      <footer className="relative z-10 border-t border-emerald-500/10 bg-black pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-sm"></div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">TRACKOFIN</span>
            </div>
            <div className="text-emerald-500/40 text-sm tracking-[0.4em] uppercase">
              Impermanence as a Service
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-emerald-500/5 text-xs text-emerald-500/40 gap-4">
            <p>© 2024 TRACKOFIN PROJECT. ALL DATA DELETED DAILY.</p>
            <p className="flex items-center gap-2">MADE IN INDIA 🇮🇳 <span className="text-emerald-500 font-bold uppercase underline decoration-emerald-500/30">Entertainment Project</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;