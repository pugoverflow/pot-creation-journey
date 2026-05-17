import { assets } from "@/lib/assets";

import { AssetIcon, type AssetIconProps } from "./asset-icon";

export type SocialIconProps = Omit<AssetIconProps, "src">;

export function FacebookIcon(props: SocialIconProps) {
  return (
    <AssetIcon
      src={assets.icons.social.facebook}
      {...props}
    />
  );
}

export function InstagramIcon(props: SocialIconProps) {
  return (
    <AssetIcon
      src={assets.icons.social.instagram}
      {...props}
    />
  );
}

export function WhatsAppIcon(props: SocialIconProps) {
  return (
    <AssetIcon
      src={assets.icons.social.whatsapp}
      {...props}
    />
  );
}

export function XIcon(props: SocialIconProps) {
  return (
    <AssetIcon src={assets.icons.social.x} {...props} />
  );
}
