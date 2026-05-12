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
      className="rounded-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
        <div className="absolute inset-0 -z-10 bg-background/[0.94] dark:bg-background/[0.9]" />
        <div className="mx-auto grid min-h-[88svh] w-full max-w-7xl grid-cols-[minmax(0,1fr)] items-end gap-10 px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-10">
          <div className="min-w-0 max-w-4xl">
            <p className="text-sm font-semibold uppercase text-accent">
              {profile.roleLine}
            </p>
            <h1
              id="hero-title"
              className="mt-5 max-w-full break-words text-4xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-3xl break-words text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
              {profile.valueProposition}
            </p>
            <ul className="mt-9 flex w-full max-w-full flex-col gap-3 sm:w-auto sm:flex-row">
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

          <aside
            aria-labelledby="current-status-title"
            className="min-w-0 rounded-[8px] border border-line bg-panel/90 p-5 shadow-soft backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase text-accent-warm">
              {profile.currentStatus.label}
            </p>
            <h2
              id="current-status-title"
              className="mt-3 text-lg font-semibold text-foreground"
            >
              {profile.currentStatus.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {profile.currentStatus.description}
            </p>
          </aside>
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
            title="Selected engineering case studies."
            intro="A closer look at practical systems work across FPGA design, AI web development, and robotics. Public repositories are linked where they exist."
            id="projects-title"
          />
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[34rem] flex-col rounded-[8px] border border-line bg-background p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg focus-within:border-accent focus-within:shadow-lg"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase text-accent">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-muted">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">
                    {project.title}
                  </h3>
                </div>

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase text-accent-warm">
                      Problem / goal
                    </dt>
                    <dd className="mt-2 leading-7 text-muted">
                      {project.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-accent-warm">
                      What I built
                    </dt>
                    <dd className="mt-2 leading-7 text-muted">
                      {project.built}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase text-accent-warm">
                    Technical highlights
                  </h4>
                  <ul className="clean-list mt-3 space-y-2 text-sm leading-7 text-muted">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase text-accent-warm">
                    Tech stack
                  </h4>
                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label={`${project.title} tech stack`}
                  >
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-panel px-2.5 py-1 text-xs font-semibold text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <h4 className="text-xs font-semibold uppercase text-accent-warm">
                    Links
                  </h4>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    {project.links.map((link) => (
                      <ExternalTextLink
                        key={link.href}
                        href={link.href}
                        ariaLabel={link.ariaLabel}
                      >
                        {link.label}
                      </ExternalTextLink>
                    ))}
                    <span className="rounded-md border border-line bg-panel px-2.5 py-1 text-xs font-semibold text-muted">
                      {project.linkNote}
                    </span>
                  </div>
                </div>
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
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
          <SectionHeading
            eyebrow="Experience"
            title="Recent roles, practical systems work."
            intro="A concise timeline of automation, embedded research, and leadership work, written to avoid confidential operational details."
            id="experience-title"
          />
          <ol className="relative space-y-6 border-l border-line pl-6 md:space-y-8">
            {experience.map((item) => (
              <li key={`${item.role}-${item.period}`} className="relative">
                <span
                  className="absolute -left-[31px] top-3 h-3 w-3 rounded-full border-2 border-background bg-accent"
                  aria-hidden="true"
                />
                <article className="rounded-[8px] border border-line bg-panel p-5">
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
                  <ul className="clean-list mt-4 space-y-2 text-sm leading-7 text-muted">
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
        className="border-b border-line bg-panel/55 py-20 md:py-28"
        aria-labelledby="about-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionHeading
            eyebrow="About"
            title="Hardware curiosity with a product lens."
            intro="I like the space where circuits, code, and human workflows meet."
            id="about-title"
          />
          <div className="space-y-10">
            <div className="space-y-5 text-lg leading-9 text-foreground">
              <p>{profile.about}</p>
              <p>{profile.aboutFocus}</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Skills and tools
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-background px-3 py-2 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Education
              </h3>
              <ul className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
                {education.map((item) => (
                  <li
                    key={`${item.degree}-${item.institution}`}
                    className="rounded-[8px] border border-line bg-background p-4"
                  >
                    <h4 className="text-base font-semibold text-foreground">
                      {item.degree}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-muted">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-accent-warm">
                      {item.period}
                    </p>
                    {item.details.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <li
                            key={detail}
                            className="rounded-md bg-panel px-2.5 py-1 text-xs font-semibold text-muted"
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
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 md:py-28"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let us talk about useful systems."
            intro={profile.contactIntro}
            id="contact-title"
          />
          <div className="flex flex-col justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
              className="inline-flex min-h-14 w-fit items-center rounded-md border border-accent bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:border-foreground hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:text-background"
            >
              {profile.email}
            </a>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <ExternalTextLink
                  href={profile.github}
                  ariaLabel="Open Wang Jiawei's GitHub profile"
                >
                  GitHub
                </ExternalTextLink>
              </li>
              <li>
                <ExternalTextLink
                  href={profile.linkedin}
                  ariaLabel="Open Wang Jiawei's LinkedIn profile"
                >
                  LinkedIn
                </ExternalTextLink>
              </li>
              <li>
                <ExternalTextLink
                  href={`mailto:${profile.email}`}
                  ariaLabel={`Email ${profile.name}`}
                >
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
