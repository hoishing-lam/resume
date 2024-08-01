import type { Resume } from './types';
import Section from './section';
import Profile from './profile';
import Education from './education';
import Experience from './experience';
import Project from './project';
import Link from './link';

interface ResumeProps {
  resume: Resume;
}

export default function Resume(props: ResumeProps) {
  const { resume } = props;

  return (
    <article className="bg-[#fff] p-[12px] mx-auto md:w-[760px] w-full rounded-[8px]">
      <h2 className="text-center text-[24px] font-bold">
        {resume.profile.name}的个人简历
      </h2>
      {resume.url && <h3 className="text-center">{resume.url}</h3>}
      <Section className="mt-[8px]" title="基本信息">
        <Profile profile={resume.profile} />
      </Section>
      <Section className="mt-[8px]" title="概要">
        <span>{resume.summary}</span>
      </Section>
      <Section className="mt-[8px]" title="教育背景">
        <Education educations={resume.educations} />
      </Section>
      <Section className="mt-[8px]" title="工作经历">
        <Experience experience={resume.experience} />
      </Section>
      <Section className="mt-[8px]" title="项目经历">
        <Project projects={resume.projects} />
      </Section>
      {resume.links && (
        <Section className="mt-[8px]" title="其他链接">
          <Link links={resume.links} />
        </Section>
      )}
    </article>
  );
}
