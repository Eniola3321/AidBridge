import Link from "next/link";

export default function VolunteerDashboardPage() {
  return (
    <>
      {/* Sidebar Navigation Shell */}
      <aside className="h-screen w-64 fixed left-0 border-r-0 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 space-y-4 font-inter text-sm font-medium z-40">
        <div className="mb-8 px-2">
          <span className="text-lg font-black text-slate-900 dark:text-slate-50 tracking-tighter">AidBridge</span>
        </div>
        <nav className="flex-1 space-y-2">
          <div className="mb-4">
            <span className="px-2 text-[10px] font-bold text-outline uppercase tracking-widest">Main Menu</span>
          </div>
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 group active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span>Overview</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 group active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">business_center</span>
            <span>NGO Portal</span>
          </a>
          {/* ACTIVE STATE: Volunteer Hub */}
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm rounded-xl active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">groups</span>
            <span>Volunteer Hub</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 group active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
            <span>Stellar Assets</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 group active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">account_balance</span>
            <span>Governance</span>
          </a>
        </nav>
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>Settings</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 transition-transform hover:translate-x-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 active:scale-[0.98] transition-all" href="#">
            <span className="material-symbols-outlined text-xl">help</span>
            <span>Support</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen p-8">
        {/* Header Profile Section */}
        <header className="flex justify-between items-start mb-10">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Impact Dashboard</h1>
            <div className="flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Verified Philanthropist</span>
              <span className="text-on-surface-variant text-sm font-medium">Lvl. 14 Trailblazer</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">Alex Rivera</p>
              <p className="text-xs text-on-surface-variant">alex.stellar@wallet</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-surface-container-high overflow-hidden shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                alt="professional headshot of a smiling young man in a clean office setting with soft natural light" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhwDI1mXVaB7HA4_XerAAaYI2SMokJ_kLK20WGTqrdGRfK0IzsAzt36eLK1Z5iGp303bBgu7wy4_wPaiddMKz_w_uaKEACbhN7HMIEM4s-awoanPY1jzYiWNL203iG3oReMueCR2LAi3ZfnG2nlH9G4WK5W2fqbBW86-Ow9yS_-2OhT_18EC3QxO6W7b07OoBVf0p95x1yaE8sDCofMJvMSgGs0Pxq4dM31uaA2tpHNCD06RqOfdRToKtHtCnIEVxag9cOrGPbFSk"
              />
            </div>
          </div>
        </header>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column: Stats & Progress (Glassmorphism Cards) */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Points Balance Card */}
            <div className="relative overflow-hidden p-8 rounded-[2rem] bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-2xl shadow-primary/20">
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">Total Impact Points</span>
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h2 className="text-5xl font-black tracking-tighter mb-2">12,450 <span className="text-lg font-normal opacity-70">XLM</span></h2>
                <p className="text-sm opacity-80 font-medium">≈ $2,490.00 USD value earned</p>
                <Link href="/volunteer/rewards">
                  <button className="mt-8 w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold transition-all active:scale-95 border border-white/20">
                    View NFT Badges
                  </button>
                </Link>
              </div>
              {/* Decorative blur circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/30 rounded-full blur-3xl"></div>
            </div>
            {/* Streak & Community Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-[1.5rem] bg-surface-container-lowest border-0 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-secondary">
                  <span className="material-symbols-outlined text-lg">local_fire_department</span>
                  <span className="text-xs font-bold uppercase">Streak</span>
                </div>
                <p className="text-2xl font-bold text-on-surface">12 Days</p>
              </div>
              <div className="p-5 rounded-[1.5rem] bg-surface-container-lowest border-0 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-tertiary">
                  <span className="material-symbols-outlined text-lg">history</span>
                  <span className="text-xs font-bold uppercase">Tasks</span>
                </div>
                <p className="text-2xl font-bold text-on-surface">84 Done</p>
              </div>
            </div>
            {/* Recent Accomplishments List */}
            <section className="bg-surface-container-low rounded-[2rem] p-6">
              <h3 className="text-lg font-bold text-on-surface mb-6 px-2">Completed Tasks</h3>
              <div className="space-y-1">
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">Ocean Cleanup Verification</p>
                    <p className="text-xs text-on-surface-variant">Verified by GlobalAqua • 2h ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-secondary">+250 pts</p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">Data Entry: Tree Planting</p>
                    <p className="text-xs text-on-surface-variant">Verified by GreenStellar • 1d ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-secondary">+100 pts</p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white dark:hover:bg-slate-900 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">Shelter Inventory Audit</p>
                    <p className="text-xs text-on-surface-variant">Verified by UrbanReach • 3d ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-secondary">+450 pts</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Right Column: Available Tasks Grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">Available Tasks</h2>
              <div className="flex gap-2">
                <span className="text-xs font-bold bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full">Environmental</span>
                <span className="text-xs font-bold bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full">Social</span>
                <span className="text-xs font-bold bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full">Technical</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Task Card 1 */}
              <div className="group relative bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="vibrant eco-friendly community center with wooden structures and modern solar panels under a clear blue sky" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-6SYQq2eTOzpDwEPxYOxpmDThp5p-c3-uVsuAepEvOizWI5A7kGl-TFKbQJZPqw7agEuMFEgksbq67fKMqXExpyzchLB6_pQCtGYJuf_1chGCyBiNrlHnG21KQV7PlwRySk7Aw0K-4UsSzKmiIjThSYNbc2MRiQpvKvmgXFH1FBXPycW8nrbJuvtuRqIdtIGJAo7p4dMDwCoXcH1F1oc887aB3P2ByiJgWlyXfmwIHRpM-NuF1DVAmqK0whsx5DoSrBFjLgW0_w"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary uppercase">Environmental</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-on-surface">Community Waste Audit</h4>
                    <span className="text-lg font-black text-primary">+350</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Help analyze waste distribution in the downtown district to optimize collection routes for the Stellar Zero-Waste initiative.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover" 
                          alt="close up profile of a woman smiling outdoors" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBSliqMlynhGhOjJUSgPLWRYsWDWmgMKQoq6JeVXnwyG3eE9W2IqQKG7qXE75fNpX6xZ-aJI4UE3FBXIe3kJA7cW314OfiSHv1lomUu3J5-PoyaTGFq1mwJlJx1UshGRO6E7e3lmABL9indpux5POKbGgEzFGw9YnsNwKNXOpp9ZWQol2NOlMSefof3VFQqTFm7yoQ28E9SlEUT71Ww88Oty6AFVwyZolrKEVjJx320S4DhQwBx0ZT3d5HLSTHz8R8q3Cg_cvS-do"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover" 
                          alt="close up profile of a man laughing outdoors" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZS0km-yVFl0r1UMfOTkNoJaLksg2bVEXLLRpManTcm1sEhHYMlZJ7WVy-1pJoWGCOYF6YSf-ZbD3-D-8H-Zdkz14ma-pHncRRVpJEJlLyk5ca_y7bA2JHgN3qcKLud9TLe_LrpgPc8E3aTWPKsO8qwuTOyQWDcyuwjIkcMtCPg5JF4tv_4YJzwlTAyHmzcboNg4CKiEUdaf2jO_dosKmk4jZJilqAcknYVb-aLurT2v5_QLneYAYVZgT4O1Uw9VUq2gQQutzNOKg"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                    </div>
                    <Link href="/volunteer/tasks/1">
                      <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-sm font-bold rounded-xl active:scale-95 transition-all">Start Task</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Task Card 2 */}
              <div className="group relative bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="brightly colored children's classroom with natural light and playful educational wall art" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABLHZD-Au_482DxM8gov_wuzydBZPApxcFTtvqNrSv9UJztkqHSgQ3PdVVRKQ74Cq9rCkodzPk2FC-tQJKL_KSRb0ZpvkTJo9i_a6_LmrF3vpkb5uANp1xrmWjfkdJJTuGFTsfQBQLeMGTrmAuE6FSeraeK52cwF_HOkm59Cx_o8fQh4kbMmIkgdjkPMxmcpc5dqikcc0xj8NxjRtfL1hIGdv8-_R-Ced3gtG9nMst8W-u0gRuvpEpY58FO_aPKvBqmM1pzggMuj4"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-tertiary-container uppercase">Social</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-on-surface">Digital Literacy Tutor</h4>
                    <span className="text-lg font-black text-primary">+500</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Remote session to guide high school students through basics of blockchain security and digital wallet safety.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover" 
                          alt="close up headshot of a woman with braided hair" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdeuBB_8oOvGBpmwt-YaPgdF7vRkv1LrDs_34rc7hYKmkAGpo9X-4w5axI-TZYsCIZ4dl6_fQvmxw9Oc-9E6_KKR6j4xB6uJ5rpSNyIzGgy-IKAIJSLqkFSs1eIIhvwHG3jDfbHRiU_lc6-_uYbofA3Fb9uL7WFIyKPvxGB2aD3-TAMWHF3jxy3eCUq9FXaDkbPpu2_MiocXomriDxlO6v6uGOff_BEce5ZTlCXWCaei_RJnxPN09VqQxzuNHme9GL0tXP1_2Nzyk"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">+4</div>
                    </div>
                    <Link href="/volunteer/tasks/2">
                      <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-sm font-bold rounded-xl active:scale-95 transition-all">Start Task</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Task Card 3 */}
              <div className="group relative bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-40 relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="high-tech laboratory with glowing screens and clean white surfaces in a modern research facility" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHkQRrUQC_F41h-M1SzRiiLCb8Qs7cluc0WinEMUyvmbjztqBrr_e78m2al4TT_3_ljrOMHy6oDO4BdPnbDo4kgXAwz0oQKiRRzPMct8LcRf27hqb5ZmJgGdMuqnPXKHR4AHy4D4HWrQeeh7QUS5aRxich1OfremSemWYjq4NPgB27EEMy-2h8TmNGCW5uMnBS8EkzZvsQK8Pdor4c4NDJkZnSqr9xO9lSiUzXyxzyH86oLUqb23HMDJuc-7OlianpNNzUyjKM88"
                  />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-on-secondary-container uppercase">Technical</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-on-surface">Smart Contract Audit</h4>
                    <span className="text-lg font-black text-primary">+1200</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Review security vulnerability on the new 'CarbonCredit' token distribution contract for the Amazonia project.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover" 
                          alt="headshot of a man with glasses and a beard in a studio setting" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAub7iUWPhDgLkWBM4qCc6hcyz30ZbIZexmrk9OWDBAAJU2_H673ihMIdevTj5tx7t9uJym2klNl5CPRMPgQ8eZAD1F6AAJtpvcrAPsbc3d0EWezxo4KmW8g2nWMQPGiM3zhW2kaLwt9YeIPmHtKoClTUPzBF5fJnFBVHk8Q70Lb5AXkNgI5Mda5tQ0vwLvnwVy9fVtHULZ_VeMpBkpaNR5UKBG1OF6Ej_AkjxV9Us-_AyBwLYGnx49PUozwH3sk6hJ1jkywO-IP4g"
                        />
                      </div>
                    </div>
                    <Link href="/volunteer/tasks/3">
                      <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-sm font-bold rounded-xl active:scale-95 transition-all">Start Task</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Coming Soon Placeholder */}
              <div className="border-2 border-dashed border-outline-variant/30 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center bg-surface/50">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-outline text-3xl">add_circle</span>
                </div>
                <p className="text-on-surface font-bold">More Tasks Loading...</p>
                <p className="text-xs text-on-surface-variant max-w-[200px] mt-2">New philanthropic opportunities are being verified on the ledger.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* FAB for quick action - Primary logic for Volunteer screen */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 group">
        <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
        <span className="absolute right-full mr-4 bg-on-surface text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Scan Attendance</span>
      </button>
    </>
  );
}
