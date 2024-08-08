import type { Experience } from './types';

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;
  return (
    <ul className="flex flex-col gap-[16px]">
      {experience.map(exp => (
        <li key={exp.company}>
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-[16px]">{exp.company}</h4>
            <span className="font-bold">
              {exp.startTime}-{exp.endTime}
            </span>
          </div>
          <div className="mt-[4px]">岗位: {exp.title}</div>
          {exp.resignationReason && (
            <div>离职原因: {exp.resignationReason}</div>
          )}
          {exp.introduction && (
            <div className="mt-[4px]">{exp.introduction}</div>
          )}
        </li>
      ))}
    </ul>
  );
}
