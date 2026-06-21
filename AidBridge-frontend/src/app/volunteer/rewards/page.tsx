import Link from "next/link";

export default function RewardsPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">AidBridge</span>
            <div className="hidden md:flex gap-6 font-manrope text-sm font-semibold tracking-tight">
              <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Projects</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Impact</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-manrope text-sm font-semibold active:scale-95 duration-200 shadow-sm transition-all">Connect Wallet</button>
          </div>
        </div>
      </nav>
      <div className="flex pt-16">
        {/* SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 bg-slate-50 dark:bg-slate-950 border-r-0 z-40 hidden md:block">
          <div className="flex flex-col h-full p-6 space-y-4">
            <div className="pb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="close-up portrait of a professional smiling man with glasses in soft natural lighting" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqklUr6GS6mIOyy6KqTMwXtqFIM6NvCgFxbSx3EiCGPYwqUb7UkNKkUBbYHnKqsBlsjBBaazpRsArgxae08Ln_c6sbnca_3HnNnDcT1x_m07TaFwn8t4WzMxUp0tACA1WrcDX6O932uGJsD9inPhDdM7Bjkq8WOf5RN2SMquf6swLtD9lQCu8zd-eSTOipqT2dodv0fJZ8R8z1_tqmalMY9JuDF9hIUf1OUjO_OAtqGeOiQP-4v-UfxVsw7Np7tGmIItGA-HI-SEI"
                  />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-slate-50 leading-none">Impact Dashboard</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Verified Philanthropist</p>
                </div>
              </div>
            </div>
            <nav className="flex-grow space-y-2 font-inter text-sm font-medium">
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform rounded-xl" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <span>Overview</span>
              </a>
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform rounded-xl" href="#">
                <span className="material-symbols-outlined">business_center</span>
                <span>NGO Portal</span>
              </a>
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform rounded-xl" href="#">
                <span className="material-symbols-outlined">groups</span>
                <span>Volunteer Hub</span>
              </a>
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform rounded-xl" href="#">
                <span className="material-symbols-outlined">account_balance_wallet</span>
                <span>Stellar Assets</span>
              </a>
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-transform rounded-xl" href="#">
                <span className="material-symbols-outlined">account_balance</span>
                <span>Governance</span>
              </a>
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-800/50 space-y-2">
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 rounded-xl" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </a>
              <a className="flex items-center gap-3 p-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 rounded-xl" href="#">
                <span className="material-symbols-outlined">help</span>
                <span>Support</span>
              </a>
            </div>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-grow md:ml-64 p-8 min-h-screen">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section: Stats & Achievements */}
            <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Rewards & NFT Portfolio</h1>
                <p className="text-on-surface-variant max-w-lg">Your immutable proof of impact. These on-chain badges recognize your commitment to global sustainable development.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Badges</p>
                  <p className="text-2xl font-bold text-on-surface">12</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Rank</p>
                  <p className="text-2xl font-bold text-on-surface">Top 5%</p>
                </div>
              </div>
            </header>
            {/* Featured Badge / Last Earned */}
            <section className="mb-12 relative overflow-hidden rounded-[2rem] nft-gradient-bg p-8 text-on-primary flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-primary/20">
              <div className="w-48 h-48 relative flex-shrink-0">
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                <img 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
                  alt="a holographic futuristic 3D badge floating in space with geometric crystalline structures and glowing neon blue light" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3sWRTVeRpl8OoYk6NbpFYe-sdFrIK6eCZ4nfKJ5atVMmH3lR2uG5Py8_p5d5Woc2h_swHzn-4On_-2QyVDe7Hlv6egHSuu414RVmHGNtskyQ-UBD-yADSfSXeWNnlfmfflomqCSpb5AtHwzF5pnIdC1AO3A_KNhfs7aQknCzrM13xB0up88YJj402zwW7MytXoxdTfAAZLqYJvdQNAcc_GLxnpTrBHwogSQzWCBQqNDlJEmcw4xBJHzuXDck0rnjjQ-GAeGbL-I"
                />
              </div>
              <div className="flex-grow space-y-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase">Newly Discovered</span>
                <h2 className="text-3xl font-bold">Global Impact Legend</h2>
                <p className="text-on-primary/80 max-w-md">Awarded for contributing over 5,000 XLM to certified reforestation projects in Southeast Asia during the Q3 cycle.</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">event_available</span>
                    <span>Earned Oct 24, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>Minted on Stellar</span>
                  </div>
                </div>
              </div>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-slate-50 transition-all active:scale-95">Share Achievement</button>
            </section>
            {/* Filter / Sorting Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-5 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-semibold">All Badges</button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-full text-sm font-semibold">Environmental</button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-full text-sm font-semibold">Human Rights</button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-full text-sm font-semibold">Community</button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-full text-sm font-semibold">Governance</button>
            </div>
            {/* NFT Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* NFT Card 1 */}
              <div className="group bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-surface-container-low transition-all duration-300">
                <div className="aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="abstract fluid 3D art piece with vibrant blue and green swirling shapes representing liquid organic growth" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXeB1Pl8Zmd-Bzxy4GZBOH-lwra3e88Plt1wQLffaU1NGg5eqpVpy3YWLaJv5lQa-xi7hGzIARsGfAOCpqGG_1Dks4VsOPB748gQCRFgDuMmPCg2ozpXLa0o-4GESgUnIOw4SNVFuA6JDsSTY0FtTjVVfB02wuvD6qtv_2tqJUskYLiHofAfi10SgHRw1_xAZavaAMszuHndPHEj9O3apsxcIVnH1itYJO0sdqTwDUWW8v_PCeic5XcjsVfeWsuuTOF80fxD2-qE"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">Liquid Philanthropy</h3>
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Rare</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Pioneer contributor to the Automated Liquidity Pool for medical supplies in rural areas.</p>
                  <div className="pt-4 flex justify-between items-center text-xs font-medium text-outline">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      <span>Sept 12, 2023</span>
                    </div>
                    <span className="text-primary cursor-pointer hover:underline">View ID #9281</span>
                  </div>
                </div>
              </div>
              {/* NFT Card 2 */}
              <div className="group bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-surface-container-low transition-all duration-300">
                <div className="aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="minimalist geometric 3D rendering of a golden key floating over a series of stacked glowing blocks on a dark background" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV6vfZ68lS09b7zr6aLrSMjUWJlwXPeJ3VdE7ilE3AovdUr-85kM4_D1BIArOgIqFJi9vvCm_yEV3E0Mss3J2oKK7O73IZGJxM7fXuotFhIxbuigE3T_x5EpfYzSXPfIF2IFzDmJleidLKhI3r9-xR21HU9rtJPM_3xxcPgsri8csEQ_TyLHRHW_lV8M_SDjw2DyvCmjs8t-_-2FRGyXuK3zkQCpzhSLcopUxjwuRQ8eRMIoxMtM97e0f-lb1QKjGFJld_qIM16Mc"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">Governance Architect</h3>
                    <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Common</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Active participation in 10+ DAO votes regarding AidBridge protocol upgrades.</p>
                  <div className="pt-4 flex justify-between items-center text-xs font-medium text-outline">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      <span>Aug 30, 2023</span>
                    </div>
                    <span className="text-primary cursor-pointer hover:underline">View ID #1102</span>
                  </div>
                </div>
              </div>
              {/* NFT Card 3 */}
              <div className="group bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-surface-container-low transition-all duration-300">
                <div className="aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="iridescent 3D bubble reflecting rainbow colors in a serene minimalist white environment with soft shadows" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVfNDcHM8WwH1_1iLoTiYeAM9C5zhLrazWvatWziMizoIxFztRPX6DahTu1xryVdQiR2BeurMaYpMCMSx6uK3Q4yOUPLhymqvmrkVX4-A30sn7QRF2rFQQsXQvL_MHqL7wUE_aF-UusRaveRFoLxVyKWlLOOb0-4P4hRlVNKxyoYpskke0RsARuud4BcqIQEVfr0daP5D-zlWx41K8XG8o6TNootMmnoJt7iCtODn8f9ANRHIQ81NW0LMb2OgOREvBy_mTs6FQRZs"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">Clear Horizon</h3>
                    <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Epic</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Supporter of carbon capture initiatives verified through Stellar's green registry.</p>
                  <div className="pt-4 flex justify-between items-center text-xs font-medium text-outline">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      <span>Aug 14, 2023</span>
                    </div>
                    <span className="text-primary cursor-pointer hover:underline">View ID #5534</span>
                  </div>
                </div>
              </div>
              {/* NFT Card 4 */}
              <div className="group bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-surface-container-low transition-all duration-300">
                <div className="aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="intricate 3D render of interconnected gold and glass circuits arranged in a circular mandala pattern" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD88cpbwrLQ-4WYpuwanAsFbAI8DcrexbrJT2iwszxplzoY7hjBJpLa1SvOeMaJHeb9BXRwfW5N7iN4-98EtfwvXPC6uzHiab-XYhIleiyhXNqceD-qabF1zvtEgr2aEiNxaApWm0fxGBo8W7tsDOLVA3QZYColAHyo0LRK7mWbGzBI-fCqE7aif23QHNKwWZqu9rKanKTgOey3dQJTcom5ohN99-OPCEnnDuqUCH2kWYNBLj7bSAoRAGAGX0Paj34hQtLyI4leLI"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">Anchor Supporter</h3>
                    <span className="bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Common</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Providing stablecoin liquidity to emerging market corridors for NGO distribution.</p>
                  <div className="pt-4 flex justify-between items-center text-xs font-medium text-outline">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      <span>July 22, 2023</span>
                    </div>
                    <span className="text-primary cursor-pointer hover:underline">View ID #3211</span>
                  </div>
                </div>
              </div>
              {/* NFT Card 5 */}
              <div className="group bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-surface-container-low transition-all duration-300">
                <div className="aspect-square w-full rounded-2xl mb-6 overflow-hidden bg-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="vibrant 3D abstract of overlapping semi-transparent circles in shades of pink and orange on a clean white background" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX3XBWAoHsPfmTuuvhO4jiV3vVlcfWFHX1pCpn51u00uMSKzqt2RJ2EDA1A6YmA-DCtWAjnWxQbV2Q55Jwu-GKszWZTIrNtxdVhKGsKg-cRIs33MdVD5KIHz9ICOMu5N939n5VvratEyPPOlu4or5FnOfwhfIEWP2gromLOIilFCbpo8VYzGTOCIdKizqujwCzV2m34Wkqf__MAjvaSb5vxjeyu-sQRcCRDO5iEdOLc3V8MCLWRugJB4OUmhWyIMagPzKP62Qf7m0"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-on-surface">Education Catalyst</h3>
                    <span className="bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Legendary</span>
                  </div>
                  <p className="text-on-surface-variant text-sm line-clamp-2">Top 1% donor for the digital literacy program across 15 underprivileged schools.</p>
                  <div className="pt-4 flex justify-between items-center text-xs font-medium text-outline">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      <span>June 05, 2023</span>
                    </div>
                    <span className="text-primary cursor-pointer hover:underline">View ID #0022</span>
                  </div>
                </div>
              </div>
              {/* Locked Badge State */}
              <div className="group bg-surface-container-low p-6 rounded-[2rem] border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined !text-4xl">lock</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface-variant">Global Peace Ambassador</h3>
                  <p className="text-on-surface-variant/60 text-xs px-4">Support 5 conflict-resolution projects to unlock this prestigious NFT badge.</p>
                </div>
                <Link href="/ngos">
                  <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* Leaderboard / Social Sidebar (Embedded for Bento feel) */}
            <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-surface-container-low p-8 rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-6">Recent Network Achievements</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <img 
                        className="w-full h-full object-cover" 
                        alt="portrait of a professional black woman with a friendly expression in studio lighting" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYpJUNKEq25eEWOIzHUEPX2QfxkyBORFHN_C3lCZp34fj_Lsq1txLquu9gi6qD2PS5R6sIbGN_d06aEDxVD9mvQTruQnpYQJWnG4faaHPeUr17VXH6F2zV5sfBsESMmzbntPk_rdnXGMKDWkYBL76n-YKhvgE6kZZJWFub92nKllLIzX3qf5WbXs_r3JO3OG_qHKAKwKEeN6VabWfsejpfZKY50AQdRt0xxvUiQ0eS5OkkJnRHsIzdwaQo2IJQTSdmdHz3dfT-aQ"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm"><span className="font-bold">Sarah Jenkins</span> just earned the <span className="text-primary font-bold">Solar Pioneer</span> NFT badge.</p>
                      <p className="text-[10px] text-outline">2 minutes ago • Mumbai Corridor</p>
                    </div>
                    <button className="text-outline"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <img 
                        className="w-full h-full object-cover" 
                        alt="headshot of a man with short hair and beard in casual attire against a neutral background" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3EJNGO52pJuniAD8mscNOQzmoGPaC4GJyANvhVSzgkcECBDEhpbXgFIxWjcpL_NDYybAbiL-g22zd6A9BOuAAjhloUEHq4EINf66TaztGRVKQYtY1jy5n_PmJfcuXtAj2Cw05PUj0AT54y6lkNVEshsqMFkKTaK5Jm2i4sEA_6d28eyK8dtPmPoSULQP2n-OfACp21WqhyXObEnBXaXwc9G_Nupzdv0uryWNoON2HT_MDWoCvZvE-rY5dUwkMR0_tv-jq0B2a510"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm"><span className="font-bold">Marco Ross</span> minted his first <span className="text-secondary font-bold">Volunteer Tier 1</span> badge.</p>
                      <p className="text-[10px] text-outline">15 minutes ago • Rome Corridor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-on-background text-on-primary p-8 rounded-[2rem] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusive Holder Perks</h3>
                  <p className="text-on-primary/60 text-sm">Your NFT badges are more than visual tokens. They grant access to specialized governance pools.</p>
                </div>
                <ul className="space-y-3 my-6">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Private Discord Access
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    2x Governance Voting Weight
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Early Beta Access to Impact Funds
                  </li>
                </ul>
                <Link href="/volunteer">
                  <button className="w-full bg-primary py-3 rounded-xl font-bold">Claim Rewards</button>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* Mobile Nav Anchor */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-slate-200/50 z-50 px-6 py-4 flex justify-between items-center">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          <span className="text-[10px] font-bold">Assets</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">military_tech</span>
          <span className="text-[10px] font-bold">Rewards</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </>
  );
}
