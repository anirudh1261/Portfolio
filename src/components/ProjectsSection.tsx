import { Github, ExternalLink } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { Badge } from './ui/badge';
import { playHover, playClick } from '@/hooks/useSoundEffects';

const projects = [
  {
    title: 'AyuLink',
    isNew: true,
    description:
      'A unified healthcare infrastructure platform that works even without internet using mesh-based hardware devices. Enables real-time patient monitoring, connects patients, doctors, and families across rural & urban areas, and ensures 24/7 health tracking for better care.',
    tags: ['TypeScript', 'C', 'IoT', 'Smart Health', 'Remote Monitoring', 'Mesh Networking', 'Hackathon'],
    githubUrl: 'https://github.com/anirudh1261',
    liveUrl: 'https://fight-club-ht-01.vercel.app/',
  },
  {
    title: 'OrbitGuard',
    description:
      'A Space Situational Awareness (SSA) system that tracks real satellites in real-time. Fetches live TLE data, predicts future orbital positions using Skyfield, detects potential collisions, and visualises everything on an interactive 3D globe. Positions update every 1.5 seconds.',
    tags: [
      'Python',
      'Flask',
      'JavaScript',
      'Globe.gl',
      'Skyfield',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/anirudh1261/OrbitGuard',
    liveUrl: 'https://orbit-guard-five.vercel.app/',
  },
  {
    title: 'Cyberattack Detection ML',
    description:
      'A machine learning system that analyses cybersecurity data and predicts potential cyberattacks in real time. Trained using a cybersecurity dataset, saved via Pickle, and integrated with a Python Tkinter UI so users can interact with the model and get live threat predictions.',
    tags: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Tkinter',
      'Pickle',
      'Jupyter Notebook',
    ],
    githubUrl: 'https://github.com/anirudh1261/cyberattack-detection-ml',
    liveUrl: 'https://github.com/anirudh1261/cyberattack-detection-ml',
  },
  {
    title: 'Digit Recognition with Drawing UI',
    description:
      'An interactive AI application where users can draw digits on a canvas and get real-time predictions from a trained CNN model. Features a Tkinter-based drawing UI connected directly to a deep learning model trained on the MNIST dataset.',
    tags: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Tkinter',
      'NumPy',
      'Matplotlib',
    ],
    githubUrl: 'https://github.com/anirudh1261/digit-recognition-with-drawing-ui',
    liveUrl: 'https://github.com/anirudh1261/digit-recognition-with-drawing-ui',
  },
  {
    title: 'Wifi Cracker',
    description:
      'A command-line based cybersecurity tool for wireless network security analysis and vulnerability testing. Features network scanning, handshake capture, wordlist integration, and security audits for WPA/WPS protocols.',
    tags: ['Python', 'Linux', 'Network Security', 'Ethical Hacking', 'WiFi Security'],
    githubUrl: 'https://github.com/anirudh1261/Wifi-Cracker',
    liveUrl: 'https://github.com/anirudh1261/Wifi-Cracker',
  },
  {
    title: 'Mini Music Player',
    description:
      'A lightweight and responsive Mini Player application that delivers a smooth and intuitive media playback experience. Features audio playback with play/pause/seek controls, dynamic media loading, and a clean responsive UI design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/anirudh1261/mini-player-master',
    liveUrl: 'https://mini-player-master.vercel.app',
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-x-visible pt-6 pb-12 md:py-0 snap-x snap-mandatory scrollbar-hide">
      {projects.map((project) => (
        <div
          key={project.title}
          onMouseEnter={playHover}
          className="group relative border-2 border-black p-6 flex flex-col justify-between hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white min-w-[290px] w-[85vw] md:w-auto md:min-w-0 snap-start"
        >
          {'isNew' in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12 group-hover:rotate-6 transition-transform">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-2xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
