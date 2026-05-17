export type AssetIconProps = {
  src: string;
  size?: number;
  className?: string;
};

export function AssetIcon({
  src,
  size = 24,
  className,
}: AssetIconProps) {
  return (
    <span
      aria-hidden
      className={`asset-icon-mask inline-block shrink-0 bg-current ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
      }}
    />
  );
}
