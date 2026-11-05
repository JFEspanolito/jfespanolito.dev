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
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-2xl">
      <div className="relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] opacity-90">{experience.company}</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-white tracking-tight">{experience.role}</h3>
          </div>

          <span className="inline-flex w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 shadow-sm">
            {experience.period}
          </span>
        </div>

        <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">{experience.description}</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{activityLabel}</p>
            <ul className="relative space-y-3 pl-1">
              {highlights.map((activity) => (
                <li key={activity} className="relative flex gap-3 text-sm leading-relaxed text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-green)] opacity-80" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stackLabel}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
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
