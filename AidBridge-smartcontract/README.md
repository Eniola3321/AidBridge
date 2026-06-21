# 🌍  AidBridge  — Decentralized Donation & Impact Protocol

A production-ready, blockchain-powered platform for transparent NGO funding, built on the Stellar network, with verifiable impact, decentralized incentives, and on-chain accountability.

---

## 📌 Overview

 AidBridge  combines Web2 usability with true Web3 decentralization to create a trust-first global donation infrastructure.

Donors send funds directly to NGOs using Stellar (XLM), with every transaction recorded on-chain. Volunteers contribute to real-world impact and receive verifiable rewards in the form of tokens and NFTs. The system is designed to eliminate opacity, reduce fraud, and build global trust in charitable giving.

---

## 🚀 Core Features

### 💸 On-Chain Donations

- Direct wallet-to-wallet donations using Stellar (XLM)
- Instant settlement with ultra-low fees
- Public, verifiable transaction records
- Optional escrow-based donations via smart contracts

### 🏢 NGO Infrastructure

- Verified NGO onboarding system
- Unique Stellar wallet per NGO
- Public funding dashboards
- Campaign-based fundraising

### 🙋 Decentralized Volunteer System

- Task-based contribution model
- Proof-of-work (task submission + validation)
- Reputation scoring system

### 🎁 Tokenized Incentives

- Reward tokens issued on Stellar
- NFT badges as proof of impact
- On-chain reputation tracking

### 🔍 Transparency & Trust Layer

- Public transaction explorer integration
- Real-time donation tracking
- Open financial audit trail

---

## 🌐 What Makes It Truly Decentralized

To move beyond “Web2 + crypto” into real decentralization:

- Smart contract-based fund release using Soroban
- On-chain reward distribution (no manual backend control)
- DAO-style governance (future phase)
- IPFS storage for metadata (NFTs, reports)
- Open-source verification of all logic

---

## 🧱 Tech Stack (TypeScript-Based)

### Frontend

- Next.js (TypeScript)
- Tailwind CSS

### Backend

- Node.js (Express)
- TypeScript

### Blockchain

- Stellar SDK
- Horizon API
- Soroban (Smart Contracts)

### Storage

- PostgreSQL
- IPFS (decentralized metadata)

---

## 🏗️ System Architecture

1. User connects wallet (Freighter)
2. Donor sends payment via Stellar
3. Transaction is recorded on-chain
4. Backend verifies via Horizon API
5. Smart contract (optional) enforces rules
6. NGO receives or unlocks funds
7. Volunteers complete tasks
8. Rewards issued (tokens/NFTs)

---

## 🔐 Security & Production Readiness

- No private key storage
- Server-side transaction verification
- Rate limiting and validation
- Secure wallet-based authentication
- Smart contract audits (recommended)
- Environment-based configuration
- Logging and monitoring (Winston / Sentry)

---

## 📂 Project Structure

```
/frontend
  /components
  /pages
  /hooks
  /utils

/backend
  /src
    /controllers
    /routes
    /services
    /config
    /models

/blockchain
  /contracts (Soroban smart contracts)
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js
- PostgreSQL
- Rust (for Soroban)

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### Backend (TypeScript)

```bash
cd backend
npm install
npm run dev
```

---

### Smart Contracts (Soroban)

```bash
soroban contract init contracts
cd contracts
soroban contract build
```

---

## 🔗 Stellar Integration (TypeScript)

```ts
import {
  Server,
  TransactionBuilder,
  Networks,
  Operation,
  Asset,
} from "stellar-sdk";

const server = new Server("https://horizon.stellar.org");

const tx = new TransactionBuilder(account, {
  fee: "100",
  networkPassphrase: Networks.PUBLIC,
})
  .addOperation(
    Operation.payment({
      destination: NGO_PUBLIC_KEY,
      asset: Asset.native(),
      amount: "10",
    }),
  )
  .setTimeout(30)
  .build();
```

---

## 🎯 Production-Ready Improvements

To attract investors and ecosystem support:

- Multi-NGO campaign system
- On-chain escrow donations
- Analytics dashboard (impact metrics)
- Identity verification (NGOs)
- Audit logs and reporting
- Mobile-first optimization

---

## 📊 Future Roadmap

- DAO governance for fund allocation
- Cross-border donation optimization
- AI-based fraud detection
- Multi-chain support (long-term)

---

## 🤝 Contribution Guide

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Submit a pull request

---

## 📄 License

MIT License

---

## 💡 Vision

To become the global standard for transparent, decentralized charitable giving, powered by Stellar.

---

## 🙌 Acknowledgements

- Stellar ecosystem
- Open-source contributors

---

## 📬 Contact

For collaboration, partnerships, or grants, reach out via GitHub issues.
