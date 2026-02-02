import { http, createConfig } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_WALLETCONNECT_PROJECT_ID;

export function getConfig() {
  return createConfig({
    chains: [mainnet, base],
    connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
    },
  });
}
