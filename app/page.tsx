import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import {
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/content/site";

function ExternalTextLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section
        id="home"
        className="hero-art relative isolate min-h-[88svh] overflow-hidden border-b border-line"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 -z-10 bg-background/[0.92] dark:bg-background/[0.88]" />
        <div className="mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-end px-5 pb-12 pt-24 md:px-8 md:pb-16 lg:px-10">
          <div className="hero-measure w-full">
            <p className="text-sm font-semibold uppercase text-accent">
              Computer Engineering Portfolio
            </p>
            <h1
              id="hero-title"
              className="mt-5 max-w-full break-words text-4xl font-semibold text-foreground sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </h1>
            <p className="mt-5 max-w-full break-words text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-full break-words text-base leading-8 text-muted md:max-w-2xl md:text-lg">
              {profile.intro}
            </p>
            <div className="hero-actions mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <LinkButton href="#projects" className="w-full sm:w-auto">
                View Projects
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Contact
              </LinkButton>
            </div>
          </div>
          <dl className="mt-14 grid max-w-4xl gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {[
              ["Current", "MPA automation intern"],
              ["Study", "NUS Computer Engineering"],
              ["Focus", "Embedded systems, robotics & AI"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase text-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-line py-20 md:py-28"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <SectionHeading
            eyebrow="About"
            title="Building across software, hardware, and workflows."
            intro="A resume-backed snapshot of my studies, practical systems work, and the tools I use across automation, embedded engineering, and web development."
            id="about-title"
          />
          <div className="space-y-10">
            <p className="text-lg leading-9 text-foreground">{profile.bio}</p>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Education
              </h3>
              <ul className="mt-5 space-y-4">
                {education.map((item) => (
                  <li
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-[8px] border border-line bg-panel p-4"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h4 className="text-base font-semibold text-foreground">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-semibold text-accent-warm">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {item.institution}
                    </p>
                    {item.details.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <li
                            key={detail}
                            className="rounded-md bg-background px-2.5 py-1 text-xs font-semibold text-muted"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Skills and tools
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-panel px-3 py-2 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-accent px-5 py-2">
              <h3 className="text-base font-semibold text-foreground">
                Currently building
              </h3>
              <p className="mt-3 leading-8 text-muted">{profile.currently}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-b border-line bg-panel/55 py-20 md:py-28"
        aria-labelledby="projects-title"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Projects"
            title="Selected technical projects."
            intro="A compact view of project work from FPGA systems, AI web development, and robotics. Project-specific links can be added in the local content file when they are ready to publish."
            id="projects-title"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex min-h-72 flex-col rounded-[8px] border border-line bg-background p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-md border border-accent/35 px-2.5 py-1 text-xs font-semibold text-accent">
                    {project.period}
                  </span>
                </div>
                <p className="mt-4 flex-1 leading-8 text-muted">
                  {project.description}
                </p>
                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${project.title} tech stack`}
                >
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className="mt-7 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <ExternalTextLink
                        key={link.href}
                        href={link.href}
                        ariaLabel={link.ariaLabel}
                      >
                        {link.label}
                      </ExternalTextLink>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-b border-line py-20 md:py-28"
        aria-labelledby="experience-title"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <SectionHeading
            eyebrow="Experience"
            title="Roles with practical systems work."
            intro="Recent experience across workflow automation, embedded health technology research, and campus leadership."
            id="experience-title"
          />
          <ol className="relative space-y-8 border-l border-line pl-6">
            {experience.map((item) => (
              <li key={`${item.role}-${item.period}`} className="relative">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent" />
                <article>
                  <p className="text-sm font-semibold uppercase text-accent-warm">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-muted">
                    {item.organization}
                  </p>
                  <p className="mt-4 leading-8 text-muted">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="pl-4">
                        <span className="-ml-4 mr-2 text-accent" aria-hidden>
                          /
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 md:py-28"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Start with a simple hello."
            intro="No forms, no backend, no stored secrets. Reach me by email or through the public GitHub and LinkedIn profiles listed here."
            id="contact-title"
          />
          <div className="flex flex-col justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-14 w-fit items-center rounded-md border border-accent bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:border-foreground hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:text-background"
            >
              {profile.email}
            </a>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <ExternalTextLink href={profile.github}>
                  GitHub
                </ExternalTextLink>
              </li>
              <li>
                <ExternalTextLink href={profile.linkedin}>
                  LinkedIn
                </ExternalTextLink>
              </li>
              <li>
                <ExternalTextLink href={`mailto:${profile.email}`}>
                  Email
                </ExternalTextLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
