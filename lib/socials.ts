import type { LucideIcon } from "lucide-react";

import {

    Mail,
    MessageCircle,
    QrCode,
} from "lucide-react";

type Social = {
    id: string;
    label: string;
    icon: LucideIcon;
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
        icon: MessageCircle,
    },
    {
        id: "facebook",
        label: "Facebook",
        icon: MessageCircle,
    },
    {
        id: "instagram",
        label: "Instagram",
        icon: MessageCircle,
    },
    {
        id: "x",
        label: "X",
        icon: MessageCircle,
    },
];