import { useTranslations } from 'next-intl';
import type { Resume } from './types';
import Section from './section';
import Advantage from './advantage';
import Profile from './profile';
import Education from './education';
import Experience from './experience';
import Certification from './certification';
import Contribution from './contribution';
import ProjectExperience from './project-experience';

interface ResumeProps {
  resume: Resume;
}

export default function Resume(props: ResumeProps) {
  const { resume } = props;
  const t = useTranslations('base');

  return (
    <article className="bg-card text-card-foreground text-sm leading-normal p-3 mx-auto md:max-w-3xl w-full rounded-lg">
      <h2 className="text-center text-2xl font-bold">{resume.profile.name}</h2>
      {resume.url && (
        <h3 className="text-center break-all">
          <a
            href={resume.url}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            {resume.url}
          </a>
        </h3>
      )}
      <Section className="mt-2" title={t('baseInfo')}>
        <Profile profile={resume.profile} />
      </Section>
      <Section className="mt-2" title={t('advantage')}>
        <Advantage advantages={resume.advantages} />
      </Section>
      <Section className="mt-2" title={t('experience')}>
        <Experience experience={resume.experience} />
      </Section>
      <Section className="mt-2" title={t('project')}>
        <ProjectExperience
          experience={resume.experience}
          personalProjects={resume.personalProjects}
        />
      </Section>
      {resume.certifications && (
        <Section className="mt-2" title={t('certification')}>
          <Certification certifications={resume.certifications} />
        </Section>
      )}
      {resume.contributions && (
        <Section className="mt-2" title={t('contribution')}>
          <Contribution contributions={resume.contributions} />
        </Section>
      )}
      <Section className="mt-2" title={t('education')}>
        <Education educations={resume.educations} />
      </Section>
    </article>
  );
}
