import Link from "next/link";

export default function NgoDetailsPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">AidBridge</div>
          <div className="hidden md:flex items-center gap-8 font-manrope text-sm font-semibold tracking-tight">
            <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Projects</a>
            <a className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-600 pb-1" href="#">Impact</a>
            <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Community</a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>
      
      {/* SideNavBar for Desktop */}
      <aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 p-6 space-y-4 border-r border-slate-200/50 z-40 pt-24">
        <div className="mb-8">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-50 tracking-tight">Impact Dashboard</h3>
          <p className="text-xs font-medium text-slate-500">Verified Philanthropist</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
            <span className="material-symbols-outlined">dashboard</span> Overview
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm rounded-xl font-inter text-sm font-medium" href="#">
            <span className="material-symbols-outlined">business_center</span> NGO Portal
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
            <span className="material-symbols-outlined">groups</span> Volunteer Hub
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
            <span className="material-symbols-outlined">account_balance_wallet</span> Stellar Assets
          </a>
        </nav>
        <div className="pt-6 border-t border-slate-200/50">
          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm mb-4">View NFT Badges</button>
          <div className="space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600 text-xs transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">settings</span> Settings
            </a>
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600 text-xs transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">help</span> Support
            </a>
          </div>
        </div>
      </aside>
      
      {/* Main Content (adjust padding for sidebar on desktop) */}
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto lg:pl-72">
        {/* Hero Profile Section: Asymmetric Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
                <img 
                  className="w-full h-full object-cover" 
                  alt="professional portrait of a dedicated conservationist in a field setting with soft natural morning light" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWFIM-wcGyqz7spUpl1PCWtqQ3sgGV8kmMmuOuBMYRgPcLQPH8Ih9UlNLbe3pF7dBupA9HSKKFTvGS2TGkfE8HsbB5EaC--Gt6l4HPgOrgd2WBSfNMadhSUXrLiS13toyg9ZJb4RB_zixL68Vp0pl-dFlWkMBb7GoNoxdxJuoLUcqWvX_SMXXnXsT652PUdCDEebLXMABKbv2nXt5inAQGf-ktMQZ4VJHsUxA8I976sJ-TERnkJDNz2IApxQV96uEHDlleu82SL3c"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase tracking-widest">Verified NGO</span>
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                </div>
                <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface tracking-tighter mb-4">Green Horizon Initiative</h1>
                <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Pioneering transparent reforestation and sustainable water systems across Sub-Saharan Africa using Stellar's immutable ledger for total accountability.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-surface-container-low p-6 rounded-3xl">
              <label className="text-xs font-bold text-outline uppercase tracking-widest mb-3 block">NGO Wallet Address</label>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20">
                <code className="text-primary font-mono text-sm truncate">GDSK...8S2K9M</code>
                <button className="p-2 hover:bg-surface-container text-outline hover:text-primary transition-colors rounded-lg">
                  <span className="material-symbols-outlined text-lg">content_copy</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bento Grid Stats & Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {/* Stats Card 1 */}
          <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-4xl mb-8">volunteer_activism</span>
            <div>
              <h3 className="text-on-surface-variant group-hover:text-on-primary/80 font-medium mb-1">Total Raised</h3>
              <div className="text-3xl font-headline font-black text-on-surface group-hover:text-on-primary tracking-tight">4,289,150 XLM</div>
            </div>
          </div>
          {/* Stats Card 2 */}
          <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-secondary text-4xl mb-8">eco</span>
            <div>
              <h3 className="text-on-surface-variant font-medium mb-1">Impact Radius</h3>
              <div className="text-3xl font-headline font-black text-on-surface tracking-tight">12,400 Trees</div>
            </div>
          </div>
          {/* Stats Card 3 */}
          <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-8">groups</span>
            <div>
              <h3 className="text-on-surface-variant font-medium mb-1">Unique Donors</h3>
              <div className="text-3xl font-headline font-black text-on-surface tracking-tight">842 Wallets</div>
            </div>
          </div>
          {/* Donation Widget: High Impact Card */}
          <div className="md:col-span-3 lg:col-span-1 bg-primary text-on-primary p-8 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">payments</span>
            </div>
            <h2 className="font-headline font-bold text-2xl mb-6 relative z-10">Support This Mission</h2>
            <div className="space-y-4 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary-fixed">Amount (XLM)</label>
                <input className="w-full bg-white/10 border-white/20 rounded-2xl p-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none text-xl font-bold" placeholder="50.00" type="number"/>
              </div>
              <Link href="/ngos/1/donate">
                <button className="w-full bg-white text-primary font-headline font-bold py-4 rounded-2xl hover:bg-on-primary-container transition-colors shadow-lg shadow-black/10 active:scale-95">
                  Donate Now
                </button>
              </Link>
              <p className="text-center text-xs text-white/60 font-medium">Gas fees: ~0.00001 XLM</p>
            </div>
          </div>
        </div>
        
        {/* Transparency & Proofs Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Transparency Proofs</h2>
              <p className="text-on-surface-variant">Real-time on-chain verification of fund allocation.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Live Ledger Feed</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* On-Chain Proofs Cards */}
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 flex items-center gap-6 hover:translate-x-2 transition-transform cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-3xl">photo_camera</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface">Tree Planting Verification</h4>
                  <p className="text-sm text-on-surface-variant">450 saplings confirmed via GPS-tagged NFT</p>
                </div>
                <span className="material-symbols-outlined text-outline">open_in_new</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10 flex items-center gap-6 hover:translate-x-2 transition-transform cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-3xl">receipt_long</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface">Supplier Payment Hash</h4>
                  <p className="text-sm text-on-surface-variant">Smart contract execution for water pump kits</p>
                </div>
                <span className="material-symbols-outlined text-outline">open_in_new</span>
              </div>
            </div>
            {/* Map Integration */}
            <div className="h-64 lg:h-auto rounded-3xl overflow-hidden bg-surface-container-high relative">
              <img 
                className="w-full h-full object-cover" 
                alt="minimalist satellite map of a reforestation project area with digital hexagonal overlays and data points" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtt85DQg5vsQJm8f1Wi-vTnmLP_3o6bGIG2IJgkZriHtwOAfT0XfpvUHhyNpIGGYj587o9s0UpjOy6M40EPCcNERvZtdZBqmXMWovzzlK7sm_cf34aUGo4JE1RiRg9TM3PcsXv7hceRiXANi-diV9HiqeHd_VBBFM4WEOTG-MoAEGleGQVK8LtIhCIWYRrdMIkIR-OIXfE55j7srWe2zaAhALHrkf7zTL_Nbuo-l5vTUOjkzGkSbHeMd4WjJ-rTBpcWTS-l2NEsk0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Current Focus Area</p>
                <h4 className="text-xl font-bold">Rift Valley Basin, Kenya</h4>
              </div>
            </div>
          </div>
        </section>
        
        {/* Transaction History Table */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Donation History</h2>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View Full Explorer <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="bg-surface-container-low rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-outline-variant text-xs font-bold uppercase tracking-widest border-b border-outline-variant/10">
                    <th className="px-8 py-6">Donor Wallet</th>
                    <th className="px-8 py-6">Transaction Hash</th>
                    <th className="px-8 py-6">Amount</th>
                    <th className="px-8 py-6">Date</th>
                    <th className="px-8 py-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface font-medium">
                  <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-8 py-6 text-sm font-mono text-primary">GBV4...X8L2</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-mono">7a2e...f91c</td>
                    <td className="px-8 py-6 font-bold">1,200.00 XLM</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 24, 2023</td>
                    <td className="px-8 py-6 text-right">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Confirmed</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-8 py-6 text-sm font-mono text-primary">GA3S...M2NQ</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-mono">bc88...44d2</td>
                    <td className="px-8 py-6 font-bold">500.00 XLM</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 23, 2023</td>
                    <td className="px-8 py-6 text-right">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Confirmed</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-8 py-6 text-sm font-mono text-primary">GDL9...K0PW</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-mono">ee41...99a0</td>
                    <td className="px-8 py-6 font-bold">2,450.00 XLM</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 21, 2023</td>
                    <td className="px-8 py-6 text-right">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Confirmed</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-8 py-6 text-sm font-mono text-primary">GCN2...R7YY</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-mono">01d9...c2b4</td>
                    <td className="px-8 py-6 font-bold">100.00 XLM</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant">Oct 18, 2023</td>
                    <td className="px-8 py-6 text-right">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">Confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
        <div className="flex flex-col items-center text-blue-600">
          <span className="material-symbols-outlined">business_center</span>
          <span className="text-[10px] font-bold">Impact</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold">Explore</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-bold">History</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </div>
      </div>
    </>
  );
}
