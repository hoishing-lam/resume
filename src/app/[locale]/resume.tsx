import { useTranslations } from 'next-intl';
import type { Resume } from './types';
import Section from './section';
import Advantage from './advantage';
import Profile from './profile';
import Education from './education';
import Experience from './experience';
import Certification from './certification';
import Contribution from './contribution';
import Project from './project';

interface ResumeProps {
  resume: Resume;
}

export default function Resume(props: ResumeProps) {
  const { resume } = props;
  const t = useTranslations('base');

  return (
    <article className="bg-[#fff] p-[12px] mx-auto md:w-[760px] w-full rounded-[8px]">
      <h2 className="text-center text-[24px] font-bold">
        {resume.profile.name}
      </h2>
      {resume.url && <h3 className="text-center">{resume.url}</h3>}
      <Section className="mt-[8px]" title={t('baseInfo')}>
        <Profile profile={resume.profile} />
      </Section>
      <Section className="mt-[8px]" title={t('advantage')}>
        <Advantage advantages={resume.advantages} />
      </Section>
      <Section className="mt-[8px]" title={t('experience')}>
        <Experience experience={resume.experience} />
      </Section>
      {resume.projects && (
        <Section className="mt-[8px]" title={t('personalPortfolio')}>
          <Project projects={resume.projects} />
        </Section>
      )}
      {resume.certifications && (
        <Section className="mt-[8px]" title={t('certification')}>
          <Certification certifications={resume.certifications} />
        </Section>
      )}
      {resume.contributions && (
        <Section className="mt-[8px]" title={t('contribution')}>
          <Contribution contributions={resume.contributions} />
        </Section>
      )}
      <Section className="mt-[8px]" title={t('education')}>
        <Education educations={resume.educations} />
      </Section>
    </article>
  );
}
