import Image from "next/image";

import { assets } from "@/lib/assets";

const LOGO_WIDTH = 241;
const LOGO_HEIGHT = 50;

type LogoProps = {
    isLight?: boolean;
    height?: number;
};

export function Logo({
    isLight = false,
    height = LOGO_HEIGHT,
}: LogoProps) {
    const width = Math.round(
        (LOGO_WIDTH / LOGO_HEIGHT) * height
    );

    return (
        <Image
            src={
                isLight
                    ? assets.logos.light
                    : assets.logos.default
            }
            alt="Collctiv"
            width={width}
            height={height}
            priority
        />
    );
}