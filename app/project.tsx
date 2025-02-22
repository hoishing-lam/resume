import type { Project } from './types';
import Point from './point';

interface ProjectProps {
  projects: Project[];
}

export default function Project(props: ProjectProps) {
  const { projects } = props;

  return (
    <ul className="flex flex-col gap-[16px]">
      {projects.map(project => (
        <li key={project.name}>
          <h4 className="font-bold text-[14px]">{project.name}</h4>
          <div className="mt-[4px]">
            <span>{project.introduction}</span>
          </div>
          {project.techStack && (
            <div className="mt-[4px] flex items-center gap-[8px]">
              <h5 className="font-bold">技术栈</h5>
              <span>{project.techStack.join(' + ')}</span>
            </div>
          )}
          {project.challenges && (
            <div className="mt-[4px]">
              <h5 className="font-bold">挑战</h5>
              <ul>
                {project.challenges.map(challenge => (
                  <li key={challenge}>
                    <Point />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-[4px]">
            <h5 className="font-bold">成就</h5>
            <ul>
              {project.achievements.map(achievement => (
                <li key={achievement}>
                  <Point />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
