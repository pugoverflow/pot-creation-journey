/**
 * Public URLs for static files in `assets/` (served at `/assets/*` via `public/assets`).
 */
const ROOT = "/assets";

function assetUrl(...pathSegments: string[]): string {
  return [ROOT, ...pathSegments].join("/");
}

const brand = {
  cheerleader: assetUrl("brand", "cheerleader.jpg"),
  fullLogoLight: assetUrl("brand", "full-logo-light.svg"),
  fullLogoNoStrap: assetUrl("brand", "full-logo-no-strap.svg"),
} as const;

const thirdParty = {
  apple: assetUrl("third-party", "apple.svg"),
  facebook: assetUrl("third-party", "facebook.svg"),
  instagram: assetUrl("third-party", "instagram.svg"),
  whatsapp: assetUrl("third-party", "whatsapp.svg"),
  x: assetUrl("third-party", "x.svg"),
} as const;

export const assets = { brand, thirdParty } as const;

export type Assets = typeof assets;
