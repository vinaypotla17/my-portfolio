import { Injectable, signal } from '@angular/core';

export interface Skill {
  name: string;
  logo: string;
}

export type SkillsMap = Record<string, Skill[]>;

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  heroData = signal({
    name: 'Vinay Potla',
    title: 'Senior Full Stack Software Engineer',
    email: 'vinaypotla777@gmail.com',
    phone: '469-929-3493',
    linkedin: 'https://www.linkedin.com/in/vinaypotla/',
    summary: 'Senior Full Stack Software Engineer with 6+ years of experience designing scalable cloud-native applications and microservices across AWS, GCP, and Azure. Deep expertise in Java, Spring Boot, and Angular, with a proven record of driving performance improvements, leading platform modernizations, and mentoring engineers. Currently leading multi-cloud enablement of a Java microservices platform — abstracting AWS-native services behind provider-neutral interfaces so the same codebase serves both existing AWS clients and net-new GCP clients. Skilled in serverless and event-driven architectures, CI/CD automation, and observability across distributed systems.'
  });

  experienceData = signal([
    {
      role: 'Senior Software Engineer',
      company: 'Epsilon',
      location: 'Dallas, TX',
      period: 'Oct 2022 – Present',
      responsibilities: [
        'Re-architected AWS-native Java/Spring Boot services into a cloud-agnostic service layer, abstracting storage, messaging, secrets, and identity behind provider-neutral interfaces so a single codebase deploys to AWS, GCP, and Azure without per-client forks.',
        'Extended the existing serverless stack (AWS Lambda + API Gateway) to GCP by mapping functions onto Cloud Run/Cloud Functions fronted by GCP API Gateway, maintaining API contract parity across providers through shared OpenAPI specifications.',
        'Led onboarding of net-new GCP clients onto the platform, owning the deployment path end to end — infrastructure provisioning, cloud-profile-driven service configuration, and environment promotion through to production cutover.',
        'Migrated persistence to AlloyDB for GCP deployments while retaining a single PostgreSQL-compatible data access layer; tuned connection pooling, IAM-based authentication, and read-pool routing for serverless workloads.',
        'Standardized cross-cloud observability on the ELK/Kibana stack with structured JSON logging and correlation IDs, enabling a single request to be traced across AWS and GCP services from one dashboard and cutting triage time during incidents.',
        'Validated cross-cloud data integrity in Databricks, reconciling pipeline outputs between AWS and GCP runs to confirm functional parity before client cutover.',
        'Led full-stack modernization of a large-scale messaging platform using Angular, Java, Spring Boot, and MongoDB, improving UI responsiveness by 35% and increasing user retention by 15%.',
        'Designed GraphQL APIs and RESTful microservices, reducing API response times by 30% and enhancing data retrieval efficiency across distributed systems.',
        'Architected a reusable Angular component library integrated with RxJS, reducing frontend development time by 25% across multiple teams.',
        'Refactored monolithic applications into microservices and event-driven architectures using Kafka, improving scalability and deployment flexibility.',
        'Implemented a Redis caching layer, cutting DB query load by 50% and improving overall API throughput significantly.',
        'Automated CI/CD pipelines with GoCD and GitHub Actions, enabling 50% faster zero-downtime deployments; enforced code quality via SonarQube, resolving 200+ code smells per month.',
        'Mentored junior engineers through structured code reviews, pair programming sessions, and architectural design discussions, fostering a culture of engineering excellence.'
      ]
    },
    {
      role: 'Software Developer II',
      company: 'Epsilon',
      location: 'Dallas, TX',
      period: 'Oct 2020 – Sep 2022',
      responsibilities: [
        'Designed and implemented RESTful APIs using Java and Spring Boot, increasing data synchronization efficiency by 30%; leveraged Spring Data JPA for MySQL integration, reducing data access latency by 20%.',
        'Developed highly reusable UI components in Angular and TypeScript, reducing code duplication by 35% and accelerating feature delivery across teams.',
        'Led migration from Angular 5 to Angular 15+, reducing bundle sizes by 25% and runtime errors by 30% through strict TypeScript adherence and component refactoring.',
        'Streamlined backend workflows using Kafka for real-time data streaming on critical operational pipelines; improved MySQL query performance via indexing, reducing retrieval times by 15%.',
        'Implemented Cypress E2E testing and Taiko UI automation, cutting regression testing time by 50%; collaborated with UI/UX teams to improve cross-device compatibility by 20%.'
      ]
    },
    {
      role: 'Software Developer I',
      company: 'Epsilon',
      location: 'Dallas, TX',
      period: 'Jan 2020 – Sep 2020',
      responsibilities: [
        'Developed and maintained Angular web applications with RESTful APIs, contributing to a 20% increase in application performance and user engagement.',
        'Resolved critical API bottlenecks in Java services via thread pooling and connection reuse, slashing response times by 40%.',
        'Implemented NgRx for centralized state management, reducing redundant API calls by 50% and improving dashboard load times across the platform.',
        'Integrated the ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging and real-time monitoring, reducing system downtime by 20%.',
        'Practiced Test Driven Development (TDD) using Karma and Jasmine, achieving 90% unit test coverage and ensuring robust application quality.'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Epsilon',
      location: 'Dallas, TX',
      period: 'Jun 2019 – Dec 2019',
      responsibilities: [
        'Modernized Java modules for the People Cloud Messaging product using Factory and Singleton design patterns, improving runtime efficiency by 50%.',
        'Redesigned MySQL schemas for a marketing analytics tool, accelerating data retrieval by 20%; authored technical documentation ensuring seamless knowledge transfer across teams.'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Hoonuit',
      location: 'Minneapolis, MN',
      period: 'Aug 2018 – Jan 2019',
      responsibilities: [
        'Developed reusable Java-based ETL connectors, reducing implementation time by 70% and optimizing data pipelines for extraction, transformation, and loading.',
        'Designed SaaS-based dashboards using Java and Spring Boot with advanced analytics capabilities, contributing to a 40% revenue increase.'
      ]
    }
  ]);

  educationData = signal([
    {
      university: 'The University of Texas at Dallas',
      degree: 'M.S. Computer and Information Sciences',
      year: 'Dec 2019',
      logo: 'education/ut-dallas.svg'
    },
    {
      university: 'National Institute of Technology (NIT), Calicut, India',
      degree: 'B.Tech. Electrical and Electronics Engineering',
      year: 'May 2017',
      logo: 'education/nit-calicut.svg'
    }
  ]);

  skillsData = signal<SkillsMap>({
    cloud: [
      { name: 'AWS', logo: 'skills/aws.svg' },
      { name: 'Google Cloud', logo: 'skills/google-cloud.svg' },
      { name: 'Azure', logo: 'skills/azure.svg' }
    ],
    backend: [
      { name: 'Java', logo: 'skills/java.svg' },
      { name: 'Spring Boot', logo: 'skills/spring-boot.svg' },
      { name: 'Spring Data JPA', logo: 'skills/spring.svg' },
      { name: 'Node.js', logo: 'skills/node-js.svg' },
      { name: 'Python', logo: 'skills/python.svg' },
      { name: 'GraphQL', logo: 'skills/graphql.svg' },
      { name: 'OpenAPI', logo: 'skills/openapi.svg' }
    ],
    frontend: [
      { name: 'Angular', logo: 'skills/angular.svg' },
      { name: 'React', logo: 'skills/react.svg' },
      { name: 'TypeScript', logo: 'skills/typescript.svg' },
      { name: 'JavaScript', logo: 'skills/javascript.svg' },
      { name: 'RxJS', logo: 'skills/rxjs.svg' },
      { name: 'NgRx', logo: 'skills/ngrx.svg' },
      { name: 'HTML5', logo: 'skills/html5.svg' },
      { name: 'CSS3', logo: 'skills/css3.svg' }
    ],
    devops: [
      { name: 'Docker', logo: 'skills/docker.svg' },
      { name: 'Kubernetes', logo: 'skills/kubernetes.svg' },
      { name: 'Terraform', logo: 'skills/terraform.svg' },
      { name: 'GitHub Actions', logo: 'skills/github-actions.svg' },
      { name: 'Jenkins', logo: 'skills/jenkins.svg' },
      { name: 'GoCD', logo: 'skills/gocd.svg' }
    ],
    database: [
      { name: 'PostgreSQL', logo: 'skills/postgresql.svg' },
      { name: 'AlloyDB', logo: 'skills/alloydb.svg' },
      { name: 'MongoDB', logo: 'skills/mongodb.svg' },
      { name: 'MySQL', logo: 'skills/mysql.svg' },
      { name: 'Cassandra', logo: 'skills/cassandra.svg' },
      { name: 'Redis', logo: 'skills/redis.svg' },
      { name: 'Elasticsearch', logo: 'skills/elasticsearch.svg' }
    ],
    data: [
      { name: 'Databricks', logo: 'skills/databricks.svg' },
      { name: 'ELK Stack', logo: 'skills/elk-stack.svg' }
    ],
    messaging: [
      { name: 'Kafka', logo: 'skills/kafka.svg' }
    ],
    testing: [
      { name: 'Cypress', logo: 'skills/cypress.png' },
      { name: 'Karma', logo: 'skills/karma.svg' },
      { name: 'Jasmine', logo: 'skills/jasmine.svg' },
      { name: 'JUnit', logo: 'skills/junit.png' },
      { name: 'SonarQube', logo: 'skills/sonarqube.svg' },
      { name: 'Taiko', logo: 'skills/taiko.svg' }
    ],
    tools: [
      { name: 'Git', logo: 'skills/git.svg' },
      { name: 'Jira', logo: 'skills/jira.svg' },
      { name: 'Confluence', logo: 'skills/confluence.svg' },
      { name: 'Postman', logo: 'skills/postman.svg' },
      { name: 'Agile/Scrum', logo: 'skills/agile-scrum.png' }
    ]
  });

  projectsData = signal<Project[]>([
    {
      name: 'Document Q&A with RAG',
      description: 'Built an interactive RAG application that lets users upload documents, rebuild vector indexes, and query content in natural language through LLM-backed responses, reducing document search time by about 70% compared with manual review.',
      technologies: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'FAISS']
    },
    {
      name: 'Real-Time Spam Detection Pipeline',
      description: 'Scalable ML pipeline on AWS that identifies spammers with 85% accuracy through real-time Kafka event streams, reducing fraudulent activity by 60%.',
      technologies: ['Python', 'AWS', 'S3', 'Lambda', 'SageMaker', 'Kafka']
    },
    {
      name: 'Twitter Sentiment Engine',
      description: 'Processed 10,000+ tweets per second using Kafka and Scala, delivering real-time sentiment dashboards with sub-second latency for marketing teams.',
      technologies: ['Kafka', 'Scala', 'Spark Streaming', 'Kibana']
    },
    {
      name: 'Portfolio Website',
      description: 'Responsive personal portfolio optimized for performance and accessibility, achieving 95+ Lighthouse scores across all metrics.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3']
    }
  ]);
}
