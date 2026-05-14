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

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={[
        "group inline-flex items-center gap-1 rounded-sm font-semibold text-foreground underline decoration-accent/45 decoration-2 underline-offset-4 transition hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      ].join(" ")}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      >
        -&gt;
      </span>
    </a>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-panel/82 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
      {children}
    </span>
  );
}

function TechPills({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-panel/84 px-3 py-1 text-xs font-semibold text-foreground shadow-[0_1px_0_rgb(255_255_255_/_0.55)_inset]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ResumeCta({
  className = "",
  variant = "secondary",
}: {
  className?: string;
  variant?: "primary" | "secondary" | "quiet";
}) {
  if (profile.resumeHref) {
    return (
      <LinkButton
        href={profile.resumeHref}
        download
        aria-label="Download Wang Jiawei's resume"
        variant={variant}
        className={className}
      >
        Download resume
      </LinkButton>
    );
  }

  return (
    <span
      aria-disabled="true"
      title="Resume PDF not added yet"
      className={[
        "inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md border border-line bg-panel/62 px-5 py-2.5 text-sm font-semibold text-muted sm:whitespace-nowrap",
        className,
      ].join(" ")}
    >
      Download resume
    </span>
  );
}

function ProjectProofLinks({ project }: { project: Project }) {
  return (
    <div aria-label={`${project.title} proof links`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
        Proof
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {project.links.map((link) => (
          <ExternalTextLink
            key={link.href}
            href={link.href}
            ariaLabel={link.ariaLabel}
          >
            {link.label}
          </ExternalTextLink>
        ))}
        <span className="rounded-full border border-line bg-panel/86 px-3 py-1 text-xs font-semibold text-muted">
          {project.linkNote}
        </span>
      </div>
    </div>
  );
}

function ProjectVisualPlaceholder({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "proof-visual relative isolate min-h-56 overflow-hidden rounded-[8px] border border-line bg-panel/82 p-5 shadow-[0_18px_60px_rgb(15_23_42_/_0.07)]",
        featured ? "lg:min-h-full lg:p-6" : "",
      ].join(" ")}
      aria-label={`${project.title} visual placeholder`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">
          {project.visual.label}
        </span>
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_rgb(var(--accent)_/_0.14)]" />
      </div>
      <h4 className="mt-8 max-w-xs text-2xl font-semibold leading-tight text-foreground">
        {project.visual.title}
      </h4>
      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
        {project.visual.caption}
      </p>

      <div
        className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3"
        aria-hidden="true"
      >
        <div className="h-px bg-line" />
        <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-accent/30 bg-background text-xs font-bold text-accent">
          IO
        </div>
        <div className="h-px bg-line" />
      </div>
      <div
        className="mt-4 grid grid-cols-3 gap-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted"
        aria-hidden="true"
      >
        <span className="rounded border border-line bg-background/72 px-2 py-2 text-center">
          Input
        </span>
        <span className="rounded border border-line bg-background/72 px-2 py-2 text-center">
          Logic
        </span>
        <span className="rounded border border-line bg-background/72 px-2 py-2 text-center">
          Output
        </span>
      </div>
    </div>
  );
}

function CaseStudyPreview({ project }: { project: Project }) {
  return (
    <dl className="grid gap-3">
      {project.caseStudy.map((item) => (
        <div key={item.label} className="border-l border-accent/35 pl-4">
          <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent-warm">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-7 text-muted">{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const titleId = `project-${slugify(project.title)}`;

  return (
    <article
      aria-labelledby={titleId}
      className={[
        "group relative overflow-hidden rounded-[8px] border bg-background shadow-[0_18px_60px_rgb(15_23_42_/_0.07)] transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-soft focus-within:border-accent",
        featured ? "border-accent/24 p-5 md:p-7" : "border-line p-5 md:p-6",
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-warm to-accent-rose" />

      <div
        className={[
          "relative grid gap-7",
          featured ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-8" : "",
        ].join(" ")}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <MetaLabel>{project.category}</MetaLabel>
            <MetaLabel>{project.period}</MetaLabel>
            {featured ? (
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent">
                Featured
              </span>
            ) : null}
          </div>

          <h3
            id={titleId}
            className={[
              "mt-5 font-semibold leading-tight text-foreground",
              featured ? "text-3xl md:text-4xl" : "text-2xl",
            ].join(" ")}
          >
            {project.title}
          </h3>

          <p
            className={[
              "mt-4 max-w-3xl text-muted",
              featured ? "text-base leading-8 md:text-lg" : "text-sm leading-7",
            ].join(" ")}
          >
            {project.summary}
          </p>

          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Role / contribution
              </dt>
              <dd className="mt-2 text-sm leading-7 text-muted">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Key technical challenge
              </dt>
              <dd className="mt-2 text-sm leading-7 text-muted">
                {project.challenge}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Stack
            </p>
            <TechPills items={project.stack} />
          </div>

          <div className="mt-7">
            <ProjectProofLinks project={project} />
          </div>
        </div>

        <div className="grid gap-5">
          <ProjectVisualPlaceholder project={project} featured={featured} />
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Case-study preview
            </p>
            <CaseStudyPreview project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

function StatusPanel() {
  return (
    <aside
      aria-labelledby="status-panel-title"
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
          {profile.currentStatus.label}
        </p>
        <h2
          id="status-panel-title"
          className="mt-3 text-2xl font-semibold leading-snug text-foreground"
        >
          Systems in progress
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          {profile.currentStatus.summary}
        </p>
      </div>

      <div className="relative mt-8 grid gap-3">
        {profile.currentStatus.items.map((item) => (
          <div
            key={item.title}
            className="rounded-[8px] border border-line bg-background/82 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/55"
          >
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">
              {item.label}
            </span>
            <span className="mt-2 block text-sm font-semibold text-foreground">
              {item.title}
            </span>
            <span className="mt-1 block text-xs leading-6 text-muted">
              {item.detail}
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
          Prototype carefully, test against constraints, and make systems easier
          to operate.
        </p>
      </div>
    </aside>
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
          <div className="mx-auto grid min-h-[calc(88svh-4rem)] w-full max-w-7xl content-start items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:px-10 lg:py-28">
            <div className="min-w-0 max-w-full">
              <p className="inline-block max-w-full break-words rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent sm:tracking-[0.18em]">
                {profile.roleLine}
              </p>
              <h1
                id="hero-title"
                className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
              >
                {profile.name}
              </h1>
              <p className="mt-5 max-w-[21rem] text-2xl font-semibold leading-tight text-foreground sm:max-w-4xl sm:text-3xl lg:text-4xl">
                {profile.headline}
              </p>
              <p className="mt-6 max-w-[21rem] text-base leading-8 text-muted sm:max-w-3xl md:text-lg">
                {profile.valueProposition}
              </p>
              <ul className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="#projects"
                    aria-label="View Wang Jiawei's selected engineering projects"
                    className="w-full sm:w-auto"
                  >
                    View projects
                  </LinkButton>
                </li>
                <li className="w-full sm:w-auto">
                  <ResumeCta className="w-full sm:w-auto" />
                </li>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="#contact"
                    aria-label="Contact Wang Jiawei"
                    variant="quiet"
                    className="w-full sm:w-auto border-line bg-panel/78"
                  >
                    Contact me
                  </LinkButton>
                </li>
              </ul>
            </div>

            <StatusPanel />
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
                title="Proof-oriented project cards for practical systems."
                intro="A recruiter-friendly view of AI web, FPGA, and robotics work: what was built, the contribution, the hardest technical surface, and the links that prove it."
                id="projects-title"
                number="01"
              />
              <p className="max-w-sm border-l border-line pl-4 text-sm leading-7 text-muted">
                Public links appear only where they exist. Private or visual
                assets are marked honestly with compact case-study previews.
              </p>
            </div>

            <div className="mt-12 grid gap-5">
              <ProjectCard project={featuredProject} featured />
              <div className="grid gap-5">
                {secondaryProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
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
              title="Hands-on roles across automation, research, and leadership."
              intro="Recent work is framed around action, technical contribution, and domain context without exposing confidential details."
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
                  <article className="rounded-[8px] border border-line bg-panel/76 p-5 transition duration-200 hover:border-accent/45 hover:bg-panel md:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-muted">
                          {item.organization}
                        </p>
                      </div>
                      <p className="w-fit rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent-warm">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-4 max-w-3xl leading-8 text-muted">
                      {item.summary}
                    </p>
                    <ul className="clean-list mt-5 grid gap-x-6 gap-y-2 text-sm leading-7 text-muted md:grid-cols-2">
                      {item.highlights.map((highlight) => (
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
              intro="A practical engineering style shaped by circuits, code, and workflows that need to be usable by real people."
              id="about-title"
              number="03"
            />
            <div className="space-y-10">
              <div className="rounded-[8px] border border-line bg-background p-6 shadow-[0_18px_60px_rgb(15_23_42_/_0.06)] md:p-7">
                <div className="space-y-4 text-base leading-8 text-foreground md:text-lg">
                  <p>{profile.about}</p>
                  <p>{profile.aboutFocus}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {skillGroups.map((group) => {
                  const groupId = `skills-${slugify(group.title)}`;

                  return (
                    <section
                      key={group.title}
                      className="rounded-[8px] border border-line bg-background p-5"
                      aria-labelledby={groupId}
                    >
                      <h3
                        id={groupId}
                        className="text-sm font-bold uppercase tracking-[0.14em] text-accent"
                      >
                        {group.title}
                      </h3>
                      <div className="mt-4">
                        <TechPills items={group.skills} />
                      </div>
                    </section>
                  );
                })}
              </div>

              <div className="rounded-[8px] border border-line bg-background/70 p-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
                  Education
                </h3>
                <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
                  {education.map((item) => (
                    <li key={`${item.degree}-${item.institution}`}>
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
                  Let us build useful systems.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-background/75 md:text-lg">
                  {profile.contactIntro}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0 lg:justify-end">
                <LinkButton
                  href={`mailto:${profile.email}`}
                  aria-label={`Email ${profile.name}`}
                  className="border-background/20 bg-background text-foreground hover:border-accent hover:bg-accent hover:text-white dark:text-foreground"
                >
                  Email
                </LinkButton>
                <LinkButton
                  href={profile.github}
                  aria-label="Open Wang Jiawei's GitHub profile"
                  variant="quiet"
                  className="border-background/25 text-background hover:border-background/60 hover:bg-background/10"
                >
                  GitHub
                </LinkButton>
                <LinkButton
                  href={profile.linkedin}
                  aria-label="Open Wang Jiawei's LinkedIn profile"
                  variant="quiet"
                  className="border-background/25 text-background hover:border-background/60 hover:bg-background/10"
                >
                  LinkedIn
                </LinkButton>
                {profile.resumeHref ? (
                  <ResumeCta
                    variant="quiet"
                    className="border-background/25 text-background hover:border-background/60 hover:bg-background/10"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-panel/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <div>
            <p className="font-semibold text-foreground">{profile.name}</p>
            <p className="mt-1">{profile.roleLine}</p>
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
