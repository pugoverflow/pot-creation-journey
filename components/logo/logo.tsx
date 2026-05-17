import Image from "next/image";

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
                    ? "/full-logo-light.svg"
                    : "/full-logo-no-strap.svg"
            }
            alt="Collctiv"
            width={width}
            height={height}
            priority
        />
    );
}