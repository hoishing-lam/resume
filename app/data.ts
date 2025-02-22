import type { Resume } from './types';

export const resume: Resume = {
  url: 'https://hoishing-lam.github.io/resume',
  advantages: [
    '六年前端开发经验，能够独立完成中大型项目的开发工作，确保项目顺利推进和交付',
    '擅长前端工程化实践与落地，有较好的逻辑思维与团队协作能力'
  ],
  profile: {
    name: '林海晟',
    gender: 'male',
    phone: '13802720439',
    email: '504405161@qq.com',
    languages: ['国语', '英语']
  },
  educations: [
    {
      school: {
        name: '亚利桑那州立大学',
        introduction: 'QS 200-220'
      },
      degree: '硕士',
      major: '计算机科学',
      startTime: '2015',
      endTime: '2017'
    },
    {
      school: {
        name: '广东外语外贸大学'
      },
      degree: '学士',
      major: '计算机科学',
      startTime: '2011',
      endTime: '2015'
    },
    {
      school: {
        name: '广东外语外贸大学'
      },
      degree: '学士',
      major: '金融学',
      startTime: '2011',
      endTime: '2015'
    }
  ],
  experience: [
    {
      company: '广州交信投科技有限公司',
      title: '前端工程师',
      startTime: '2023.04',
      endTime: '至今',
      department: '开发部',
      projects: [
        {
          name: '基础架构建设',
          introduction:
            '为加强公司技术研发质量与效率，公司成立基础架构组，为所有业务项目组提供技术建设与基础能力支撑。',
          techStack: [
            'Vue3',
            'Pinia',
            'vue-router',
            'element-plus',
            'monorepo'
          ],
          achievements: [
            '负责技术选型，主导与推进将前端项目技术升级以提高效率和可维护性，包括从 Vue2 升级到 Vue3 并重构，引入 TypeScript 类型系统，引入规范工具约束',
            '推动公司组件库基础建设，提炼了部分核心功能组件，提高功能的可复用性与可修改性，使 10+ 个项目快速接入，使用率达 95% 以上',
            '调研 CI/CD 方案并推进其在公司项目普及化，降低了人工构建部署的失误率，节约时间 80%',
            '调研地图瓦片技术方案并推广至全公司，落地后使系统 fps 从 10+ 提升至 50+，极大优化地图的性能问题'
          ],
          challenges: [
            '公司原有技术栈落后，缺乏技术积累与基础建设，例如持续集成、文档知识库、通用组件积累等',
            '项目普遍缺少规范化管理、代码质量较低、存在大量重复代码，可复用性与可修改性较差，导致开发效率与质量不高，影响项目交付',
            '部分项目在使用地图的场景中，由于数据量过大产生渲染的性能问题，严重影响系统的可用性和使用体验'
          ]
        }
      ]
    },
    {
      company: '珠海金山办公软件有限公司',
      title: '前端工程师',
      startTime: '2020.08',
      endTime: '2023.02',
      department: 'wps',
      introduction:
        '部门主要围绕企业办公而建立的云和协作办公体系，实现员工协作、企业安全管控的能力。由于业务扩张，业务线从单一的国内公网，扩展成为公网、私有化、海外等多条线。',
      projects: [
        {
          name: '企业管理后台',
          introduction:
            '基于多应用集合的企业管理后台系统，管理企业各种资产，主要模块包括企业基本信息、组织架构、团队管理、操作日志、企业安全设置等。',
          techStack: ['Vue2', 'Vuex', 'vue-router', 'element-ui', 'Webpack'],
          achievements: [
            '使用 Jest 编写单元测试，使新模块平均行覆盖率达 85% 以上，生产上线后无严重漏洞，提高业务交付质量',
            '实现并推广多语言自动化，降低维护成本及测试回归成本，平均减少 0.5-1 小时，支撑多个项目使用',
            '优化代码与构建层面方案，使特定环境版本去除其他无关环境的内容，减少打包体积 56KB',
            '调研微前端方案，使用 micro-app 集成其他业务，以解决跨团队项目协作集成的问题'
          ],
          challenges: [
            '项目规模较大，技术较为陈旧，导致开发阶段编译速度过慢，影响开发效率',
            '业务需求不同环境下的功能表现不同，而项目在一个环境中的构建产物掺杂了其他环境的无关功能',
            '多条业务线同时迭代，项目质量与可维护性下降',
            '海外业务需要支持多语言，日常维护多语言较为繁琐重复，增加多方人员工作量'
          ]
        }
      ]
    },
    {
      company: '广东世纪晓教育科技有限公司',
      title: '前端工程师',
      startTime: '2019.04',
      endTime: '2020.06',
      department: '销售运营部 & C 端用户产品部',
      introduction:
        '打造线上教育服务平台，吸引家长线上流量并转化为用户，提供在线报读选课的能力，本人主要负责流量营销后台及微信公众号网页研发。',
      projects: [
        {
          name: '在线报读',
          introduction:
            '为家长提供课程报读的混合式开发 app 应用，致力于为学生提供高品质的教学产品与优质的教学服务，全面提升学生的学习成绩与学习体验。',
          techStack: ['React', 'unstated-next', 'ant-design', 'Webpack'],
          achievements: [
            '设计 js bridge 方案与规范，输出 js bridge 组件，支撑多个业务接入',
            '落地前端异常监控追踪，通过统计分析并修复错误，使错误率从 16% 降至 11%，提高问题定位效率'
          ]
        }
      ]
    }
  ],
  projects: [
    {
      name: '国际化自动化工具',
      introduction:
        '为提高国际化流程的效率，该工具可自动提取项目源码中的中文并生成待翻译的多语言 excel 表，该表翻译完毕可读取其中内容并转化为项目源码。',
      techStack: ['Node.js', 'commander'],
      achievements: [
        '提高了国际化流程的效率，减少了 60% 的时间成本，提取中文的正确率达 80% 以上'
      ]
    }
  ],
  skills: ['TypeScript', 'Vue', 'React', 'Webpack', 'Vite'],
  contributions: ['参与 @antmjs/vantui 社区贡献，维护扩展组件功能以及文档'],
  links: ['https://github.com/hoishing-lam']
};
