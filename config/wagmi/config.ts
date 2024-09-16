import { bsc, bscTestnet, mainnet, polygon } from "wagmi/chains";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { polygonAmoy, sepolia } from "viem/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, walletConnectWallet, walletConnectWallet],
    },
  ],
  {
    appName: "Archethic token Migration",
    projectId: "4b5d58479270f9ee951a544893a2bdc7",
  },
);

export const config = createConfig({
  chains: [mainnet, bsc, polygon, sepolia, polygonAmoy, bscTestnet],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
    [polygonAmoy.id]: http(),
    [bscTestnet.id]: http(),
  },
});
