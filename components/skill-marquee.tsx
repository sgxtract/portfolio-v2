import type { Skill } from "@/lib/data";

export function SkillMarquee({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-fade overflow-hidden">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {/* Render the list twice, back to back, for the seamless loop */}
        {[...skills, ...skills].map((skill, i) => {
          const Icon = skill.icon;
          const isDuplicate = i >= skills.length;
          return (
            <div
              key={`${skill.name}-${i}`}
              aria-hidden={isDuplicate}
              className="flex shrink-0 items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-text"
            >
              {Icon && (
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={skill.color ? { color: skill.color } : undefined}
                />
              )}
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
