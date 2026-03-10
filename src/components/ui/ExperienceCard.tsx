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
    <article className="group relative overflow-hidden rounded-[28px] border border-[#2A3B5F] bg-[#121A2B] p-6 md:p-7 shadow-[0_20px_50px_rgba(2,6,23,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/70 hover:shadow-[0_28px_70px_rgba(56,189,248,0.12)]">
      <div className="absolute inset-y-5 left-0 w-1 rounded-full bg-gradient-to-b from-[#38BDF8] via-[#8B5CF6] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.10),transparent_28%)] opacity-80 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#38BDF8]">{experience.company}</p>
            <h3 className="mt-3 text-2xl md:text-[1.75rem] font-semibold leading-tight text-[#E6EDF3]">{experience.role}</h3>
          </div>

          <span className="inline-flex w-fit shrink-0 rounded-full border border-[#38BDF8]/20 bg-[#0B1120] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9FB0C3] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {experience.period}
          </span>
        </div>

        <p className="mt-5 text-base md:text-[1.05rem] leading-8 text-[#9FB0C3]">{experience.description}</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8B5CF6]">{activityLabel}</p>
            <ul className="relative space-y-4 pl-1 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-[#38BDF8]/40 before:via-[#38BDF8]/20 before:to-transparent">
              {highlights.map((activity) => (
                <li key={activity} className="relative flex gap-4 text-sm md:text-[0.95rem] leading-7 text-[#E6EDF3]">
                  <span className="relative z-10 mt-2 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#38BDF8]/40 bg-[#0B1120] shadow-[0_0_0_4px_rgba(56,189,248,0.12)]">
                    <span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                  </span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8B5CF6]">{stackLabel}</p>
            <div className="space-y-2.5">
              {tags.map((skill) => (
                <div
                  key={skill}
                  className="flex items-start gap-3 rounded-2xl border border-[#2A3B5F] bg-[#1E293B] px-4 py-3 text-sm md:text-[0.95rem] leading-6 text-[#E6EDF3] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#8B5CF6]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
