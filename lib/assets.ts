const ASSETS_BASE = "/assets";

export const assets = {
  logos: {
    light: `${ASSETS_BASE}/brand/full-logo-light.svg`,
    default: `${ASSETS_BASE}/brand/full-logo-no-strap.svg`,
  },
  icons: {
    apple: `${ASSETS_BASE}/third-party/apple.svg`,
    social: {
      facebook: `${ASSETS_BASE}/third-party/facebook.svg`,
      instagram: `${ASSETS_BASE}/third-party/instagram.svg`,
      whatsapp: `${ASSETS_BASE}/third-party/whatsapp.svg`,
      x: `${ASSETS_BASE}/third-party/x.svg`,
    },
  },
} as const;
