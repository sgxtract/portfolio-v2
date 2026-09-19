import { skillCategories, exploringSkills } from "@/lib/data";
import { SkillMarquee } from "./skill-marquee";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-text-muted">
            The stack I reach for, grouped by where it sits in a project.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="grid grid-cols-1 gap-4 md:grid-cols-[220px_1fr] md:items-center md:gap-8"
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-accent">
                    {category.index}
                  </span>
                  <h3 className="font-display text-lg font-medium text-text">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-text-muted">
                  {category.description}
                </p>
              </div>

              <SkillMarquee skills={category.skills} reverse={i % 2 === 1} />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-border p-6">
          <p className="font-mono text-xs text-text-muted">
            Currently exploring — not production experience yet
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {exploringSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-text-muted"
                >
                  {Icon && (
                    <Icon
                      className="h-4 w-4"
                      style={skill.color ? { color: skill.color } : undefined}
                    />
                  )}
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
