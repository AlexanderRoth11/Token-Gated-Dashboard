# Smart Contracts (Hardhat)

This folder contains the Ethereum smart contracts for the project, built and deployed using **Hardhat**.

The contracts power an **ERC-721 NFT** used for token-gated access in the web application.  
Users must own the NFT to unlock protected content in the frontend.

---

## 🛠 Tech Stack

- Solidity
- Hardhat
- Ethers.js
- OpenZeppelin Contracts
- Sepolia Testnet
- Alchemy RPC
- Etherscan Verification

---

## 📦 Installation

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables
Create a .env file in the contracts directory:
- API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
- PRIVATE_KEY=YOUR_TEST_WALLET_PRIVATE_KEY
- ETHERSCAN_KEY=YOUR_ETHERSCAN_API_KEY


---

## 🧪 Compile contracts

```bash
npx hardhat compile
```

---

## 🚀 Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.ts --network sepolia

```
