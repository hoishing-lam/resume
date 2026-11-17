import type { JSX } from 'react';

interface SectionProps {
  className?: string;
  title: string;
  icon?: JSX.Element;
  children?: JSX.Element;
}

export default function Section(props: SectionProps) {
  const { className, title, icon, children } = props;

  return (
    <section className={className}>
      <header className="flex items-center mb-2 pb-2 border-b border-solid border-border">
        <div className="flex items-center gap-3 px-3 py-1 bg-primary text-primary-foreground rounded">
          {icon}
          <h4 className="font-bold text-base">{title}</h4>
        </div>
      </header>
      {children}
    </section>
  );
}
