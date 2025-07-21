import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  // Hero Section Data
  heroData = signal({
    name: 'Vinay Potla',
    email: 'vinaypotla777@gmail.com',
    phone: '469-929-3493',
    linkedin: 'https://www.linkedin.com/in/vinaypotla/',
    summary: `I architect and build high-performance, scalable web applications that are ready to rock the world.`
  });

  // Experience Section Data
  experienceData = signal([
    {
      role: 'Senior Developer',
      company: 'Epsilon',
      location: 'Dallas, USA',
      period: 'Oct 2022 - Present',
      responsibilities: [
        'Led the full-stack modernization of a messaging platform using Angular 18, Java, Spring Boot, and MongoDB, improving UI responsiveness by 35% and increasing user retention by 15%.',
        'Designed and implemented GraphQL APIs and RESTful services, reducing API response times by 30% and enhancing data retrieval efficiency.',
        'Spearheaded the creation of a reusable Angular component library integrated with RxJs, reducing frontend development time by 25% across multiple teams.',
        'Automated operational processes using AWS Lambda, enhancing throughput by 50%. Implemented AWS S3 for secure file storage and retrieval, reducing storage costs by 20%.',
        'Refactored monolithic applications into Microservices and Serverless architectures, improving scalability and deployment efficiency.',
        'Implemented Redis caching, reducing DB query loads by 50% and improving API response times.',
        'Streamlined development processes by introducing automated testing frameworks (Cypress, Karma, Taiko), cutting regression testing time by 50%, and improving overall software reliability.',
        'Automated CI/CD with GoCD and GitHub Actions, enabling 50% faster deployments and zero-downtime releases. Enforced code standards via SonarQube, resolving 200+ code smells/month.'
      ]
    },
    {
      role: 'Software Developer 2',
      company: 'Epsilon',
      location: 'Dallas, USA',
      period: 'Oct 2020 – Sep 2022',
      responsibilities: [
        'Designed and implemented RESTful APIs using Java and Spring Boot, increasing data synchronization efficiency by 30%. Leveraged Spring Data JPA for seamless integration with MySQL, reducing data access latency by 20%.',
        'Developed highly reusable UI components with Angular and TypeScript, reducing code duplication by 35%.',
        'Led the migration of Angular 5 to Angular 15+, reducing bundle sizes by 25% and cutting runtime errors by 30% through strict TypeScript adherence.',
        'Streamlined backend workflows using Kafka, ensuring real-time data streaming for critical operations.',
        'Improved MySQL query performance using indexing and query optimization techniques, reducing data retrieval times by 15%.',
        'Implemented Cypress E2E testing and Taiko UI automation, cutting regression testing time by 50%.',
        'Collaborated with UI/UX teams to deliver responsive interfaces, improving cross-device compatibility by 20%.'
      ]
    },
    {
      role: 'Software Developer 1',
      company: 'Epsilon',
      location: 'Dallas, USA',
      period: 'Jan 2020 – Sep 2020',
      responsibilities: [
        'Developed and maintained web applications using Angular and RESTful APIs, contributing to a 20% increase in application performance and user engagement.',
        'Resolved critical API bottlenecks in Java services, slashing response times by 40% through thread pooling and connection reuse.',
        'Implemented NgRx for centralized state management in Angular apps, reducing redundant API calls by 50% and improving dashboard load times.',
        'Integrated ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging and real-time monitoring, reducing downtime by 20%.',
        'Achieved 90% unit test coverage using Karma and Jasmine, ensuring robust application quality and maintainability.'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Epsilon',
      location: 'Dallas, USA',
      period: 'Jun 2019 – Dec 2019',
      responsibilities: [
        'Modernized Java modules for the People Cloud Messaging Product using Factory/Singleton patterns, improving runtime efficiency by 50%.',
        'Redesigned MySQL schemas for a marketing analytics tool, accelerating data retrieval by 20%.',
        'Authored technical documentation to support development and deployment strategies, ensuring seamless knowledge transfer across teams.',
        'Conducted unit testing with JUnit and achieved 90% code coverage across critical backend components.'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Hoonuit',
      location: 'Minneapolis, USA',
      period: 'Aug 2018 – Jan 2019',
      responsibilities: [
        'Developed reusable JAVA-based ETL connectors, cutting implementation time by 70%. Optimized data pipelines for efficient data extraction, transformation, and loading.',
        'Designed SaaS-based dashboards using Java and Spring Boot, driving a 40% revenue increase through advanced analytics.'
      ]
    }
  ]);

  // Education Section Data
  educationData = signal([
    {
      university: 'The University Of Texas at Dallas',
      degree: 'Master of Science in Computer and Information Sciences',
      year: 'Dec 2019'
    },
    {
      university: 'National Institute Of Technology (NIT), Calicut, India',
      degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
      year: 'May 2017'
    }
  ]);

  // Skills Section Data
  skillsData = signal({
    frontend: [
      { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' },
      { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png' },
      { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
      { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' }
    ],
    backend: [
      { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
      { name: 'Spring Boot', logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
      { name: 'Node.js', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
      { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' }
    ],
    database: [
      { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
      { name: 'PostgreSQL', logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
      { name: 'MySQL', logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
      { name: 'Cassandra', logo: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg' }
    ],
    devops: [
      { name: 'Jenkins', logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg' },
      { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
      { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
      { name: 'ELK Stack', logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' }
    ],
    testing: [
        { name: 'Cypress', logo: 'https://docs.cypress.io/img/logo/cypress-logo-circle-dark.png' },
        { name: 'Karma', logo: 'https://cdn.worldvectorlogo.com/logos/karma.svg' },
        { name: 'Jasmine', logo: 'https://jasmine.github.io/images/jasmine-horizontal.svg' },
        { name: 'JUnit', logo: 'https://junit.org/junit5/assets/img/junit5-logo.png' }
    ],
    tools: [
        { name: 'IntelliJ', logo: 'https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg' },
        { name: 'WebStorm', logo: 'https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg' },
        { name: 'VS Code', logo: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
        { name: 'Confluence', logo: 'https://cdn.worldvectorlogo.com/logos/confluence-1.svg' },
        { name: 'Agile/Scrum', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' }
    ]
  });

  // Notable Projects Section Data
  projectsData = signal([
    {
      name: 'Real-Time Spam Detection',
      description: 'Built a scalable ML pipeline on AWS to identify spammers with 85% accuracy, reducing fraudulent activity by 60%.'
    },
    {
      name: 'Predictive Analytics for Real Estate',
      description: 'Engineered a regression model for price forecasting, achieving 90% accuracy and reducing manual appraisal efforts by 40%.'
    },
    {
      name: 'Twitter Sentiment Engine',
      description: 'Processed 10k+ tweets/sec using Kafka and Scala, delivering real-time sentiment dashboards for marketing teams.'
    }
  ]);

  constructor() { }
}
