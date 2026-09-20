import { experience } from "@/lib/data";

function formatPeriod(startDate: string, endDate?: string) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${fmt(startDate)} — ${endDate ? fmt(endDate) : "Present"}`;
}

function formatDuration(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-text-muted">
            Roles where I&apos;ve actually shipped and maintained systems, not
            just built demos.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <div className="font-mono text-xs text-text-muted">
                <p>{formatPeriod(exp.startDate, exp.endDate)}</p>
                <p className="mt-1 text-accent">
                  {formatDuration(exp.startDate, exp.endDate)}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-text">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {exp.company} · {exp.employmentType} · {exp.location}
                </p>

                <ul className="mt-4 space-y-1.5 text-text-muted">
                  {exp.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-accent">—</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {exp.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
