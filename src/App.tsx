import "./globals.css";
import Migration from "../components/migration.tsx";
import RootLayout from "../components/layout.tsx";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../config/wagmi/config.ts";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Route, Routes } from "react-router-dom";
import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import { wormholeConfig } from "../config/wormhole.ts";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Routes>
            <Route path={"/"} element={<RootLayout />}>
              <Route index element={<Migration />} />
              <Route
                path={"/bridge"}
                element={<WormholeConnect config={wormholeConfig} />}
              />
            </Route>
          </Routes>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
