import { useState } from 'react';
import SectionBlock from './SectionBlock';
import { Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const certifications = [
  // Jun 2026
  {
    title: 'AWS AI Practitioner Learning Plan',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['AI', 'Machine Learning', 'AWS'],
    link: '/certificates/AWS Course/AWS_Artificial Intelligence practitioner Learning Plan.jpg',
  },
  {
    title: 'AWS: Developing Generative AI Solutions',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['Generative AI', 'AWS'],
    link: '/certificates/AWS Course/AWS_Developing Generative Artificial Intelligence Solutions.jpg',
  },
  {
    title: 'AWS: Developing Machine Learning Solutions',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['Machine Learning', 'AWS'],
    link: '/certificates/AWS Course/AWS_Developing Machine Learning Solutions.jpg',
  },
  {
    title: 'AWS: Essentials of Prompt Engineering',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['Prompt Engineering', 'AWS', 'AI'],
    link: '/certificates/AWS Course/AWS_Essentials of Prompt Engineering.jpg',
  },
  {
    title: 'AWS: Exploring Artificial Intelligence',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['AI', 'AWS'],
    link: '/certificates/AWS Course/AWS_Exploring Artificial Intelligence.jpg',
  },
  {
    title: 'AWS: Fundamentals of Machine Learning and AI',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['Machine Learning', 'AI', 'AWS'],
    link: '/certificates/AWS Course/AWS_Fundamental of machine learning and artificial Intelligence.jpg',
  },
  {
    title: 'AWS: Optimizing Foundation Models',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['Generative AI', 'LLM', 'AWS'],
    link: '/certificates/AWS Course/AWS_Optimizing Foundation Models.jpg',
  },
  {
    title: 'AWS: Responsible AI Practices',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['AI Ethics', 'AWS'],
    link: '/certificates/AWS Course/AWS_Responsible Artificial intelligence practices.jpg',
  },
  {
    title: 'AWS: Security, Compliance & Governance for AI Solutions',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2026',
    skills: ['AI Security', 'Cloud Security', 'AWS'],
    link: '/certificates/AWS Course/AWS_Security, Compliance, and Governence for AI Solutions.jpg',
  },
  {
    title: 'Introduction to Cybersecurity (I2CS) – Updated',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2026',
    skills: ['Cybersecurity', 'Networking'],
    link: '/certificates/I2CSUpdate20260608-31-3jbybc-1.png',
  },
  {
    title: 'Cyber Security with Generative AI',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 2026',
    skills: ['Cybersecurity', 'Generative AI'],
    link: '/certificates/IBM (cyber security with generative AI).pdf',
  },
  // Mar 2026
  {
    title: 'Introduction to Cryptography and Network Security',
    issuer: 'Saylor Academy',
    date: 'Mar 2026',
    credentialId: '4279424086GG',
    skills: ['Cybersecurity'],
    link: '/certificates/cyber security.pdf',
  },
  {
    title: 'Prompt Engineering for Everyone',
    issuer: 'CognitiveClass (IBM)',
    date: 'Mar 2026',
    skills: ['Prompt Engineering'],
    link: '/certificates/prompt engineering for everyone(IBM).pdf',
  },
  {
    title: 'User Experience Design Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Mar 2026',
    skills: ['UX Design', 'HCI'],
    link: '/certificates/HCI certificate.pdf',
  },
  // Feb 2026
  {
    title: 'Level up Cybersecurity with Generative AI',
    issuer: 'IBM SkillsBuild',
    date: 'Feb 2026',
    link: '/certificates/Level Up Cybersecurity with Generative AI.jpg',
  },
  {
    title: 'An Introduction to Web Applications Architecture',
    issuer: 'The Open University',
    date: 'Feb 2026',
    link: '/certificates/An introduction to web applications architecture.pdf',
  },
  {
    title: 'Introducing Computing and IT',
    issuer: 'The Open University',
    date: 'Feb 2026',
    link: '/certificates/Introducing computing and IT.pdf',
  },
  {
    title: 'Additive Manufacturing (3D Printing)',
    issuer: 'The Open University',
    date: 'Feb 2026',
    link: '/certificates/2403A51361(3d).pdf',
  },
  {
    title: 'PHYS101: Introduction to Mechanics',
    issuer: 'Saylor Academy',
    date: 'Feb 2026',
    link: '/certificates/Introduction to mechanics.pdf',
  },
  // Nov 2025
  {
    title: 'Data Analyst Virtual Experience',
    issuer: 'Deloitte (Forage)',
    date: 'Nov 2025',
    skills: ['Data Analytics', 'Business Intelligence'],
    link: '/certificates/Delloite(Data analyst)_page-0001.jpg',
  },
  {
    title: 'JP Morgan Software Engineering Virtual Experience',
    issuer: 'JP Morgan Chase (Forage)',
    date: 'Nov 2025',
    skills: ['Software Engineering', 'Finance'],
    link: '/certificates/JP_Morgan_page-0001.jpg',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Saylor Academy',
    date: 'Nov 2025',
    link: '/certificates/certificate 1(DAAV).pdf',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    link: '/certificates/CC certificate.pdf',
  },
  {
    title: 'CCNA: Introduction to Networks (Part 2)',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    skills: ['Networking', 'CCNA'],
    link: '/certificates/CC certificate 2.pdf',
  },
  // Oct 2025
  {
    title: 'GenAI for Professionals: 10X Your Productivity',
    issuer: 'Udemy',
    date: 'Oct 2025',
    link: '/certificates/certificate 5.pdf',
  },
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    issuer: 'Udemy',
    date: 'Oct 2025',
    link: '/certificates/certificate 4.pdf',
  },
  {
    title: 'GitHub Copilot for Developers',
    issuer: 'Infosys Springboard',
    date: 'Oct 2025',
    link: '/certificates/certificate 3.pdf',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Infosys Springboard',
    date: 'Oct 2025',
    link: '/certificates/certificate 2.pdf',
  },
  {
    title: 'AWS Academy Graduate – Cloud Web Application Builder',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    link: '/certificates/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251026-32-b5yqdj.pdf',
  },
  {
    title: 'AWS Academy Graduate – Cloud Security Builder',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    link: '/certificates/AWS_Academy_Graduate___Cloud_Security_Builder___Training_Badge_Badge20251026-31-4pnghe.pdf',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    link: '/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251026-32-59f0eo.pdf',
  },
  {
    title: 'AWS Academy Graduate – Cloud Developing',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    link: '/certificates/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20251026-32-q060wk.pdf',
  },
  {
    title: 'PHP Development with ChatGPT: Practical Web Development',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 13.pdf',
  },
  {
    title: 'Software Development with ChatGPT: Generating Code with AI',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 7.pdf',
  },
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Google (Coursera)',
    date: 'Oct 2025',
    link: '/certificates/certificate 1.pdf',
  },
  {
    title: 'AI-Powered Development with Codepal: Write & Test To-Do App',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 14.pdf',
  },
  {
    title: 'Using JavaScript with AI: Enhancing Development Workflows',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 9.pdf',
  },
  {
    title: 'Gen AI for Software Development: Code Generation for Python',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 10.pdf',
  },
  {
    title: 'Python Development with ChatGPT: Fullstack App Development',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 12.pdf',
  },
  {
    title: 'Gen AI for Developers: Web Development with Python & Copilot',
    issuer: 'Coursera Project Network',
    date: 'Oct 2025',
    link: '/certificates/certificate 8.pdf',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud (Coursera)',
    date: 'Oct 2025',
    link: '/certificates/certificate 6.pdf',
  },
  // Mar 2025
  {
    title: 'Elastic Collision in Particle Physics',
    issuer: 'MindLuster',
    date: 'Mar 2025',
    link: '/certificates/Elastic collosions in particle physics.pdf',
  },
  {
    title: 'Certified Ethical Hacker Practice',
    issuer: 'MindLuster',
    date: 'Mar 2025',
    link: '/certificates/Certified ethical hacker practice.pdf',
  },
  {
    title: 'Become a Linear Algebra Master',
    issuer: 'Udemy',
    date: 'Mar 2025',
    link: '/certificates/MATRIX.pdf',
  },
  {
    title: 'Network Types for Beginners',
    issuer: 'MindLuster',
    date: 'Mar 2025',
    link: '/certificates/Network types for begineers.pdf',
  },
  {
    title: 'Unity 3D Game Physics',
    issuer: 'MindLuster',
    date: 'Mar 2025',
    link: '/certificates/unity 3d game physics.pdf',
  },
  {
    title: 'Careers in Cybersecurity for Engineering',
    issuer: 'MindLuster',
    date: 'Mar 2025',
    link: '/certificates/carrers in cybersecurity for engineering .pdf',
  },
  // Cisco / Online Courses
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    skills: ['Data Analytics'],
    link: '/certificates/Data_Analytics_Essentials_certificate_2403a51361-sru-edu-in_67b00f71-a66a-41ce-98f8-33162efe2260.pdf',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    skills: ['Cybersecurity'],
    link: '/certificates/Introduction_to_Cybersecurity_certificate_2403a51361-sru-edu-in_bd41697b-9369-4717-bfb6-01a7ea6b4327-1.png',
  },
  {
    title: 'Data Structures',
    issuer: 'Online Course',
    date: '2025',
    skills: ['DSA', 'Programming'],
    link: '/certificates/data structures.pdf',
  },
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: '2025',
    skills: ['SQL', 'Database'],
    link: '/certificates/sql_advanced certificate.pdf',
  },
  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    date: '2025',
    skills: ['Python'],
    link: '/certificates/hackerrank(python).png',
  },
  {
    title: 'Achievement Certificate',
    issuer: 'Online Platform',
    date: '2025',
    link: '/certificates/certificate-5yrzkkw7kadb-1777304884_page-0001.jpg',
  },
  {
    title: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    date: '2026',
    skills: ['AI', 'Microsoft'],
    link: '/certificates/ai-skills-fest-2026.png',
  },
  // 2025 - Hackathons & Events
  {
    title: 'AzureDevCon 2025 Participation',
    issuer: 'SR UNIVERSITY',
    date: '2025',
    link: '/certificates/Azure Hackthon participation certificates-43.pdf',
  },
  {
    title: 'INNO-VA-THON 2.0 MEGA HACKATHON',
    issuer: 'VNR VJIET',
    date: '2025',
    link: '/certificates/inno-va-thon 2.0.pdf',
  },
  {
    title: 'EFOS Hackathon Participation',
    issuer: 'EFOS',
    date: '2025',
    link: '/certificates/EFOS hackthon.jpeg',
  },
  {
    title: 'HackOS Hackathon',
    issuer: 'HackOS',
    date: '2025',
    link: '/certificates/hackOS.png',
  },
  {
    title: 'UDBHAVA X Event Participation',
    issuer: 'UDBHAVA',
    date: '2025',
    link: '/certificates/UDBHAVA X(1)-pages.pdf',
  },
  {
    title: 'VIVITSU \'26 Hackathon Achievement',
    issuer: 'GRIET',
    date: '2026',
    link: '/certificates/vivistu .jpeg',
  },
  {
    title: 'Project Expo 2K26 Participation',
    issuer: 'SR University',
    date: '2026',
    link: '/certificates/pragati-expo.jpeg',
  },
  {
    title: 'PowerBI Workshop',
    issuer: 'OfficeMaster',
    date: '2025',
    link: '/certificates/Certificate(powerBI).pdf',
  },
  {
    title: 'Data Navigator Badge',
    issuer: 'LeetCode',
    date: '2025',
    link: '/certificates/Data bagde.png',
  },
];

const INITIAL_SHOW = 4;

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  return (
    <SectionBlock id="experience" title="Certifications">
      <div className="space-y-6">
        <p className="body-text mb-4">
          I have earned <strong>{certifications.length} certifications</strong>{' '}
          from industry leaders like AWS, Google, IBM, Cisco, Microsoft, HackerRank, Coursera, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayed.map((cert, idx) => (
            <div
              key={`${cert.title}-${idx}`}
              className="group flex items-start gap-4 p-5 border-2 border-black/10 bg-white hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-2 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                  <span className="text-foreground/70 text-xs font-medium">
                    {cert.issuer}
                  </span>
                  <span className="text-foreground/30 text-xs hidden sm:inline">
                    •
                  </span>
                  <span className="font-mono text-[11px] text-foreground/50">
                    {cert.date}
                  </span>
                </div>
                {'credentialId' in cert && (
                  <div className="mt-1 text-[10px] text-foreground/40 font-mono">
                    ID: {cert.credentialId}
                  </div>
                )}
                {'skills' in cert && cert.skills && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 bg-black/5 border border-black/5 text-[9px] font-bold uppercase tracking-wider text-black/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                {'link' in cert && cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold uppercase tracking-wider text-black hover:underline hover:gap-2 transition-all duration-200"
                  >
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {certifications.length > INITIAL_SHOW && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 border-2 border-black bg-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              {showAll
                ? `Show Less`
                : `View All ${certifications.length} Certifications`}
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </SectionBlock>
  );
};

export default ExperienceSection;
