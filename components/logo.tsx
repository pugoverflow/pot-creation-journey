import Image from "next/image";

type LogoProps = {
    isLight?: boolean;
};

export function Logo({
    isLight = false,
}: LogoProps) {
    return (
        <Image
            src={
                isLight
                    ? "/full-logo-light.svg"
                    : "/full-logo-no-strap.svg"
            }
            alt="Collctiv"
            width={241}
            height={50}
            priority
        />
    );
}