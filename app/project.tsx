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
          <h4 className="font-bold text-[16px]">{project.name}</h4>
          <div className="mt-[4px]">
            <h5 className="font-bold text-[14px]">项目介绍</h5>
            <span>{project.introduction}</span>
          </div>
          <div className="mt-[4px]">
            <h5 className="font-bold text-[14px]">职责</h5>
            <ul>
              {project.responsibilities.map(responsibility => (
                <li key={responsibility}>
                  <Point />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
          {project.challenges && (
            <div className="mt-[4px]">
              <h5 className="font-bold text-[14px]">难点</h5>
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
            <h5 className="font-bold text-[14px]">成就</h5>
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
