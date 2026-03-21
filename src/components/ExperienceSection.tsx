import { useState } from 'react';
import SectionBlock from './SectionBlock';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const certifications = [
  // Mar 2026
  {
    title: 'Prompt Engineering for Everyone',
    issuer: 'CognitiveClass (IBM)',
    date: 'Mar 2026',
  },
  // Feb 2026
  {
    title: 'Level up Cybersecurity with Generative AI',
    issuer: 'IBM',
    date: 'Feb 2026',
  },
  {
    title: 'An Introduction to Web Applications Architecture',
    issuer: 'The Open University',
    date: 'Feb 2026',
  },
  {
    title: 'Introducing Computing and IT',
    issuer: 'The Open University',
    date: 'Feb 2026',
  },
  {
    title: 'Additive Manufacturing (3D Printing)',
    issuer: 'The Open University',
    date: 'Feb 2026',
  },
  // Nov 2025
  {
    title: 'Python for Data Science',
    issuer: 'Saylor Academy',
    date: 'Nov 2025',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    date: 'Nov 2025',
  },
  // Oct 2025
  {
    title: 'GenAI for Professionals: 10X Your Productivity',
    issuer: 'Udemy',
    date: 'Oct 2025',
  },
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    issuer: 'Udemy',
    date: 'Oct 2025',
  },
  {
    title: 'GitHub Copilot for Developers',
    issuer: 'Infosys Springboard',
    date: 'Oct 2025',
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Infosys Springboard',
    date: 'Oct 2025',
  },
  {
    title: 'AWS Academy Graduate – Cloud Web Application Builder',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
  },
  {
    title: 'AWS Academy Graduate – Cloud Security Builder',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
  },
  {
    title: 'AWS Academy Graduate – Cloud Developing',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
  },
  {
    title: 'PHP Development with ChatGPT: Practical Web Development',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Software Development with ChatGPT: Generating Code with AI',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Google',
    date: 'Oct 2025',
  },
  {
    title: 'GitHub Copilot with Python: Creating Text Games',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'AI-Powered Development with Codepal: Write & Test To-Do App',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Using JavaScript with AI: Enhancing Development Workflows',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Gen AI for Software Development: Code Generation for Python',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Python Development with ChatGPT: Fullstack App Development',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  {
    title: 'Gen AI for Developers: Web Development with Python & Copilot',
    issuer: 'Coursera',
    date: 'Oct 2025',
  },
  // Mar 2025
  {
    title: 'Elastic Collision in Particle Physics',
    issuer: 'MindLuster',
    date: 'Mar 2025',
  },
  {
    title: 'Certified Ethical Hacker Practice',
    issuer: 'MindLuster',
    date: 'Mar 2025',
  },
  {
    title: 'Become a Linear Algebra Master',
    issuer: 'Udemy',
    date: 'Mar 2025',
  },
  {
    title: 'Network Types for Beginners',
    issuer: 'MindLuster',
    date: 'Mar 2025',
  },
  {
    title: 'Unity 3D Game Physics',
    issuer: 'MindLuster',
    date: 'Mar 2025',
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
          from industry leaders like AWS, Google, IBM, Cisco, Coursera, and more.
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
