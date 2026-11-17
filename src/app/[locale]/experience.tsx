import type { Experience } from './types';

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;
  return (
    <ul className="flex flex-col gap-[12px]">
      {experience.map(exp => (
        <li key={exp.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[4px]">
              <h4 className="font-bold text-[16px]">{exp.company}</h4>
              <span>-</span>
              <span>{exp.title}</span>
            </div>
            <div className="flex gap-[4px]">
              <span>{exp.startTime}</span>
              <span>-</span>
              <span>{exp.endTime}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
