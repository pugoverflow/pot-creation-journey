import { Mail, QrCode } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons/social-icons";
import type { Social } from "@/types/socials";

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
