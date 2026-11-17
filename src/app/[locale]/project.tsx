import { useTranslations } from 'next-intl';
import type { ProjectItem } from './types';
import Point from './point';

interface ProjectProps {
  project: ProjectItem;
}

export default function Project(props: ProjectProps) {
  const { project } = props;
  const t = useTranslations('base');

  const period =
    project.startTime && project.endTime
      ? `${project.startTime}-${project.endTime}`
      : project.startTime;

  return (
    <li>
      <div className="flex justify-between items-baseline gap-[8px]">
        <div className="flex items-baseline gap-[8px]">
          <h4 className="font-bold text-[14px]">{project.name}</h4>
          <span className="text-[12px] text-[#666]">
            {project.company
              ? `${project.company} · ${project.title}`
              : t('personalPortfolio')}
          </span>
        </div>
        {period && <span className="text-[12px]">{period}</span>}
      </div>
      <p className="mt-[4px]">{project.introduction}</p>
      {project.techStack && (
        <div className="mt-[4px] flex items-center gap-[8px]">
          <h5 className="font-bold">{t('techStack')}</h5>
          <span>{project.techStack.join(' + ')}</span>
        </div>
      )}
      {project.challenges && (
        <div className="mt-[4px]">
          <h5 className="font-bold">{t('challenge')}</h5>
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
        <h5 className="font-bold">{t('achievement')}</h5>
        <ul>
          {project.achievements.map(achievement => (
            <li key={achievement}>
              <Point />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
      {project.links && (
        <div className="mt-[4px] flex items-center gap-[8px]">
          <h5 className="font-bold">{t('link')}</h5>
          {project.links.map(link => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
