'use client';

import Link from "next/link";
import { useState } from 'react';

export default function DonatePage() {
  const [step, setStep] = useState<'confirm' | 'success'>('confirm');
  const [showWalletModal, setShowWalletModal] = useState(true);

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
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-manrope font-semibold text-sm hover:translate-x-1 transition-transform active:scale-95 duration-200 shadow-sm">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      
      <main className="pt-24 min-h-screen pb-12">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Project Context (Asymmetric Layout) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl">
              <img 
                alt="Modern geometric illustration of community members collaborating with abstract blue glowing blockchain nodes in the background" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUqHnwWDEEqP-ffc5BKLCbWIB9cuot6TGG8hcRSl6jRplHhfbpzXzPF7S2GSto-Vj9IXy8fd28ytsBnhADWHAtBGAOOWwgv_Ab1EDAIPvn6lUGPQYPv48AxkbWywu12hhn4rM1EA9lHdHS96dorJkaTgiMgUzarw-O-uwdE33f8NVNqaL3wAxFZvp6iU1bhrx8vuJPAe5Qc7Q-SveuB-yswcijrqxBEqw2K5jOmwyvTvNnh8mr9_FuoWVX82rcUCXJSkX1SMKlO5o"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Verified Project</span>
                <h1 className="font-headline text-4xl font-extrabold text-white tracking-tight leading-tight">Global Clean Water Initiative</h1>
                <p className="text-white/80 max-w-lg mt-2 font-body">Leveraging Stellar's immutability to provide transparent funding for sustainable filtration systems across South Asia.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-1">Impact Radius</p>
                <p className="font-headline text-2xl font-bold text-on-surface">12 Villages</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-1">Funded via XLM</p>
                <p className="font-headline text-2xl font-bold text-on-surface">840K+</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-2xl">
                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-1">Trust Score</p>
                <p className="font-headline text-2xl font-bold text-secondary">99.8%</p>
              </div>
            </div>
          </div>
          
          {/* Right Side: Donation Flow Container */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10 sticky top-28">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-headline text-xl font-extrabold">Confirm Donation</h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Live Network</span>
                </div>
              </div>
              
              {/* Payment Confirmation View */}
              {step === 'confirm' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">You are sending</label>
                    <div className="bg-surface-container-low p-5 rounded-2xl flex justify-between items-center">
                      <div>
                        <p className="font-headline text-3xl font-black">5,000.00</p>
                        <p className="text-on-surface-variant text-sm font-medium">XLM (Stellar Lumens)</p>
                      </div>
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">rocket_launch</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">Recipient</span>
                      <span className="font-headline font-bold text-sm bg-secondary-container/30 px-3 py-1 rounded-lg text-on-secondary-container">G...8XW2 (CleanWater DAO)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">Network Fee</span>
                      <span className="font-headline font-bold text-sm">0.00001 XLM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant text-sm">Impact Allocation</span>
                      <span className="font-headline font-bold text-sm text-secondary">98% to Project</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button 
                      className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                      onClick={() => setStep('success')}
                    >
                      Confirm & Send
                    </button>
                    <p className="text-center text-[10px] text-on-surface-variant mt-4 px-8 leading-relaxed">
                      By confirming, you authorize this transaction on the Stellar Network. All donations are immutable and tax-deductible via the AidBridge framework.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Success Screen */}
              {step === 'success' && (
                <div className="text-center py-6">
                  <div className="relative w-32 h-32 mx-auto mb-10">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full scale-125"></div>
                    <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping"></div>
                    <div className="relative z-10 w-full h-full bg-secondary rounded-full flex items-center justify-center shadow-2xl shadow-secondary/40">
                      <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
                    </div>
                    <div className="absolute -top-4 -left-4 w-6 h-6 bg-secondary-container rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -right-8 w-4 h-4 bg-primary-container rounded-full"></div>
                    <div className="absolute top-10 -right-12 w-8 h-2 bg-tertiary rounded-full rotate-45"></div>
                  </div>
                  <h2 className="font-headline text-5xl font-black text-on-surface mb-4 tracking-tighter">Impact Confirmed</h2>
                  <p className="text-on-surface-variant text-lg max-w-sm mx-auto mb-10">Your contribution of <span className="text-on-surface font-bold">5,000.00 XLM</span> is now traveling through the Stellar Network.</p>
                  <div className="bg-surface-container-low rounded-3xl p-8 mb-10 text-left">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                        <span className="text-sm font-medium text-on-surface-variant">Transaction Hash</span>
                        <div className="flex items-center gap-2">
                          <code className="text-xs font-mono bg-surface-container-highest px-3 py-1.5 rounded-lg">4f9d...2e1a</code>
                          <button className="text-primary"><span className="material-symbols-outlined text-sm">content_copy</span></button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-on-surface-variant">Ledger Time</span>
                        <span className="text-sm font-bold">Now (Sequenced)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-headline font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform" href="#">
                      <span className="material-symbols-outlined">open_in_new</span>
                      View on Blockchain
                    </a>
                    <Link href="/volunteer/rewards">
                      <button className="px-8 py-4 bg-surface-container-highest text-on-surface rounded-2xl font-headline font-bold hover:bg-surface-container-high transition-colors">
                        Back to Dashboard
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Modal Overlay: Wallet Connection */}
      {showWalletModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-on-background/20 backdrop-blur-md">
          <div className="w-full max-w-md bg-surface-container-lowest rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="p-8 text-center border-b border-outline-variant/10">
              <div className="w-20 h-20 bg-primary-container rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-inner">
                <span className="material-symbols-outlined text-primary text-4xl">account_balance_wallet</span>
              </div>
              <h3 className="font-headline text-2xl font-extrabold text-on-surface">Connect Wallet</h3>
              <p className="text-on-surface-variant mt-2 text-sm">Select your preferred Stellar gateway</p>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-left group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <img 
                    alt="Stylized ship steering wheel icon in deep blue" 
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWK6djiEa68Az1-CqeOQmlB_lUH9kqWL-eSkkvk_3qLdyxD59H49C8QN7quXmxiImNBC1DhHYl01wkbcNZx502lvEi_kXyvkgFzkn4dtfSWBEhytZYW1yzYQ3eeRLeF5D0F87nZF3OqA6Nr9TnrRv3ihwRSnxJgB4aL-7j4LvmecsR36SUQp7PNDZMfT1HjuYJj3B46jJ-L_Fa7DfICEhwMNIesLZCmGltC5RVYqvi2tQA3BgPxEOL_L7U3Dy-llafl12O9ptdzT8"
                  />
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Freighter</p>
                  <p className="text-xs text-on-surface-variant">Browser Extension</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-left group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-blue-600">qr_code_2</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">WalletConnect</p>
                  <p className="text-xs text-on-surface-variant">Scan from mobile app</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-left group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-slate-800">key</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Ledger Hardware</p>
                  <p className="text-xs text-on-surface-variant">USB / Bluetooth</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
              </button>
            </div>
            <div className="px-8 pb-8">
              <button 
                className="w-full py-3 text-on-surface-variant font-headline font-semibold text-sm hover:text-on-surface transition-colors"
                onClick={() => setShowWalletModal(false)}
              >
                Cancel Connection
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
