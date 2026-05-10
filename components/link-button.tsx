import type { AnchorHTMLAttributes } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "quiet";
};

const variants = {
  primary:
    "border-accent bg-accent text-white hover:border-foreground hover:bg-foreground dark:text-background",
  secondary:
    "border-line bg-panel text-foreground hover:border-accent hover:text-accent",
  quiet:
    "border-transparent bg-transparent text-foreground hover:border-line hover:bg-panel",
};

export function LinkButton({
  className = "",
  variant = "primary",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={[
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
