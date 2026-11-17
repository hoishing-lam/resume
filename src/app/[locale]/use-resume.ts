import { useTranslations } from 'next-intl';
import type { Resume } from './types';

export function useResume() {
  const baseT = useTranslations('base');
  const t = useTranslations('profile');

  const resume: Resume = {
    url: 'https://hoishing-lam.github.io/resume',
    advantages: [
      t('advantage1'),
      t('advantage2'),
      t('advantage3'),
      t('advantage4')
    ],
    profile: {
      name: t('name'),
      gender: 'male',
      phone: '13802720439',
      email: '504405161@qq.com',
      languages: [baseT('mandarin'), baseT('english'), baseT('cantonese')]
    },
    educations: [
      {
        key: 'asu-cs',
        school: {
          name: baseT('asu')
        },
        degree: baseT('master'),
        major: baseT('computerScience'),
        startTime: '2015',
        endTime: '2017'
      },
      {
        key: 'gdufs-cs',
        school: {
          name: baseT('gdufs')
        },
        degree: baseT('bachelor'),
        major: baseT('computerScience'),
        startTime: '2011',
        endTime: '2015'
      },
      {
        key: 'gdufs-finance',
        school: {
          name: baseT('gdufs')
        },
        degree: baseT('bachelor'),
        major: baseT('finance'),
        startTime: '2011',
        endTime: '2015'
      }
    ],
    experience: [
      {
        id: 'gci',
        company: t('experience.gci.company'),
        title: baseT('seniorFeEngineer'),
        startTime: '2023.04',
        endTime: baseT('now'),
        projects: [
          {
            name: t('experience.gci.agentos.name'),
            introduction: t('experience.gci.agentos.introduction'),
            techStack: [
              'Next.js 16',
              'React 19',
              'TypeScript',
              'Tailwind CSS',
              'Turborepo',
              'shadcn/ui',
              'Fastify',
              'Prisma'
            ],
            achievements: [
              t('experience.gci.agentos.achievement1'),
              t('experience.gci.agentos.achievement2'),
              t('experience.gci.agentos.achievement3'),
              t('experience.gci.agentos.achievement4'),
              t('experience.gci.agentos.achievement5')
            ],
            challenges: [
              t('experience.gci.agentos.challenge1'),
              t('experience.gci.agentos.challenge2'),
              t('experience.gci.agentos.challenge3'),
              t('experience.gci.agentos.challenge4'),
              t('experience.gci.agentos.challenge5')
            ]
          },
          {
            name: t('experience.gci.infra.name'),
            introduction: t('experience.gci.infra.introduction'),
            techStack: [
              'Vue3',
              'element-plus',
              'tailwindcss',
              'vite',
              'monorepo'
            ],
            achievements: [
              t('experience.gci.infra.achievement1'),
              t('experience.gci.infra.achievement2'),
              t('experience.gci.infra.achievement4')
            ]
          }
        ]
      },
      {
        id: 'kingsoft',
        company: t('experience.kingsoft.company'),
        title: baseT('feEngineer'),
        startTime: '2020.08',
        endTime: '2023.02',
        projects: [
          {
            name: t('experience.kingsoft.admin.name'),
            introduction: t('experience.kingsoft.admin.introduction'),
            techStack: ['Vue2', 'element-ui', 'Webpack'],
            achievements: [
              t('experience.kingsoft.admin.achievement1'),
              t('experience.kingsoft.admin.achievement2')
            ]
          }
        ]
      },
      {
        id: 'xiao',
        company: t('experience.xiao.company'),
        title: baseT('feEngineer'),
        startTime: '2019.04',
        endTime: '2020.06'
      }
    ],
    certifications: [baseT('cet6'), baseT('qcsp')],
    skills: ['TypeScript', 'Vue', 'React', 'Webpack', 'Vite'],
    contributions: [t('contribution.contribution1')],
    links: ['https://github.com/hoishing-lam']
  };

  return resume;
}
