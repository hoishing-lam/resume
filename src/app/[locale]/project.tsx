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
      <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <h4 className="font-bold text-sm">{project.name}</h4>
          <span className="text-xs text-muted-foreground">
            {project.company
              ? `${project.company} · ${project.title}`
              : t('personalPortfolio')}
          </span>
        </div>
        {period && <span className="shrink-0 text-xs">{period}</span>}
      </div>
      <p className="mt-1">{project.introduction}</p>
      {project.techStack && (
        <div className="mt-1 flex items-baseline gap-2">
          <h5 className="shrink-0 whitespace-nowrap font-bold">
            {t('techStack')}
          </h5>
          <span>{project.techStack.join(' + ')}</span>
        </div>
      )}
      {project.challenges && (
        <div className="mt-1">
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
      <div className="mt-1">
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
        <div className="mt-1 flex items-baseline gap-2">
          <h5 className="shrink-0 whitespace-nowrap font-bold">{t('link')}</h5>
          {project.links.map(link => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="break-all text-primary underline"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}
