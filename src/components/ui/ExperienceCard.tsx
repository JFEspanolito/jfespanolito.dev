import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  activities: string[];
  topskills: string[];
}

interface Props {
  experience: ExperienceItem;
  activityLabel: string;
  stackLabel: string;
}

const ExperienceCard: React.FC<Props> = ({ experience, activityLabel, stackLabel }) => {
  const highlights = experience.activities.slice(0, 10);
  const tags = experience.topskills.slice(0, 10);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
      <div className="relative z-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] opacity-90">{experience.company}</p>
            <h3 className="mt-1.5 text-2xl md:text-3xl font-bold leading-tight text-white tracking-tight">{experience.role}</h3>
          </div>

          <span className="text-xs font-mono font-medium text-slate-400 shrink-0">
            {experience.period}
          </span>
        </div>

        <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">{experience.description}</p>

        <div className="mt-6 pt-6 border-t border-white/[0.06] grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{activityLabel}</p>
            <ul className="space-y-2.5">
              {highlights.map((activity) => (
                <li key={activity} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-green)] opacity-80" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stackLabel}</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
