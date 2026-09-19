import { aboutStats } from "@/lib/data";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-28 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            About
          </h2>
          <div className="mt-6 max-w-xl space-y-5 text-text-muted">
            <p>
              I&apos;m a full-stack developer based in the Philippines, working
              across the whole stack from interface, to API, to the database
              underneath.
            </p>
            <p>
              Most of my recent work has been building systems for real
              organizations to actually run on: a government procurement
              platform currently in progress, and a parking reservation system
              with its own companion mobile app before that.
            </p>
            <p>
              Outside of client and government work, I&apos;m expanding into
              automation tooling and exploring how AI fits into everyday
              development workflows.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-8">
          <p className="font-mono text-xs text-text-muted">status.log</p>
          <dl className="mt-6 space-y-5">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-none last:pb-0"
              >
                <dt className="text-sm text-text-muted">{stat.label}</dt>
                <dd className="text-right font-mono text-sm text-text">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
