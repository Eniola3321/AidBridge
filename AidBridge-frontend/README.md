# 🎨   AidBridge Frontend

 AidBridge is a decentralized donation platform built on Stellar. This interface enables users to donate to NGOs, track transactions transparently, and participate in volunteer activities with reward incentives.

---

## 📌 Overview

 AidBridge  frontend delivers a simple and accessible user experience for interacting with blockchain-powered donations.

Users can:

- Connect their Stellar wallet
- Donate to verified NGOs
- View real-time transaction status
- Track impact and contributions
- Participate in volunteer tasks and earn rewards

The design prioritizes clarity, trust, and ease of use, especially for users new to Web3.

---

## ⚙️ Tech Stack

- Next.js (TypeScript)
- Tailwind CSS
- Stellar Wallet Integration (Freighter)
- Fetch API

---

## 🚀 Core Features

### 💸 Donation Interface

- Select NGO and input donation amount
- Initiate Stellar (XLM) transactions
- Display transaction confirmation and status

### 🔗 Wallet Integration

- Connect via Freighter wallet
- Secure transaction signing
- No private key storage

### 🏢 NGO Explorer

- Browse NGO profiles
- View mission, funding progress, and donation stats

### 🙋 Volunteer Dashboard

- View available tasks
- Submit task completion
- Track earned rewards

### 🎁 Rewards & NFTs

- View earned badges (NFTs)
- Display contribution history

---

## 📂 Project Structure

/components → Reusable UI components
/pages → Application routes
/hooks → Custom React hooks
/utils → Helper functions
/services → API and blockchain interactions
/styles → Global styles

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18 or later)
- npm

---

### Install dependencies

```bash
npm install
Run development server
npm run dev
Build for production
npm run build
npm start
🔗 Wallet Integration (Freighter)
The application integrates with Freighter for Stellar transactions:

Connect wallet via browser extension

Retrieve public key

Sign transactions securely

Make sure Freighter is installed:
https://www.freighter.app/

🌐 Environment Variables
Create a .env.local file:

NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STELLAR_NETWORK=PUBLIC
🎨 UI/UX Principles
Clean and minimal interface

Clear transaction feedback (loading, success, error)

Accessible for non-crypto users

Responsive design (mobile-first)

⚠️ Known Limitations
Requires Freighter wallet for full functionality

Limited offline support

NFT display depends on metadata availability

📊 Future Improvements
Multi-wallet support (LOBSTR, WalletConnect)

Real-time notifications

Improved onboarding for new users

Dark mode support

🤝 Contribution
Fork the repository

Create a new branch

Commit your changes

Submit a pull request

📄 License
MIT License

💡 Notes
This frontend is designed to work alongside:

A Node.js backend (API layer)

Stellar blockchain (payments)

Soroban smart contracts (future logic)
```
