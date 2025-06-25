import Point from './point';

interface ContributionProps {
  contributions: string[];
}

export default function Contribution(props: ContributionProps) {
  const { contributions } = props;
  return (
    <ul>
      {contributions.map(contribution => (
        <li key={contribution}>
          <Point />
          <span>{contribution}</span>
        </li>
      ))}
    </ul>
  );
}
