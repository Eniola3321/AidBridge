import Link from "next/link";

export default function TaskDetailsPage() {
  return (
    <>
      {/* Sidebar Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 border-r-0 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 space-y-4 font-inter text-sm font-medium z-40">
        <div className="mb-8">
          <h1 className="text-lg font-black text-slate-900 dark:text-slate-50">AidBridge</h1>
          <div className="mt-6 p-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Impact Dashboard</p>
            <p className="font-bold text-on-surface">Verified Philanthropist</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined">business_center</span>
            NGO Portal
          </a>
          {/* Active State: Volunteer Hub (assuming tasks belong here) */}
          <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm rounded-xl hover:translate-x-1 transition-transform active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined">groups</span>
            Volunteer Hub
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            Stellar Assets
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform active:scale-[0.98]" href="#">
            <span className="material-symbols-outlined">account_balance</span>
            Governance
          </a>
        </nav>
        <div className="pt-6 mt-auto border-t border-slate-200/50 flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600 transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600 transition-colors" href="#">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen p-8 md:p-12">
        {/* Header with Breadcrumbs */}
        <header className="mb-10 max-w-5xl mx-auto">
          <nav className="flex gap-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">
            <a className="hover:text-primary transition-colors" href="#">Volunteer Hub</a>
            <span>/</span>
            <a className="hover:text-primary transition-colors" href="#">Active Missions</a>
            <span>/</span>
            <span className="text-on-surface">Task #842</span>
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">Ocean Reforestation Verification</h2>
              <p className="text-on-surface-variant max-w-xl font-body">Validate coral graft survival rates in the North Sulawesi marine protected zone through satellite imagery analysis and ledger documentation.</p>
            </div>
            <div className="flex items-center gap-3 bg-secondary-container px-4 py-2 rounded-xl text-on-secondary-container">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-sm font-bold uppercase tracking-tight">Verified by NGO Portal</span>
            </div>
          </div>
        </header>
        {/* Bento Grid Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Core Details */}
          <section className="md:col-span-8 space-y-6">
            {/* Main Task Image */}
            <div className="relative h-80 rounded-[2rem] overflow-hidden group">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Stunning underwater photography of vibrant blue coral reefs with sunlight beams filtering through crystal clear turquoise ocean water" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYN226eYAvjS8xKPOwyIqX4TSmilOjgG-Pihzutc8N5l--NgnVIHqLc6rgaTqawEswZUtRGePwW10xc84eYLr3VA3kz44JE-CLo7EWo67cJY86VITNSPcaBNT9bIKEmXCEhWHUbm1SpfItogvqTAy_d6bcoWHqQStizyjw5yYf3OR3drK_J8He6aFP4YhCOEJQ_eLhLrVKCI7nKC47ek5_-8ci6sR94LSXBuB30b3MuazsZzXJTIvIb90UoRm0R03S0B5jL7YWQFs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 inline-block">Urgent Impact</span>
                <h3 className="text-white text-2xl font-bold">North Sulawesi Marine Zone</h3>
              </div>
            </div>
            {/* Detailed Requirements Card */}
            <div className="bg-surface-container-low p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">assignment</span>
                Task Requirements
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">1</div>
                  <div>
                    <h4 className="font-bold text-on-surface">Satellite Comparison</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Cross-reference visual survival data with the provided coordinate set (4.32N, 124.90E) across three distinct time stamps over the last 90 days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">2</div>
                  <div>
                    <h4 className="font-bold text-on-surface">Ledger Entry Verification</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Audit the batch transaction hash on the Stellar network to ensure grafting funds were distributed to the local village collective.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">3</div>
                  <div>
                    <h4 className="font-bold text-on-surface">Impact Reporting</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Generate a summary report (min. 300 words) detailing the biological health observed and identifying any anomalies in the reef structure.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Right Column: Rewards & Submission */}
          <aside className="md:col-span-4 space-y-6">
            {/* Reward Card */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm ring-1 ring-outline/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-bold mb-6 text-on-surface">Task Rewards</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">monetization_on</span>
                    <span className="font-semibold text-sm">Impact Points</span>
                  </div>
                  <span className="text-lg font-black text-on-surface">1,250</span>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary">token</span>
                    <span className="font-semibold text-sm">Exclusive NFT</span>
                  </div>
                  <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-900 group">
                    <img 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" 
                      alt="Abstract 3D digital art featuring fluid iridescent metallic shapes swirling in deep ocean blue space with sparkling light particles" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjofIcvGxHvERMUrI53ByBckimz7S4fDLYbHcse8VDKy9bGg9LqspzsOkv7SZLE1XmHoON55h0E1VmatM1ZOGGKoeBWP-rik-YEn_1oLXOFr_KOAJCPmN_Irq7W3whLTC1QveJPLRTnaWyMCwmKAnm9NwVysgDtinPFAqf95xXU1chK-WOiz585m_csT_2ney_PZcPAfIXIGJ4xcB2g02cGVHsRoWpXj6Be3V8mwyNMzKfu0a3XjlT-pAxoYudIiGL0ljC-61ViA"
                    />
                  </div>
                  <p className="text-[10px] text-center mt-3 uppercase tracking-widest font-bold text-on-surface-variant">Reef Guardian #0842</p>
                </div>
              </div>
              {/* Submission Action */}
              <Link href="/admin">
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all active:scale-95 flex items-center justify-center gap-2">
                  Submit Proof
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <p className="text-[10px] text-center mt-4 text-on-surface-variant uppercase tracking-tighter">Deadline: 4 days, 12 hours remaining</p>
            </div>
            {/* Guided Steps Info */}
            <div className="bg-surface-container-high/50 p-6 rounded-[2rem] border border-outline-variant/30">
              <h4 className="font-bold text-sm mb-4">Submission Workflow</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-sm text-primary mt-1">check_circle</span>
                  <span className="text-xs font-medium text-on-surface-variant leading-relaxed">Submit your documentation and transaction hashes.</span>
                </li>
                <li className="flex gap-3 items-start opacity-50">
                  <span className="material-symbols-outlined text-sm mt-1">radio_button_unchecked</span>
                  <span className="text-xs font-medium text-on-surface-variant leading-relaxed">Peer verification by 3 Community Validators.</span>
                </li>
                <li className="flex gap-3 items-start opacity-50">
                  <span className="material-symbols-outlined text-sm mt-1">radio_button_unchecked</span>
                  <span className="text-xs font-medium text-on-surface-variant leading-relaxed">Rewards distributed to your Stellar wallet.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {/* Footer Stats Asymmetry */}
        <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Volunteers Active</p>
              <p className="text-2xl font-black text-on-surface">14</p>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Impact Value</p>
              <p className="text-2xl font-black text-secondary">4.2 XLM</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-on-surface-variant">Share this mission:</span>
            <div className="flex gap-3">
              <button className="h-10 w-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button className="h-10 w-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined text-lg">content_copy</span>
              </button>
            </div>
          </div>
        </footer>
      </main>
      {/* Floating Help Button (Contextual Support) */}
      <button className="fixed bottom-8 right-8 h-14 w-14 bg-on-background text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined">forum</span>
      </button>
    </>
  );
}
