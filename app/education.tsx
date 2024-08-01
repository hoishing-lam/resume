import type { Education } from './types';

interface EducationProps {
  educations: Education[];
}

export default function Education(props: EducationProps) {
  const { educations } = props;
  return (
    <ul>
      {educations.map(education => (
        <li
          key={education.school.name}
          className="grid grid-cols-[35%_45%_20%]"
        >
          <span className="font-bold">
            {education.major} ({education.degree})
          </span>
          <div className="text-center">
            <span>{education.school.name}</span>
            {education.school.introduction && (
              <span>({education.school.introduction})</span>
            )}
          </div>
          <span className="text-right">
            {education.startTime}-{education.endTime}
          </span>
        </li>
      ))}
    </ul>
  );
}
