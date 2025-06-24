import Point from './point';

interface AdvantageProps {
  advantages: string[];
}

export default function Advantage(props: AdvantageProps) {
  const { advantages } = props;
  return (
    <ul>
      {advantages.map(advantage => (
        <li key={advantage} className="flex items-center">
          <Point />
          <span>{advantage}</span>
        </li>
      ))}
    </ul>
  );
}
