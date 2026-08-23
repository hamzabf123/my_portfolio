interface ProjectImageProps {
  src: string;
  alt: string;
  /** Kept for call-site compatibility with the former responsive image component. */
  sizes: string;
  className?: string;
  priority?: boolean;
  /**
   * Screenshots run from 1.33:1 to 2.1:1. "contain" shows the whole frame
   * inside a padded panel; "cover" crops to fill. Default is "contain" so a
   * dashboard never loses its sidebar to a hard-coded aspect ratio.
   */
  fit?: "contain" | "cover";
}

/**
 * Fill-mode project image. The parent must be positioned and carry the aspect
 * ratio; any padding on it is respected, because `fill` resolves against the
 * padding box. Placeholder artwork is authored as SVG, which the image
 * optimizer cannot process — those are served as-is.
 */
export default function ProjectImage({
  src,
  alt,
  sizes,
  className = "",
  priority = false,
  fit = "contain",
}: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`absolute inset-0 h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
