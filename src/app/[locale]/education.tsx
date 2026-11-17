import type { Education } from './types';

interface EducationProps {
  educations: Education[];
}

export default function Education(props: EducationProps) {
  const { educations } = props;
  return (
    <ul className="flex flex-col gap-1">
      {educations.map(education => (
        <li
          key={education.key}
          className="flex flex-col gap-0.5 md:grid md:grid-cols-[35%_45%_20%] md:items-center md:gap-0 print:grid print:grid-cols-[35%_45%_20%] print:items-center print:gap-0"
        >
          <span className="font-bold">
            {education.major} ({education.degree})
          </span>
          <div className="md:text-center print:text-center">
            <span>{education.school.name}</span>
            {education.school.introduction && (
              <span>({education.school.introduction})</span>
            )}
          </div>
          <span className="text-muted-foreground md:text-right md:text-inherit print:text-right print:text-inherit">
            {education.startTime}-{education.endTime}
          </span>
        </li>
      ))}
    </ul>
  );
}
