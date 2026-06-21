import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">AidBridge</div>
          <div className="hidden md:flex items-center gap-8 font-manrope text-sm font-semibold tracking-tight">
            <a className="text-slate-500 hover:text-blue-500 transition-colors" href="#">Projects</a>
            <a className="text-slate-500 hover:text-blue-500 transition-colors" href="#">Impact</a>
            <a className="text-slate-500 hover:text-blue-500 transition-colors" href="#">Community</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold text-sm hover:opacity-90 active:scale-95 duration-200 transition-all shadow-sm">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-24">
        <section className="relative px-8 py-20 lg:py-32 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold mb-6 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Live on Stellar Network
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-8">
                Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">Donations</span> Powered by Stellar
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                The first institutional-grade ledger for global philanthropy. Track every lumen from your wallet to the final recipient with cryptographic certainty.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                  Donate Now
                </button>
                <Link href="/ngos">
                  <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-high transition-all">
                    Explore NGOs
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 bg-surface-container-low rounded-[2.5rem]">
                <img
                  className="rounded-[2rem] shadow-2xl w-full aspect-square object-cover"
                  alt="Modern abstract visualization of blockchain nodes connecting with soft glowing blue and green light on a clean white background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcWCE63A_znyoCdl9Xcmts5In5GgiFhQBK850MZ7zDflK_NgplkgXmYTwHbFgriw6VXCJPzAa8N4mvyyJJmQVLOJQ3xmSItBsAT3uRCMMJIXpS1LxyRIyan0YMqO2TkOJvnv1V-m5kIXNLlA65_oUv4fq8Pxf2epboohKNudVb11vVlRX4JNwWEgwiNnllY3pYkh52x-0iJz5iYsssMEX4H5UHodFr5D4JP-bD32NdSpIXp08dU6ihkmIM1_OfHrANhsVPxeroBLA"
                />
                <div className="absolute bottom-10 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container">verified</span>
                    </div>
                    <div>
                      <div className="text-xs text-on-surface-variant font-medium">Transaction Verified</div>
                      <div className="text-sm font-bold font-headline">Impact Confirmed</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-extrabold font-headline mb-4">Built for Trust</h2>
              <p className="text-on-surface-variant max-w-2xl">Leveraging the speed of Stellar to ensure your contributions reach their destination instantly and transparently.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:translate-y-[-8px]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined !text-4xl">bolt</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Fast payments</h3>
                <p className="text-on-surface-variant leading-relaxed">Cross-border donations settle in seconds, not days. Ensure urgent aid reaches those in need without delay.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:translate-y-[-8px]">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined !text-4xl">visibility</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Transparent tracking</h3>
                <p className="text-on-surface-variant leading-relaxed">Every transaction is recorded on the immutable Stellar ledger. Follow your impact in real-time with verified receipts.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] transition-all hover:translate-y-[-8px]">
                <div className="w-16 h-16 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined !text-4xl">redeem</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Volunteer rewards</h3>
                <p className="text-on-surface-variant leading-relaxed">Earn NFT badges and ecosystem tokens for your contributions. Build your philanthropic reputation on-chain.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold font-headline mb-6">How it works</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="relative grid md:grid-cols-3 gap-12">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-fixed shadow-lg flex items-center justify-center text-2xl font-bold text-primary mb-8 z-10">1</div>
              <h4 className="text-xl font-bold font-headline mb-3">Connect Your Wallet</h4>
              <p className="text-on-surface-variant">Securely link your Stellar-enabled wallet to browse verified NGO projects.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-fixed shadow-lg flex items-center justify-center text-2xl font-bold text-primary mb-8 z-10">2</div>
              <h4 className="text-xl font-bold font-headline mb-3">Choose a Mission</h4>
              <p className="text-on-surface-variant">Select from vetted global initiatives ranging from environmental protection to social aid.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-fixed shadow-lg flex items-center justify-center text-2xl font-bold text-primary mb-8 z-10">3</div>
              <h4 className="text-xl font-bold font-headline mb-3">Track Your Impact</h4>
              <p className="text-on-surface-variant">Monitor transaction hashes and see real-world proof of how your donation was spent.</p>
            </div>
          </div>
        </section>
        <section className="px-8 pb-32">
          <div className="max-w-screen-2xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-on-primary">
                <h2 className="text-5xl font-extrabold font-headline mb-8 leading-tight">Ready to make a verified impact?</h2>
                <p className="text-on-primary-container text-xl mb-12 opacity-90 max-w-lg leading-relaxed">
                  Join thousands of philanthropists who are changing the world with the transparency of the Stellar blockchain.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-primary px-10 py-5 rounded-2xl font-headline font-extrabold text-lg shadow-xl hover:scale-105 transition-all">
                    Get Started
                  </button>
                  <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-headline font-extrabold text-lg border border-on-primary-container/20">
                    Contact Sales
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 w-full max-w-md">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-on-primary/60 text-sm mb-1 uppercase tracking-widest font-bold">Total Donated</div>
                      <div className="text-4xl font-headline font-black text-on-primary">45.2M XLM</div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-4xl">trending_up</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div className="text-on-primary text-sm">Water project in Kenya confirmed spend</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div className="text-on-primary text-sm">2,400 trees planted in Amazon verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-surface-container py-20 px-8 border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-2xl font-black font-headline text-on-surface mb-6">AidBridge</div>
            <p className="text-on-surface-variant mb-8 max-w-xs leading-relaxed">
              Pioneering the future of transparent philanthropy through institutional-grade blockchain technology.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Network</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Dashboard</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">NGO Portal</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Stellar Assets</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Governance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Resources</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Impact Reports</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Documentation</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">API Reference</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Connect</h5>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Support Hub</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Community Forum</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Contact Us</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-on-surface-variant text-xs">
            © 2026 AidBridge. All rights reserved. Registered Philanthropic Entity.
          </div>
          <div className="flex gap-6">
            <span className="text-xs text-on-surface-variant">System Status: <span className="text-secondary font-bold">Operational</span></span>
          </div>
        </div>
      </footer>
    </>
  );
}
