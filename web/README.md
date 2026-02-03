# Web Application (Next.js + Wagmi + SIWE)

This is the frontend web application for the NFT token-gated dashboard project.  
It is built with **Next.js 16**, **Tailwind CSS**, and **Wagmi + Ethers.js** for Web3 interactions.

The app allows users to:
- Connect their Ethereum wallet (WalletConnect, MetaMask, etc.)
- Sign in with **Ethereum** (SIWE + NextAuth)
- Check NFT ownership
- Mint NFTs if they don’t already own one
- Access token-gated dashboard content

---

## 🛠 Tech Stack

- Next.js 16 
- React 19
- Tailwind CSS
- Wagmi v3 (Ethereum connectors)
- Ethers.js
- NextAuth.js (SIWE)
- Sepolia Testnet
- Alchemy RPC

---

## 📦 Installation

```bash
npm install
```

---

## 🔐 Environment Variables

- NEXT_WALLETCONNECT_PROJECT_ID=YOUR_WALLETCONNECT_PROJECT_ID
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
- NEXT_PUBLIC_NFT_ADDRESS=YOUR_NFT_CONTRACT_ADDRESS
- NEXT_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY

---

## 🔑 Features

- Wallet connection

- SIWE login: Secure Sign-in with Ethereum

- NFT ownership check: Show/hide dashboard content

- Mint NFT button: Buy access if not owned

- Dashboard panel: Display wallet info, NFT stats, and ETH balance

