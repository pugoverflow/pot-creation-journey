import type { ComponentType } from "react";

import type { SocialIconProps } from "@/components/icons/social-icons";

export type SocialId =
  | "email"
  | "qr-code"
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "x";

export type Social = {
  id: SocialId;
  label: string;
  icon: ComponentType<SocialIconProps>;
};
