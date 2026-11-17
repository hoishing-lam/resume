import type { Experience, PersonalProject, ProjectItem } from './types';
import Project from './project';

interface ProjectExperienceProps {
  experience: Experience[];
  personalProjects?: PersonalProject[];
}

/**
 * 项目经历：将各段任职下的项目摊平，与个人项目合并为一条按归属标注的列表
 */
export default function ProjectExperience(props: ProjectExperienceProps) {
  const { experience, personalProjects } = props;

  const items: ProjectItem[] = [
    ...experience.flatMap(exp =>
      (exp.projects ?? []).map(project => ({
        ...project,
        company: exp.company,
        title: exp.title
      }))
    ),
    ...(personalProjects ?? [])
  ];

  return (
    <ul className="flex flex-col gap-[16px]">
      {items.map(item => (
        <Project
          key={`${item.company ?? 'personal'}-${item.name}`}
          project={item}
        />
      ))}
    </ul>
  );
}
