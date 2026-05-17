import { Mail, QrCode } from "lucide-react";
import type { ComponentType } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  type SocialIconProps,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons/social-icons";

type Social = {
  id: string;
  label: string;
  icon: ComponentType<SocialIconProps>;
};

export const socials: Social[] = [
  {
    id: "email",
    label: "Email",
    icon: Mail,
  },
  {
    id: "qr-code",
    label: "QR code",
    icon: QrCode,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    id: "x",
    label: "X",
    icon: XIcon,
  },
];
