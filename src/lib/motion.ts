/**
 * Shared motion contract.
 *
 * Everything scroll-driven on this site resolves to one of three tiers, decided
 * once in ScrollProvider and read everywhere else. Components never sniff
 * `window.innerWidth` themselves — they ask for the tier.
 */

export type MotionTier = "full" | "lite" | "static";

/** Desktop, motion allowed: pins, scrubs, parallax, cursor effects. */
export const TIER_FULL = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/** Touch/small screens: reveals and scrubs only. Never pin — see §7 of the brief. */
export const TIER_LITE = "(max-width: 1023px) and (prefers-reduced-motion: no-preference)";

/** Reduced motion: the complete site, static. Not a degraded one. */
export const TIER_STATIC = "(prefers-reduced-motion: reduce)";

/**
 * Data Saver is treated as a reduced-motion signal. Not in the type because it
 * is not a media query — ScrollProvider folds it into the static tier.
 */
export function prefersSaveData(): boolean {
  if (typeof navigator === "undefined") return false;

  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;

  return connection?.saveData === true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(TIER_STATIC).matches;
}

/**
 * Older machines suffer more from continuous compositing than from static
 * layouts. Treat modest memory/CPU as a signal to keep the finished design
 * without creating the GSAP scroll engine at all.
 */
export function prefersLowPowerMode(): boolean {
  if (typeof navigator === "undefined") return false;

  const device = navigator as Navigator & {
    deviceMemory?: number;
    hardwareConcurrency?: number;
  };

  return (
    (typeof device.deviceMemory === "number" && device.deviceMemory <= 4) ||
    (typeof device.hardwareConcurrency === "number" && device.hardwareConcurrency <= 4)
  );
}

/** True when animation should be skipped entirely and final state applied. */
export function isStaticTier(): boolean {
  return prefersReducedMotion() || prefersSaveData() || prefersLowPowerMode();
}

/** Standard scrub smoothing. `true` reads stepped; 1s catch-up reads intentional. */
export const SCRUB = 1;
