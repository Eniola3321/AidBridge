import Link from "next/link";

export default function NgoListingPage() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">AidBridge</span>
            <div className="hidden md:flex items-center gap-6 font-manrope text-sm font-semibold tracking-tight">
              <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Projects</a>
              <a className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-600 pb-1" href="#">Impact</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 bg-primary-container text-white rounded-xl font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-md">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <div className="flex min-h-screen pt-20">
        {/* SideNavBar */}
        <aside className="h-[calc(100vh-80px)] w-64 sticky top-20 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 space-y-4 border-r border-outline-variant/10">
          <div className="mb-6">
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-50">Impact Dashboard</h2>
            <p className="text-xs text-slate-500">Verified Philanthropist</p>
          </div>
          <nav className="flex flex-col space-y-1 flex-grow">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">dashboard</span> Overview
            </a>
            <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span> NGO Portal
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">groups</span> Volunteer Hub
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">account_balance_wallet</span> Stellar Assets
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">account_balance</span> Governance
            </a>
          </nav>
          <div className="pt-6 border-t border-outline-variant/10 space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">settings</span> Settings
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:translate-x-1 transition-all rounded-xl font-inter text-sm font-medium" href="#">
              <span className="material-symbols-outlined">help</span> Support
            </a>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
          {/* Header */}
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Explore Verified NGOs</h1>
              <p className="text-on-surface-variant leading-relaxed">Direct, transparent funding for global impact. Every contribution is tracked on the Stellar blockchain for absolute accountability.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
                <input className="pl-10 pr-4 py-2.5 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm w-64" placeholder="Search mission..." type="text"/>
              </div>
            </div>
          </header>
          {/* Filters */}
          <section className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">filter_list</span> All Categories
            </div>
            <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant rounded-full text-xs font-semibold transition-colors">Education</button>
            <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant rounded-full text-xs font-semibold transition-colors">Environment</button>
            <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant rounded-full text-xs font-semibold transition-colors">Healthcare</button>
            <button className="px-4 py-2 hover:bg-surface-container text-on-surface-variant rounded-full text-xs font-semibold transition-colors">Human Rights</button>
            <div className="h-6 w-px bg-outline-variant/30 mx-2"></div>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container text-on-surface-variant rounded-full text-xs font-semibold transition-colors">
              <span className="material-symbols-outlined text-sm">public</span> Location
            </button>
          </section>
          {/* NGO Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/ngos/1">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="modern eco-friendly office space with sustainable design features and natural light from large windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6-sFd6Lc8CoSFU42xDwHzCIdM71gU703WV4X1i36Ul6D7bgc8hbAQGu6jCcGqrJ8ylkS-0fLNK0knG4azBQEJac-DgS9wU25HDy8m2AsaiLGVBYKPAkPizXknWwxzVbiNUZr2gx8iDpmstxiwj9uiHO5QnfWeWkpjz0Msrqpshh7lu77mP9rksXKeYR8SyVhiMkgr1IG4yNaoiad6LxMYebDMz4NuLMqHpEUCGQJ3VRgRgdkuqBNkKib91xdn95FIjt3IV8mxbkQ"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Green Horizon Trust</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Oslo, Norway
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">eco</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Protecting Arctic biodiversity through decentralized monitoring and community-led reforestation initiatives across Northern Europe.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">420.5k <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 2 */}
            <Link href="/ngos/2">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="clean medical laboratory with sophisticated equipment and blue ambient lighting for scientific atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPCymN5rrmuWK_2ePhlsI6_e1n-vypcshXrqvuex8x-1NtfukE1-OsjVCIgcLEThNYGt53vNIOaJyp64JRFye3Y-AlQnAqtANEkpMzyKXYM1_DjoM82OTlg9weyTCcdfbCUVYSCePFpKP9J0o5r1gtJWLEtkoR9uesJnBWHkQzU59eI_wR_y9KzyJgO0j-tzsV8Ja8tokADhC2cLcBg3zGk4h-RnSK9Pqhi6as2aaeeXjBuAXbHaww1iLmD8GvKoH-4GP50e0q3U"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">OpenHealth Global</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Nairobi, Kenya
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">medical_services</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Providing transparent supply chains for essential medicine delivery to remote regions using blockchain logistics tracking.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">1.2M <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 3 */}
            <Link href="/ngos/3">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="diverse group of students learning in a high-tech classroom with tablet devices and collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQz3dgl0hY9mbPRzzRXztWBVYBOB1LG7YKz3MIFFmn00J0GQs2qtzbR7UvTDHs5QgHikIgz6Y9BSAlVepuQDdp4GrCMPpB6YrtlFKyrZ91CndWxFYbcar8X5hfpKd4tuThA2WbyFsq_2sPoDuA0iUNWKfRNaaZeFU3F_xz7RpDTfS3fM3uRM7HJ6KY6Cd32Le55IZwWl1WBh4XCItE-eJUX0XFi-yatICX0zAFw47QO1B9COoOCF6otYEU7sTiwHb8_lLjd4goAhc"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">FutureCode Labs</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Mumbai, India
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">code_blocks</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Equipping underrepresented youth with technical literacy and digital tools to build the next generation of decentralized apps.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">892.1k <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 4 */}
            <Link href="/ngos/4">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="solar panels stretching across a sunlit desert landscape under a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5tRMtBFcMlU99VLC0nB6QqAuj-HuPiXUmEHB6PyesghNx0T5cp6nUEBZ8f05RsRFBTRwXYrm3b_RoTm91izQLANCnrwkH9hwSuwv2gEiCQW3rMVUnQ6cU7cmD809AGO2QL6Wu9NraDnAPic5PVtThbeyiSl0uawfzJbp7Ex-s05T9ATjXb17kyoed0E5K4_Kihyalu4js3MSorwDOHOBU9Pb65n4zJ4GmQtg8GENMazjb7THt-O3Ur2I-nCbbHL_pm7MKU89Rb00"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">PureGrid Energy</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Santiago, Chile
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">solar_power</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Crowdfunding micro-grids for rural communities, allowing donors to receive renewable energy certificates as NFTs.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">2.4M <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 5 */}
            <Link href="/ngos/5">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="a pair of hands holding a small green plant sprout with rich dark soil against a soft green background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0SliY1CUbuHBgzvEHNdmACcL3GAUVzhd9n_3bQBrWvE_yI9cy-NVQpIN9u_E4_WuYbj3D23as4TeZ5bRJksyfgvL7XPx6qHFvWjw6jUofENwwqb7NBvaki2VHj3JkguQ0v10ZfaBBjEZrEI5C5bGz1pc6U1XVntzmR5NxlFzayMi8CmRUuIW1yh_sUrrMq4ZcA5UX4TxWKEGilJjnfpPBxtsfMr1lB_YDOmEyBIziEUQ_ikYPoC3u_uhhEFoxg7hQ5qLcjmawPo"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">VitalRoots Fund</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Bangkok, Thailand
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">psychiatry</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Direct peer-to-peer micro-loans for sustainable farming cooperatives across Southeast Asia.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">560k <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
            {/* Card 6 */}
            <Link href="/ngos/6">
            <div className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5">
              <div className="h-48 relative">
                <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" alt="architectural sketch of a community center next to a real modern building with wood and concrete textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChPWJ2WkJ3VMpWCVrIWqqKd6-iFaqX-o7sGiXlMJdMaXGuP1TLXhUwKYPFo5-FKsYRy6tbEQtc44vucRrm-mLPOCWvHM_G6EW0kIEcM0YHRwfgUDbtCfmjjAIxZfYwbk8K7yhxuWI32jTP6Xmxkbc6QvMGpvHvQOofBR8c-j4eoFKgVbK41exTyu1rDsnpGfY-F1h1Zv2vkznReoUR2ZEg2Xp8JsH2tc2nuM-dAS3f463JSb42dA41FTNfituMTptIimeAc4vaFCg"/>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest shadow-sm">Verified</div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">ShelterBlock</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant text-xs mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Mexico City, Mexico
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">corporate_fare</span>
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">Using smart contracts to manage building materials and labor for affordable housing in urban environments.</p>
                <div className="flex items-center justify-between py-4 border-t border-outline-variant/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block">Total Raised</span>
                    <span className="text-lg font-extrabold text-on-surface">1.8M <span className="text-primary text-xs font-medium">XLM</span></span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            </Link>
          </div>
          {/* Load More */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold rounded-2xl transition-all">
              Load More Projects
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <p className="text-xs text-outline font-medium">Displaying 6 of 124 Verified Organizations</p>
          </div>
        </main>
      </div>
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="group flex items-center gap-3 bg-primary-container text-white p-4 lg:px-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
          <span className="material-symbols-outlined">add</span>
          <span className="hidden lg:block font-bold">Register NGO</span>
        </button>
      </div>
    </>
  );
}
