import Point from './point';

interface LinkProps {
  links: string[];
}

export default function Link(props: LinkProps) {
  const { links } = props;
  return (
    <ul>
      {links.map(link => (
        <li key={link}>
          <Point />
          <span>{link}</span>
        </li>
      ))}
    </ul>
  );
}
