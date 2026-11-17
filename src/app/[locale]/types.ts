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
  introduction: string; // 项目简介
  techStack?: string[]; // 技术栈
  achievements: string[]; // 工作与业绩成就
  challenges?: string[]; // 难点
}

/**
 * 个人项目
 */
export interface PersonalProject extends Project {
  startTime?: string; // 开始时间
  endTime?: string; // 结束时间
  links?: string[]; // 仓库、线上地址等
}

/**
 * 项目经历的展示项：公司项目带上归属，个人项目带上时间
 */
export interface ProjectItem extends PersonalProject {
  company?: string; // 所属公司，个人项目为空
  title?: string; // 任职职位
}

/**
 * 工作经历（仅时间线，项目详情见 Project）
 */
export interface Experience {
  id: string; // 唯一标识
  company: string; // 公司名
  title: string; // 职位
  startTime: string; // 开始工作时间
  endTime: string; // 结束工作时间
  introduction?: string; // 介绍
  projects?: Project[]; // 任职期间的项目
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
  personalProjects?: PersonalProject[]; // 个人项目
  skills?: string[]; // 专业技能
  links?: string[]; // 其他链接
  contributions?: string[]; // 开源与技术贡献
  certifications?: string[]; // 专业证书
}
