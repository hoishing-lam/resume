import type { Experience } from './types';

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience(props: ExperienceProps) {
  const { experience } = props;
  return (
    <ul className="flex flex-col gap-1">
      {experience.map(exp => (
        <li key={exp.id}>
          <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center print:flex-row print:justify-between print:items-center">
            <div className="flex flex-wrap items-baseline gap-1">
              <h4 className="font-bold text-sm">{exp.company}</h4>
              <span>-</span>
              <span>{exp.title}</span>
            </div>
            <div className="flex shrink-0 gap-1 text-muted-foreground md:text-inherit print:text-inherit">
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
