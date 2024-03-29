export interface CareerType {
  date: string;
  name: string;
  department: string;
  tasks: string[];
}

export const careers : CareerType[] = [
  {
    date: '23.09 ~ Work',
    name: 'Hongik University',
    department: 'Information and Computing Center / Developer',
    tasks: [
      'Development, distribution and maintenance of programs necessary for academic affairs and administration',
    ],
  },
  {
    date: '22.05 ~ 23.09',
    name: 'KineMaster',
    department: 'Service Platform Team 1 / Developer',
    tasks: [
      'Frontend Developer (React, TypeScript)',
      'User Service Frontend Development',
      'BackOffice Console Frontend Development',
      'Cross Browsing Testing Management',
      'Service Email Templates Development',
      'Bulk Email Console Frontend Development',
      'Templates Management Console Frontend Development',
      'Official Homepage Account Frontend Development',
    ],
  },
  {
    date: '21.03 ~ 22.05',
    name: 'VinnsMedia',
    department: 'Laboratory / Researcher',
    tasks: [
      'Web Developer (Full Stack / DB / Server)',
      'Vue.js / Node.js Frontend',
      'JavaScript / JQuery Frontend',
      'Spring Boot / Java - RESTful API',
      'Spring Boot / Java - WebScrape Daemon',
      'MySQL - Database Design',
      'Nginx / CentOS - Deploy / Maintenance',
    ],
  },
];
