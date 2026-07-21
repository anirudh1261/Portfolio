import { useState, useEffect } from 'react';
import { playClick, playHover } from '@/hooks/useSoundEffects';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  InstagramIcon,
} from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'React Developer',
  'Python Developer',
  'Node.js Developer',
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);


  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 overflow-hidden">

      {/* Top-left code comment */}
      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/60 leading-relaxed font-medium">
          // portfolio.tsx
          <br />
          // version: 1.0.0
          <br />
          // status: production
          <br />
          // last_build: {new Date().toISOString().split('T')[0]}
        </p>
      </div>

      {/* Top-right line numbers */}
      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/40 leading-relaxed text-right font-medium">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="block">
              {String(i + 1).padStart(3, '0')}
            </span>
          ))}
        </p>
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 max-w-3xl mx-auto py-12">
        {/* Tag line / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-foreground/30 bg-background/80 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="font-mono text-xs text-foreground/90 tracking-[0.15em] uppercase font-medium">
            Open to Internships
          </span>
        </div>

        {/* Name */}
        <h1
          className="heading-brutal leading-[0.85]"
          style={{ fontSize: 'clamp(44px, 9vw, 120px)' }}
        >
          Ganji
          <br />
          <span className="text-foreground/20">Anirudh.</span>
        </h1>

        {/* Education Tag */}
        <p className="mt-4 font-mono text-xs md:text-sm text-foreground/80 tracking-wider font-semibold uppercase">
          B.Tech Computer Science Student @ SR University
        </p>

        {/* Semantic subtitle — visible to search engines, visually hidden */}
        <p
          className="sr-only"
          aria-hidden="false"
        >
          Ganji Anirudh — Full Stack Developer, AI/ML Engineer, and B.Tech Computer Science student at SR University, Warangal, Telangana. Specializing in React, Node.js, Python, FastAPI, and Machine Learning.
        </p>

        {/* Typewriter role */}
        <div
          className="mt-4 h-8 flex items-center justify-center"
          aria-label={`Ganji Anirudh is a ${roles[roleIndex]}`}
          role="text"
        >
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-foreground/50">
            {'< '}
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.15em] text-foreground/70 font-medium">
            {displayText}
          </span>
          <span
            className={`font-mono text-sm md:text-base text-foreground/70 ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            |
          </span>
          <span className="font-mono text-sm md:text-base tracking-[0.2em] text-foreground/50">
            {' />'}
          </span>
        </div>

        {/* Short Professional Introduction */}
        <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-foreground/80 leading-relaxed font-normal px-2">
          Full Stack Developer &amp; AI/ML Engineer skilled in building scalable web applications with <strong>React</strong>, <strong>Node.js</strong>, and <strong>Python</strong>, as well as AI solutions using <strong>FastAPI</strong>, <strong>LangChain</strong>, and Machine Learning.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 justify-center mt-6 max-w-md mx-auto" aria-label="Core technologies used by Ganji Anirudh">
          {[
            'React',
            'Node.js',
            'Python',
            'TypeScript',
            'FastAPI',
            'MongoDB',
            'Machine Learning',
            'LangChain',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 font-mono text-xs border-2 border-foreground/40 text-foreground/80 font-medium tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
              onMouseEnter={playHover}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Open to Opportunities Section */}
        <div className="mt-8 max-w-md mx-auto border-2 border-black bg-white p-5 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <p className="font-mono text-xs uppercase tracking-widest font-bold text-black mb-3 flex items-center gap-1.5">
            <span>🚀</span> Currently seeking:
          </p>
          <ul className="space-y-1.5 font-mono text-xs text-foreground/90 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-black font-bold">•</span> Software Engineering Internships
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black font-bold">•</span> Full Stack Development Internships
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black font-bold">•</span> AI/ML Internship Opportunities
            </li>
          </ul>
        </div>

        {/* Social links */}
        <nav aria-label="Ganji Anirudh's social profiles" className="flex gap-4 justify-center mt-8">
          {[
            {
              Icon: Github,
              href: 'https://github.com/anirudh1261',
              label: "View Ganji Anirudh's GitHub profile",
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/in/ganji-anirudh-8897133b0',
              label: "Connect with Ganji Anirudh on LinkedIn",
            },
            {
              Icon: InstagramIcon,
              href: 'https://instagram.com/anddyyyy_08',
              label: "Follow Ganji Anirudh on Instagram",
            },
            {
              Icon: Mail,
              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=anirudh.ganji15@gmail.com',
              label: 'Send Ganji Anirudh an email',
            },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              onClick={playClick}
              className="group relative inline-flex items-center justify-center p-3 border-2 border-black bg-white text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-black hover:text-white"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </nav>

        {/* Resume button */}
        <div className="mt-8">
          <a
            href="/Ganji_Anirudh_Resume.pdf"
            download="Ganji_Anirudh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-black bg-black text-white text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span>Download Resume</span>
            <span className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -translate-y-[1px] group-hover:translate-y-[1px] transition-transform duration-300"></span>
          </a>
        </div>
      </div>

      {/* Bottom-left info */}
      <div className="absolute bottom-10 left-6 md:left-10 z-10">
        <span className="text-foreground/80 text-xs tracking-[0.2em] uppercase font-mono font-medium">
          www.anirudh.dev
        </span>
      </div>

      {/* Bottom-right stats */}
      <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-foreground/80 text-right leading-relaxed font-medium">
          <p>const year = "3rd Year B.Tech";</p>
          <p>const projects = 5;</p>
          <p>const passion = Infinity;</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-5 h-5 text-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
