export interface IJob {
  role: string;
  company: string;
  job: string;
  serviceTime: string;
  time: string;
  local: string;
  type: string;
  description: string[];
}

export interface ICourse {
  company: string;
  course: string;
  time: string;
  description: string[];
  skills: string[];
}

export interface IArticle {
  name: string;
  link: string;
}

export interface IProject {
  title: string;
  deploy: string;
  github: string;
  description: string;
  skills: string[];
}