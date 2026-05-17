import Image from "next/image";

import { assets } from "@/lib/assets";

const LOGO_WIDTH = 241;
const LOGO_HEIGHT = 50;

type LogoProps = {
  isLight?: boolean;
  height?: number;
  priority?: boolean;
};

export function Logo({
  isLight = false,
  height = LOGO_HEIGHT,
  priority = false,
}: LogoProps) {
  const width = Math.round(
    (LOGO_WIDTH / LOGO_HEIGHT) * height
  );

  return (
    <Image
      src={
        isLight
          ? assets.brand.fullLogoLight
          : assets.brand.fullLogoNoStrap
      }
      alt="Collctiv"
      width={width}
      height={height}
      className="h-auto w-auto"
      priority={priority}
    />
  );
}
