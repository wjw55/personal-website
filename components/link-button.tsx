import type { AnchorHTMLAttributes } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "quiet";
};

const variants = {
  primary:
    "border-accent bg-accent text-white shadow-[0_14px_35px_rgb(var(--accent)_/_0.22)] hover:border-foreground hover:bg-foreground dark:text-background",
  secondary:
    "border-line bg-panel/90 text-foreground hover:border-accent hover:bg-background hover:text-accent",
  quiet:
    "border-transparent bg-transparent text-foreground hover:border-line hover:bg-panel/80",
};

export function LinkButton({
  className = "",
  variant = "primary",
  children,
  href,
  target,
  rel,
  ...props
}: LinkButtonProps) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      className={[
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:whitespace-nowrap",
        variants[variant],
        className,
      ].join(" ")}
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      {...props}
    >
      {children}
    </a>
  );
}
