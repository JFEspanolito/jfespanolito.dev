import React, { useState } from "react";

interface Props {
  experience: any;
}

const FlipCard: React.FC<Props> = ({ experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective-1000 w-full max-w-[600px] h-[200px] md:h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden bg-[var(--color-card-bg)] rounded-2xl p-4 md:p-6 shadow-lg flex flex-col justify-between border border-[var(--color-resaltar)] overflow-hidden">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg md:text-xl font-bold leading-tight pr-2 text-[var(--color-purple)]">{experience.role}</h3>
              <span className="ml-auto text-right text-[10px] md:text-xs font-medium tracking-wide opacity-80 select-none text-[var(--color-resaltar)]">
                Click to Flip
              </span>
            </div>
            <div className="flex justify-between items-start">
              <p className="font-semibold text-base md:text-base mt-1 text-[var(--color-blue)]">{experience.company}</p>
              <span className="bg-[var(--bg-use)] text-[var(--color-red)] text-[11px] px-2.5 md:px-4 py-1 md:py-1.5 rounded-full  font-bold tracking-wide shrink-0 ml-2">
                {experience.period}
              </span>
            </div>
            <p className="mt-2.5 md:mt-3 text-base md:text-base leading-relaxed line-clamp-3 text-[var(--text-use)] ">
              {experience.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2.5">
            {experience.topskills.slice(0, 4).map((skill: string) => (
              <span
                key={skill}
                className="text-[11px] md:text-[14px] bg-[var(--bg-use)] text-[var(--color-red)] px-2 md:px-3 py-1 rounded font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[var(--color-card-bg)] rounded-2xl p-4 md:p-6 shadow-xl border border-[var(--color-resaltar)] flex flex-col overflow-hidden">
          <h4 className="text-purple-600 font-bold uppercase text-[10px] md:text-xs mb-3 md:mb-4 tracking-widest border-b border-purple-100 pb-2">
            Actividades Técnicas
          </h4>
          <ul className="flex-1 space-y-2 pr-1 overflow-hidden">
            {experience.activities.map((act: string, i: number) => (
              <li key={i} className="text-base flex gap-2 md:gap-3">
                <span className="text-[var(--color-green)]">-</span>
                <span className="text-[var(--text-use)]">{act}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5">
            {experience.skills.slice(0, 10).map((s: string) => (
              <span key={s} className="text-[11px] md:text-[14px] bg-[var(--bg-use)] text-[var(--color-red)] px-2 md:px-3 py-1 rounded font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
