import { assets } from "@/lib/assets";

import { AssetIcon, type AssetIconProps } from "./asset-icon";

export type SocialIconProps = Omit<AssetIconProps, "src">;

export function FacebookIcon(props: SocialIconProps) {
  return <AssetIcon src={assets.thirdParty.facebook} {...props} />;
}

export function InstagramIcon(props: SocialIconProps) {
  return <AssetIcon src={assets.thirdParty.instagram} {...props} />;
}

export function WhatsAppIcon(props: SocialIconProps) {
  return <AssetIcon src={assets.thirdParty.whatsapp} {...props} />;
}

export function XIcon(props: SocialIconProps) {
  return <AssetIcon src={assets.thirdParty.x} {...props} />;
}
