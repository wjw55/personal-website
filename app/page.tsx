import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/content/site";

type Project = (typeof projects)[number];

const focusAreas = [
  "Embedded",
  "Robotics",
  "AI",
  "Workflow automation",
] as const;

function ExternalTextLink({
  href,
  children,
  ariaLabel,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={[
        "inline-flex items-center gap-1 rounded-sm font-semibold text-foreground underline decoration-accent/45 decoration-2 underline-offset-4 transition hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-panel/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
      {children}
    </span>
  );
}

function TechPills({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-panel/80 px-3 py-1 text-xs font-semibold text-foreground shadow-[0_1px_0_rgb(255_255_255_/_0.5)_inset]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      {project.links.map((link) => (
        <ExternalTextLink
          key={link.href}
          href={link.href}
          ariaLabel={link.ariaLabel}
        >
          {link.label}
          <span aria-hidden="true">-&gt;</span>
        </ExternalTextLink>
      ))}
      <span className="rounded-full border border-line bg-panel/85 px-3 py-1 text-xs font-semibold text-muted">
        {project.linkNote}
      </span>
    </div>
  );
}

function SystemPanel() {
  return (
    <aside
      aria-labelledby="system-panel-title"
      className="system-panel relative min-w-0 overflow-hidden rounded-[8px] border border-line bg-panel/88 p-5 shadow-soft backdrop-blur md:p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-75"
        aria-hidden="true"
      >
        <div className="absolute left-8 top-0 h-full w-px bg-line" />
        <div className="absolute right-12 top-8 h-28 w-px bg-accent/35" />
        <div className="absolute bottom-14 left-8 h-px w-2/3 bg-line" />
        <div className="absolute left-[1.78rem] top-20 h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_rgb(var(--accent)_/_0.12)]" />
        <div className="absolute bottom-[3.25rem] right-[2.72rem] h-2 w-2 rounded-full bg-accent-warm shadow-[0_0_0_6px_rgb(var(--accent-warm)_/_0.14)]" />
      </div>

      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          System status
        </p>
        <h2
          id="system-panel-title"
          className="mt-3 text-xl font-semibold leading-snug text-foreground"
        >
          {profile.currentStatus.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          {profile.currentStatus.description}
        </p>
      </div>

      <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
        {focusAreas.map((area) => (
          <div
            key={area}
            className="rounded-[8px] border border-line bg-background/82 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/55"
          >
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
              Focus
            </span>
            <span className="mt-2 block text-sm font-semibold text-foreground">
              {area}
            </span>
          </div>
        ))}
      </div>

      <div className="relative mt-8 rounded-[8px] border border-line bg-background/75 p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Build mode
          </span>
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_rgb(var(--accent)_/_0.14)]" />
        </div>
        <p className="mt-3 text-sm leading-6 text-foreground">
          Prototype carefully, test with constraints, and make systems easier to
          operate.
        </p>
      </div>
    </aside>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-[8px] border border-accent/25 bg-background p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-lg focus-within:border-accent md:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-warm to-accent-rose" />
      <div
        className="absolute right-0 top-0 h-44 w-44 translate-x-16 -translate-y-16 rounded-full bg-accent/10 blur-3xl transition duration-300 group-hover:bg-accent/16"
        aria-hidden="true"
      />
      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <MetaLabel>{project.category}</MetaLabel>
            <MetaLabel>{project.period}</MetaLabel>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
              Featured
            </span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {project.summary}
          </p>
          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="rounded-[8px] border border-line bg-panel/75 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-warm">
            Technical signal
          </p>
          <ul className="clean-list mt-4 space-y-3 text-sm leading-7 text-muted">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="mt-6">
            <TechPills items={project.stack} />
          </div>
        </div>
      </div>
    </article>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-h-full flex-col rounded-[8px] border border-line bg-background p-5 shadow-[0_18px_60px_rgb(15_23_42_/_0.07)] transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-soft focus-within:border-accent md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <MetaLabel>{project.category}</MetaLabel>
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
          {project.period}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
      <ul className="clean-list mt-5 space-y-2 text-sm leading-7 text-muted">
        {project.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="mt-6">
        <TechPills items={project.stack} />
      </div>
      <div className="mt-auto pt-7">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Home() {
  const featuredProject =
    projects.find((project) => project.title.startsWith("OPTIMEAL")) ??
    projects[0];
  const secondaryProjects = projects.filter(
    (project) => project.title !== featuredProject.title,
  );

  return (
    <>
      <main id="main-content">
        <section
          id="home"
          className="hero-shell relative isolate overflow-hidden border-b border-line pt-16"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto grid min-h-[calc(88svh-4rem)] w-full max-w-7xl content-start items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:px-10 lg:py-28">
            <div className="min-w-0 max-w-full">
              <p className="inline-block max-w-full break-words rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent sm:tracking-[0.18em]">
                {profile.roleLine}
              </p>
              <h1
                id="hero-title"
                className="mt-6 max-w-4xl break-words text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
              >
                {profile.name}
              </h1>
              <p className="mt-5 max-w-4xl break-words text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {profile.headline}
              </p>
              <p className="mt-6 max-w-3xl break-words text-base leading-8 text-muted md:text-lg">
                {profile.valueProposition}
              </p>
              <ul className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="#projects"
                    aria-label="View selected engineering projects"
                    className="w-full sm:w-auto"
                  >
                    View projects
                  </LinkButton>
                </li>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="#contact"
                    aria-label="Get in touch with Wang Jiawei"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Get in touch
                  </LinkButton>
                </li>
              </ul>
            </div>

            <SystemPanel />
          </div>
        </section>

        <section
          id="projects"
          className="relative overflow-hidden border-b border-line bg-panel/45 py-24 md:py-32"
          aria-labelledby="projects-title"
        >
          <div className="section-grid" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Selected work"
                title="Project case studies with real system constraints."
                intro="A tighter view of FPGA, AI web, and robotics projects, with public repositories and demos linked where they are ready to share."
                id="projects-title"
                number="01"
              />
              <p className="max-w-sm border-l border-line pl-4 text-sm leading-7 text-muted">
                Portfolio cards prioritize what was built, the engineering
                surface area, and the public proof points.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              <FeaturedProjectCard project={featuredProject} />
              <div className="grid gap-5 lg:grid-cols-2">
                {secondaryProjects.map((project) => (
                  <SecondaryProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="border-b border-line py-24 md:py-32"
          aria-labelledby="experience-title"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 md:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:px-10">
            <SectionHeading
              eyebrow="Experience"
              title="A timeline of practical systems work."
              intro="Recent roles across automation, embedded research, and team leadership, written without confidential operational details."
              id="experience-title"
              number="02"
            />
            <ol className="relative space-y-5 border-l border-line pl-5 md:pl-7">
              {experience.map((item) => (
                <li key={`${item.role}-${item.period}`} className="relative">
                  <span
                    className="absolute -left-[1.82rem] top-6 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-[0_0_0_6px_rgb(var(--accent)_/_0.12)] md:-left-[2.32rem]"
                    aria-hidden="true"
                  />
                  <article className="rounded-[8px] border border-line bg-panel/75 p-5 transition duration-200 hover:border-accent/45 hover:bg-panel md:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-muted">
                          {item.organization}
                        </p>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-warm">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-4 leading-8 text-muted">{item.summary}</p>
                    <ul className="clean-list mt-4 grid gap-2 text-sm leading-7 text-muted md:grid-cols-2">
                      {item.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className="border-b border-line bg-panel/45 py-24 md:py-32"
          aria-labelledby="about-title"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
            <SectionHeading
              eyebrow="About"
              title="Hardware curiosity with a product lens."
              intro="A personal operating style shaped by circuits, code, and the messy reality of human workflows."
              id="about-title"
              number="03"
            />
            <div className="space-y-10">
              <div className="rounded-[8px] border border-line bg-background p-6 shadow-[0_18px_60px_rgb(15_23_42_/_0.06)] md:p-7">
                <div className="space-y-5 text-base leading-8 text-foreground md:text-lg">
                  <p>{profile.about}</p>
                  <p>{profile.aboutFocus}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {skillGroups.map((group) => (
                  <section
                    key={group.title}
                    className="rounded-[8px] border border-line bg-background p-5"
                    aria-labelledby={`skills-${group.title
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("&", "and")}`}
                  >
                    <h3
                      id={`skills-${group.title
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll("&", "and")}`}
                      className="text-sm font-bold uppercase tracking-[0.14em] text-accent"
                    >
                      {group.title}
                    </h3>
                    <div className="mt-4">
                      <TechPills items={group.skills} />
                    </div>
                  </section>
                ))}
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Education
                </h3>
                <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
                  {education.map((item) => (
                    <li
                      key={`${item.degree}-${item.institution}`}
                      className="rounded-[8px] border border-line bg-background p-5"
                    >
                      <h4 className="text-base font-semibold text-foreground">
                        {item.degree}
                      </h4>
                      <p className="mt-2 text-sm font-semibold text-muted">
                        {item.institution}
                      </p>
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-accent-warm">
                        {item.period}
                      </p>
                      {item.details.length > 0 ? (
                        <div className="mt-4">
                          <TechPills items={item.details} />
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden py-24 md:py-32"
          aria-labelledby="contact-title"
        >
          <div className="section-grid" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
            <div className="rounded-[8px] border border-line bg-foreground p-6 text-background shadow-soft md:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-warm">
                  Contact
                </p>
                <h2
                  id="contact-title"
                  className="mt-3 text-3xl font-semibold md:text-4xl"
                >
                  Let us talk about useful systems.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-background/75 md:text-lg">
                  {profile.contactIntro}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
                <LinkButton
                  href={`mailto:${profile.email}`}
                  aria-label={`Email ${profile.name}`}
                  className="border-background/20 bg-background text-foreground hover:border-accent hover:bg-accent hover:text-white dark:text-foreground"
                >
                  {profile.email}
                </LinkButton>
                <LinkButton
                  href={profile.github}
                  aria-label="Open Wang Jiawei's GitHub profile"
                  variant="quiet"
                  className="border-background/25 text-background hover:border-background/60 hover:bg-background/10"
                >
                  GitHub
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-panel/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <div>
            <p className="font-semibold text-foreground">{profile.name}</p>
            <p className="mt-1">{profile.headline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ExternalTextLink href={profile.github}>GitHub</ExternalTextLink>
            <ExternalTextLink href={profile.linkedin}>
              LinkedIn
            </ExternalTextLink>
            <ExternalTextLink href={`mailto:${profile.email}`}>
              Email
            </ExternalTextLink>
            <span className="text-xs font-semibold uppercase tracking-[0.14em]">
              Built with Next.js
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
