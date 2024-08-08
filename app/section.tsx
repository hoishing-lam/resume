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
      <header className="flex items-center mb-[8px] pb-[8px] border-b-[1px] border-solid border-[#e0e0e0]">
        <div className="flex items-center gap-[12px] px-[12px] py-[4px] text-[18px] bg-teal-600 text-[#fff] rounded-[4px]">
          {icon}
          <h4 className="font-bold">{title}</h4>
        </div>
      </header>
      {children}
    </section>
  );
}
