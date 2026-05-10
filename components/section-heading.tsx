type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-accent">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold text-foreground md:text-4xl"
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
