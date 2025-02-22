import type { Resume } from './types';
import Section from './section';
import Advantage from './advantage';
import Profile from './profile';
import Education from './education';
import Experience from './experience';
import Contribution from './contribution';
import Project from './project';

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
      <Section className="mt-[8px]" title="核心优势">
        <Advantage advantages={resume.advantages} />
      </Section>
      <Section className="mt-[8px]" title="工作经历">
        <Experience experience={resume.experience} />
      </Section>
      {resume.projects && (
        <Section className="mt-[8px]" title="个人项目">
          <Project projects={resume.projects} />
        </Section>
      )}
      {resume.contributions && (
        <Section className="mt-[8px]" title="开源与技术贡献">
          <Contribution contributions={resume.contributions} />
        </Section>
      )}
      <Section className="mt-[8px]" title="教育背景">
        <Education educations={resume.educations} />
      </Section>
    </article>
  );
}
