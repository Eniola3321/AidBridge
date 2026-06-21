import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <>
      {/* SideNavBar Integration */}
      <aside className="h-screen w-64 fixed left-0 border-r-0 bg-slate-50 dark:bg-slate-950 flex flex-col h-full p-6 space-y-4 font-inter text-sm font-medium z-40">
        <div className="mb-8">
          <span className="text-lg font-black text-slate-900 dark:text-slate-50 tracking-tighter">AidBridge</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform cursor-pointer rounded-xl">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm rounded-xl active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
            <span>NGO Portal</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform cursor-pointer rounded-xl">
            <span className="material-symbols-outlined">groups</span>
            <span>Volunteer Hub</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform cursor-pointer rounded-xl">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span>Stellar Assets</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform cursor-pointer rounded-xl">
            <span className="material-symbols-outlined">account_balance</span>
            <span>Governance</span>
          </div>
        </div>
        <div className="mt-auto space-y-6">
          <div className="p-4 bg-primary-container/10 rounded-xl">
            <p className="text-xs font-bold text-primary mb-2">Verified Philanthropist</p>
            <Link href="/volunteer/rewards">
              <button className="w-full bg-primary text-on-primary text-xs py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">View NFT Badges</button>
            </Link>
          </div>
          <div className="space-y-1 border-t border-slate-200 pt-4">
            <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 cursor-pointer rounded-xl">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 cursor-pointer rounded-xl">
              <span className="material-symbols-outlined">help</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen p-8 bg-surface">
        {/* Top Header Navigation */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">NGO Admin Dashboard</h1>
            <p className="text-on-surface-variant text-sm mt-1">Real-time philanthropic impact analytics on Stellar.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <input className="bg-surface-container-high border-none rounded-full px-6 py-2.5 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50" placeholder="Search donors or campaigns..." type="text"/>
              <span className="material-symbols-outlined absolute right-4 top-2.5 text-on-surface-variant/60">search</span>
            </div>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 flex items-center space-x-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-sm">add</span>
              <span>New Campaign</span>
            </button>
          </div>
        </header>
        {/* KPI Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-container-lowest p-6 rounded-2xl ghost-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <span className="text-secondary font-bold text-xs bg-secondary-container/20 px-2 py-1 rounded-full">+12.5%</span>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Total Funds Received</p>
            <h3 className="font-headline text-2xl font-bold mt-1">428,500 XLM</h3>
            <p className="text-on-surface-variant/60 text-[10px] mt-2">~$48,210.00 USD</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl ghost-border shadow-sm border-l-4 border-l-secondary">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
              </div>
              <span className="text-secondary font-bold text-xs bg-secondary-container/20 px-2 py-1 rounded-full">+8%</span>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Active Donors</p>
            <h3 className="font-headline text-2xl font-bold mt-1">1,240</h3>
            <p className="text-on-surface-variant/60 text-[10px] mt-2">Verified unique addresses</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl ghost-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary/10 rounded-lg">
                <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Live Campaigns</p>
            <h3 className="font-headline text-2xl font-bold mt-1">14</h3>
            <p className="text-on-surface-variant/60 text-[10px] mt-2">3 ending this week</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl ghost-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-on-surface/5 rounded-lg">
                <span className="material-symbols-outlined text-on-surface">account_balance</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Impact Ratio</p>
            <h3 className="font-headline text-2xl font-bold mt-1">94.2%</h3>
            <p className="text-on-surface-variant/60 text-[10px] mt-2">Fund utilization efficiency</p>
          </div>
        </div>
        {/* Main Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Funds Flow Chart */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl ghost-border shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-headline text-lg font-bold">Donation Analytics</h4>
                <p className="text-on-surface-variant text-xs">Fund velocity over the last 30 days</p>
              </div>
              <div className="flex bg-surface-container-low p-1 rounded-xl">
                <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-lg text-primary">Line</button>
                <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant">Bar</button>
              </div>
            </div>
            {/* Mock Chart Visual */}
            <div className="h-64 flex items-end justify-between space-x-2 mt-4 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-outline"></div>
                <div className="border-b border-outline"></div>
                <div className="border-b border-outline"></div>
                <div className="border-b border-outline"></div>
              </div>
              <div className="flex-1 bg-primary/10 hover:bg-primary/30 transition-colors h-[40%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/10 hover:bg-primary/30 transition-colors h-[60%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/10 hover:bg-primary/30 transition-colors h-[35%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/30 transition-colors h-[85%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/40 hover:bg-primary/30 transition-colors h-[55%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/30 transition-colors h-[70%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/60 hover:bg-primary/30 transition-colors h-[95%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/30 hover:bg-primary/30 transition-colors h-[45%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary/20 hover:bg-primary/30 transition-colors h-[65%] rounded-t-lg"></div>
              <div className="flex-1 bg-primary-container h-[100%] rounded-t-lg relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
                  Peak: 42.1k XLM
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
              <span>Oct 01</span>
              <span>Oct 07</span>
              <span>Oct 14</span>
              <span>Oct 21</span>
              <span>Oct 30</span>
            </div>
          </div>
          {/* Campaign Management Mini-List */}
          <div className="bg-surface-container-high p-8 rounded-2xl border-none shadow-inner">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline text-lg font-bold">Active Campaigns</h4>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
            </div>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl ghost-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-on-surface truncate pr-4">Global Education Initiative</span>
                  <span className="text-[10px] text-secondary font-bold">82%</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant">164,000 / 200,000 XLM</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl ghost-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-on-surface truncate pr-4">Clean Water: Northern Rift</span>
                  <span className="text-[10px] text-primary font-bold">45%</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
                  <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant">45,000 / 100,000 XLM</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl ghost-border opacity-60">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-on-surface truncate pr-4">Reforestation Program 2024</span>
                  <span className="text-[10px] text-on-surface-variant font-bold">Finished</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
                  <div className="bg-outline h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-[10px] text-on-surface-variant">120,500 / 120,000 XLM</p>
              </div>
              <button className="w-full py-3 border-2 border-dashed border-outline-variant text-outline rounded-xl text-xs font-bold hover:bg-white transition-colors">
                + Deploy Smart Contract
              </button>
            </div>
          </div>
        </div>
        {/* Recent Donors & Blockchain Feed */}
        <div className="bg-surface-container-lowest rounded-2xl ghost-border shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-headline text-xl font-extrabold tracking-tight">Recent On-Chain Activity</h4>
              <p className="text-on-surface-variant text-sm">Verified donations processed via AidBridge.</p>
            </div>
            <button className="text-primary font-bold text-xs flex items-center space-x-1 hover:underline">
              <span>Export Ledger (.CSV)</span>
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold border-b border-surface-container">
                  <th className="pb-4">Donor Identity</th>
                  <th className="pb-4">Transaction Hash</th>
                  <th className="pb-4">Campaign</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Donor Row */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-white">
                        <img className="w-full h-full object-cover" alt="minimalist stylized avatar of a person with professional attire on a soft blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmUEvzmyPUiyXiQcxlOGXdq3e-zQzd-SiC-BmszfOogjrGUapMzBM3DhFYccVtd1HaxJFdWsx55BXHxn5NxXbMSgvEVaF5lcA8ZOoqbA5XLb9p32ELXyJQb4h3T-a1dv80MlV_3bKYn9z3YaYu11EH8VaMrGVXScwFSMPIUPRwn6IA0u73eATtEvIeDf7BRlERUQ5t_QpfPyOzrnedZl1PlaeVHnbhv1LaqYZbmFx2O8t5pQgFJHijYgmKdz1OPcWxrJYmGfg_7yk"/>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Stellar Whale v4</p>
                        <p className="text-[10px] text-on-surface-variant">Verified Philanthropist</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 font-mono text-[10px] text-primary">GCB3...R6K2</td>
                  <td className="py-5">
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-md font-bold">Education</span>
                  </td>
                  <td className="py-5">
                    <p className="font-bold">15,000 XLM</p>
                    <p className="text-[10px] text-secondary font-bold">+$1,650.00</p>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center space-x-1 text-secondary">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                      <span className="text-xs font-medium">Confirmed</span>
                    </div>
                  </td>
                  <td className="py-5 text-right text-on-surface-variant text-xs">2 mins ago</td>
                </tr>
                {/* Donor Row */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-5 border-t border-surface-container/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-white">
                        <img className="w-full h-full object-cover" alt="minimalist stylized avatar of a woman with a modern professional look and warm background colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgqp3i5bygrxpt6h2Iec9n-NYH0tlAYQya9MgrIQ8m5TYWJdnZrlzvzSgXgsbDunHY8o2zeLyoNuotiLfWUmSRecRNOhF8fCyAjU0kEWYOuQ1Foh7EgiGK8XI5Vnih_OsNGXY-kwF1N0IfJ1hXb-foWh9XVrIG6cy2smZoz6038AiY4BFhdjx46p6HxulbMyHIWMBh4HdG21Nc0-bCF5_itWnUevnUobMQbE-j-395gLUnoQq7eBjJI-Nyjs9wbTGUY8g5AUWDLTc"/>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">Sarah K. Miller</p>
                        <p className="text-[10px] text-on-surface-variant">recurring donor</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 font-mono text-[10px] text-primary">GDFR...99L0</td>
                  <td className="py-5">
                    <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded-md font-bold">Reforest</span>
                  </td>
                  <td className="py-5">
                    <p className="font-bold">2,500 XLM</p>
                    <p className="text-[10px] text-secondary font-bold">+$275.00</p>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center space-x-1 text-secondary">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      <span className="text-xs font-medium">Confirmed</span>
                    </div>
                  </td>
                  <td className="py-5 text-right text-on-surface-variant text-xs">14 mins ago</td>
                </tr>
                {/* Donor Row */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-5 border-t border-surface-container/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-on-surface flex items-center justify-center text-white text-[10px] font-bold">
                        ?
                      </div>
                      <div>
                        <p className="font-bold text-on-surface italic">Anonymous</p>
                        <p className="text-[10px] text-on-surface-variant">unclaimed profile</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 font-mono text-[10px] text-primary">GA33...11X7</td>
                  <td className="py-5">
                    <span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-1 rounded-md font-bold">Clean Water</span>
                  </td>
                  <td className="py-5">
                    <p className="font-bold">50,000 XLM</p>
                    <p className="text-[10px] text-secondary font-bold">+$5,500.00</p>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center space-x-1 text-secondary">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      <span className="text-xs font-medium">Confirmed</span>
                    </div>
                  </td>
                  <td className="py-5 text-right text-on-surface-variant text-xs">1 hr ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/ngos/1/donate">
              <button className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-8 py-3 rounded-full hover:bg-surface-container-highest transition-colors">
                View Full Transaction History
              </button>
            </Link>
          </div>
        </div>
        {/* Floating Analytics Indicator (Glassmorphism) */}
        <div className="fixed bottom-8 right-8 glass-effect ghost-border p-4 rounded-2xl shadow-2xl z-50 flex items-center space-x-4 max-w-xs">
          <div className="relative">
            <svg className="w-12 h-12">
              <circle className="text-surface-container-high" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-secondary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="30" strokeWidth="4"></circle>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black">76%</span>
          </div>
          <div>
            <p className="text-xs font-bold">Monthly Goal Status</p>
            <p className="text-[10px] text-on-surface-variant">Next payout scheduled in 48h</p>
          </div>
          <button className="p-2 bg-primary text-on-primary rounded-xl">
            <span className="material-symbols-outlined text-sm">trending_up</span>
          </button>
        </div>
      </main>
    </>
  );
}
