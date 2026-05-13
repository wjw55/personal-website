type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
  number?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  number,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        {number ? (
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-warm">
            {number}
          </span>
        ) : null}
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      </div>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
