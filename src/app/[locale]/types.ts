/**
 * 基本信息
 */
export interface Profile {
  name: string; // 名字
  gender: 'male' | 'female'; // 性别
  phone: string; // 电话
  email: string; // 邮箱
  languages?: string[]; // 语言
}

interface School {
  name: string;
  introduction?: string;
}

/**
 * 教育经历
 */
export interface Education {
  key: string;
  school: School; // 学校
  degree: string; // 学历
  major: string | string[]; // 专业
  startTime: string; // 时间
  endTime: string;
}

/**
 * 项目经历
 */
export interface Project {
  name: string; // 项目名
  introduction: string;
  techStack?: string[]; // 技术栈
  achievements: string[]; // 工作与业绩成就
  challenges?: string[]; // 难点
}

/**
 * 工作经历
 */
export interface Experience {
  company: string; // 公司名
  title: string; // 职位
  startTime: string; // 开始工作时间
  endTime: string; // 结束工作时间
  introduction?: string; // 介绍
  projects?: Project[]; // 项目
}

/**
 * 简历信息
 */
export interface Resume {
  url?: string; // 在线简历链接
  advantages: string[]; // 优势
  profile: Profile; // 基本信息
  educations: Education[]; // 学历
  experience: Experience[]; // 工作经历
  projects?: Project[]; // 其他项目经历
  skills?: string[]; // 专业技能
  links?: string[]; // 其他链接
  contributions?: string[]; // 开源与技术贡献
}
