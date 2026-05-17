import type { HTMLMotionProps } from "motion/react";

export const subtleTransition = {
  duration: 0.28,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export const stepEnter = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: subtleTransition,
};

export function isDialogVisible(open: boolean, transitionStatus?: string) {
  return open && transitionStatus !== "ending";
}

export function asMotionDivProps(props: object): HTMLMotionProps<"div"> {
  return props as HTMLMotionProps<"div">;
}
