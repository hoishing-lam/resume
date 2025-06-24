import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Resume from './resume';
import { useResume } from './use-resume';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const resume = useResume();

  return (
    <main className="box-border md:p-[24px] md:bg-[#23292d]">
      <Resume resume={resume} />
    </main>
  );
}
