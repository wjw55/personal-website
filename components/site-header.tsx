import { navItems, profile } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-background/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-10">
        <a
          href="#home"
          className="group inline-flex shrink-0 items-center gap-3 rounded-sm text-sm font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Go to homepage"
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_5px_rgb(var(--accent)_/_0.14)] transition group-hover:bg-accent-warm"
            aria-hidden="true"
          />
          {profile.name}
        </a>
        <nav
          aria-label="Primary navigation"
          className="w-full max-w-full overflow-x-auto sm:w-auto"
        >
          <ul className="flex min-w-max items-center gap-1 sm:min-w-0 sm:flex-wrap">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  download={item.label === "Resume" ? true : undefined}
                  aria-label={
                    item.label === "Resume"
                      ? "Download Wang Jiawei's resume"
                      : undefined
                  }
                  className="group relative block rounded-full px-3 py-2 text-xs font-semibold text-muted transition duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
