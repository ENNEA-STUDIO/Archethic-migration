import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

export const wormholeConfig: WormholeConnectConfig = {
  env: "mainnet",
  networks: ["polygon", "bsc", "ethereum"],
  // pageHeader: "UCO Bridge",
  rpcs: {
    ethereum:
      "https://eth-mainnet.alchemyapi.io/v2/xMdbzVgHW9-4yF1RoFbeWkjSX72lH9zB",
    polygon:
      "https://polygon-mainnet.g.alchemy.com/v2/xMdbzVgHW9-4yF1RoFbeWkjSX72lH9zB",
    bsc: "https://bsc-dataseed.bnbchain.org",
  },
  route: ["nttManual"],
  tokens: ["UCOEthereum", "UCOBsc", "UCOPolygon"],
  bridgeDefaults: {
    fromNetwork: "ethereum",
    toNetwork: "polygon",
    token: "UCOEthereum",
  },
  walletConnectProjectId: "9574f4b26c628d89c80e5f0a8026868c",
  tokensConfig: {
    UCOEthereum: {
      key: "UCOEthereum",
      symbol: "UCO",
      nativeChain: "ethereum",
      tokenId: {
        chain: "ethereum",
        address: "0x1A688D3d294ee7BcC1f59011DE93d608Dc21c377",
      },
      coinGeckoId: "archethic",
      icon: "https://assets.coingecko.com/coins/images/12330/standard/Archethic_Logo.png?1719358185",
      color: "#ee2828",
      decimals: {
        default: 8,
      },
      foreignAssets: {
        bsc: {
          address: "0xf1e5bbd997501a8439619266A09a54b2b499eAA3",
          decimals: 8,
        },
        polygon: {
          address: "0xaa53B93608C88EE55fAD8db4C504Fa20E52642aD",
          decimals: 8,
        },
      },
    },
    UCOBsc: {
      key: "UCOBsc",
      symbol: "UCO",
      nativeChain: "bsc",
      tokenId: {
        chain: "bsc",
        address: "0xf1e5bbd997501a8439619266A09a54b2b499eAA3",
      },
      coinGeckoId: "archethic",
      icon: "https://assets.coingecko.com/coins/images/12330/standard/Archethic_Logo.png?1719358185",
      color: "#2894EE",
      decimals: {
        default: 8,
      },

      // foreignAssets: {
      //   ethereum: {
      //     address: "0x1A688D3d294ee7BcC1f59011DE93d608Dc21c377",
      //     decimals: 8,
      //   },
      //   polygon: {
      //     address: "0xaa53B93608C88EE55fAD8db4C504Fa20E52642aD",
      //     decimals: 8,
      //   },
      // },
    },
    UCOPolygon: {
      key: "UCOPolygon",
      symbol: "UCO",
      nativeChain: "polygon",
      tokenId: {
        chain: "polygon",
        address: "0xaa53B93608C88EE55fAD8db4C504Fa20E52642aD",
      },
      coinGeckoId: "archethic",
      icon: "https://assets.coingecko.com/coins/images/12330/standard/Archethic_Logo.png?1719358185",
      color: "#2894EE",
      decimals: {
        default: 8,
      },
      // foreignAssets: {
      //   bsc: {
      //     address: "0xf1e5bbd997501a8439619266A09a54b2b499eAA3",
      //     decimals: 8,
      //   },
      //   ethereum: {
      //     address: "0x1A688D3d294ee7BcC1f59011DE93d608Dc21c377",
      //     decimals: 8,
      //   },
      // },
    },
  },
  nttGroups: {
    UCO: {
      nttManagers: [
        {
          address: "0xB16Bf54398A913799D537C0c472394AeA4Fb8EfC",
          chainName: "ethereum",
          tokenKey: "UCOEthereum",
          transceivers: [
            {
              address: "0xC8d43BA20c6CE5F3dB8bF66F547940D422225b7c",
              type: "wormhole",
            },
          ],
        },
        {
          address: "0x01c07123229a583168536E2061A461602F0C1f79",
          chainName: "bsc",
          tokenKey: "UCOBsc",
          transceivers: [
            {
              address: "0x6B13D454b86e32d2C0eda1738c56327e28b1784F",
              type: "wormhole",
            },
          ],
        },
        {
          address: "0x7BD106409a543B8Ca77Ef618754aA9c913B89011",
          chainName: "polygon",
          tokenKey: "UCOPolygon",
          transceivers: [
            {
              address: "0x5183A428785f7d6aF139C7E68962FE203Cb141Dd",
              type: "wormhole",
            },
          ],
        },
      ],
    },
  },
};

export const theme = {
  mode: "dark",
  primary: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  secondary: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#eeeeee",
    "300": "#e0e0e0",
    "400": "#bdbdbd",
    "500": "#9e9e9e",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  divider: "#ffffff33",
  background: { default: "rgba(255, 255, 255, 0)" },
  text: {
    primary: "rgba(255, 255, 255, 0.8)",
    secondary: "rgba(255, 255, 255, 0.8)",
  },
  error: {
    "50": "#ffebee",
    "100": "#ffcdd2",
    "200": "#ef9a9a",
    "300": "#e57373",
    "400": "#ef5350",
    "500": "#f44336",
    "600": "#e53935",
    "700": "#d32f2f",
    "800": "#c62828",
    "900": "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  info: {
    "50": "#97a5b7",
    "100": "#8293a9",
    "200": "#6e819a",
    "300": "#596f8c",
    "400": "#445d7e",
    "500": "#304C70",
    "600": "#2b4464",
    "700": "#263c59",
    "800": "#21354e",
    "900": "#1c2d43",
    A100: "#304C70",
    A200: "#304C70",
    A400: "#304C70",
    A700: "#304C70",
  },
  success: {
    "50": "#66d6cd",
    "100": "#4dcfc4",
    "200": "#33c8bc",
    "300": "#1ac1b4",
    "400": "#01BBAC",
    "500": "#00a89a",
    "600": "#009589",
    "700": "#008278",
    "800": "#007067",
    "900": "#005d56",
    A100: "#00a89a",
    A200: "#00a89a",
    A400: "#00a89a",
    A700: "#00a89a",
  },
  warning: {
    "50": "#ffe3a4",
    "100": "#ffdd91",
    "200": "#ffd77f",
    "300": "#ffd26d",
    "400": "#ffcc5b",
    "500": "#FFC749",
    "600": "#e5b341",
    "700": "#cc9f3a",
    "800": "#b28b33",
    "900": "#99772b",
    A100: "#FFC749",
    A200: "#FFC749",
    A400: "#FFC749",
    A700: "#FFC749",
  },
  button: {
    primary: "rgba(110, 73, 216, 0.72)",
    primaryText: "#ffffff",
    disabled: "#ffffff0F",
    disabledText: "#ffffff66",
    action: "rgba(65, 45, 129, 1)",
    actionText: "rgba(255, 255, 255, 0.8)",
    hover: "#ffffff0F",
  },
  options: { hover: "#ffffff0F", select: "#ffffff19" },
  card: {
    background: "rgba(84, 63, 191, 0.37)",
    secondary: "#ffffff0C",
    elevation: "none",
  },
  popover: { background: "#1b2033", secondary: "#ffffff0C", elevation: "none" },
  modal: { background: "rgba(15, 15, 46, 1)" },
  font: {
    primary: '"Inter", sans-serif',
    header: '"IBM Plex Mono", monospace',
  },
};
