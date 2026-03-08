import Point from './point';

interface CertificationProps {
  certifications: string[];
}

export default function Certification(props: CertificationProps) {
  const { certifications } = props;
  return (
    <ul>
      {certifications.map(certification => (
        <li key={certification}>
          <Point />
          <span>{certification}</span>
        </li>
      ))}
    </ul>
  );
}
