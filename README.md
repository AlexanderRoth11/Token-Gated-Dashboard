# NFT Token-Gated Dashboard

This repository contains a full-stack **Web3 application** that demonstrates NFT-based access control using Ethereum.

The project consists of:
- **Smart contracts** built and deployed with Hardhat
- **Web application** built with Next.js, Wagmi, and SIWE

Users can connect their wallet, sign in with Ethereum, mint an NFT, and access token-gated content.

---

## 🧱 Project Structure

```
/
├─ contracts/   # Solidity smart contracts (Hardhat)
└─ web/         # Next.js web application
```


---

## 🔐 Core Features

- ERC-721 NFT used for access control
- Sepolia testnet deployment
- Wallet connection (MetaMask, WalletConnect)
- Sign-In with Ethereum (SIWE + NextAuth)
- Server-side NFT ownership checks
- NFT minting from the web UI
- Token-gated dashboard content

---

## 🛠 Tech Stack

- Solidity + Hardhat
- Next.js 16
- Wagmi v3
- Ethers.js
- NextAuth (SIWE)
- Tailwind CSS
- Alchemy RPC
- Sepolia Testnet

---

## 🚀 Getting Started

Each sub-project contains its own README with setup instructions:

- [`/contracts`](./contracts) — smart contracts and deployment
- [`/web`](./web) — frontend application

