import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import InternshipSection from '@/components/InternshipSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import Terminal from '@/components/Terminal';
import Finale from '@/components/Finale';
import MatrixRain from '@/components/MatrixRain';

import { Helmet } from 'react-helmet-async';

const Index = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ganji-anirudh.vercel.app/#person",
        "name": "Ganji Anirudh",
        "jobTitle": "Full Stack Developer & AI/ML Enthusiast",
        "url": "https://ganji-anirudh.vercel.app/",
        "image": "https://ganji-anirudh.vercel.app/og-image.png",
        "sameAs": [
          "https://github.com/anirudh1261",
          "https://www.linkedin.com/in/ganji-anirudh-8897133b0",
          "https://instagram.com/anddyyyy_08"
        ],
        "email": "anirudh.ganji15@gmail.com",
        "telephone": "+919550533315",
        "description": "Passionate Computer Science student at SR University specializing in Full Stack Web Development, Python, React, and Machine Learning.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "SR University, Warangal",
          "url": "https://sru.edu.in/"
        },
        "knowsAbout": [
          "Python",
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "FastAPI",
          "Machine Learning",
          "Artificial Intelligence",
          "SQL",
          "MongoDB",
          "Tailwind CSS",
          "Git",
          "TensorFlow"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ganji-anirudh.vercel.app/#website",
        "url": "https://ganji-anirudh.vercel.app/",
        "name": "Ganji Anirudh Portfolio",
        "description": "Portfolio of Ganji Anirudh - Full Stack Developer & AI/ML Enthusiast specializing in Python, React, and Machine Learning.",
        "publisher": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://ganji-anirudh.vercel.app/#webpage",
        "url": "https://ganji-anirudh.vercel.app/",
        "name": "Ganji Anirudh | Full Stack Developer",
        "isPartOf": {
          "@id": "https://ganji-anirudh.vercel.app/#website"
        },
        "about": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "description": "Portfolio of Ganji Anirudh - Full Stack Developer & AI/ML Enthusiast specializing in Python, React, and Machine Learning."
      },
      {
        "@type": "CollectionPage",
        "@id": "https://ganji-anirudh.vercel.app/#projects-page",
        "url": "https://ganji-anirudh.vercel.app/#projects",
        "name": "Ganji Anirudh's Projects",
        "description": "Showcase of projects built by Ganji Anirudh, including RAG systems, traffic analysis, and situation awareness apps.",
        "isPartOf": {
          "@id": "https://ganji-anirudh.vercel.app/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ganji-anirudh.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ganji-anirudh.vercel.app/"
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": "https://ganji-anirudh.vercel.app/#project-rag",
        "name": "RAG Projects Master",
        "description": "A comprehensive collection of Retrieval-Augmented Generation (RAG) applications and tutorials built with LangChain.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/RAG_projects_master",
        "programmingLanguage": "Python"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://ganji-anirudh.vercel.app/#project-traffic",
        "name": "Real-Time Traffic Intelligence & Analysis System",
        "description": "Transforms live camera feeds into actionable traffic insights using YOLOv8, OpenCV, and Flask.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/Real-time-traffic-analysis",
        "programmingLanguage": "Python"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://ganji-anirudh.vercel.app/#project-orbitguard",
        "name": "OrbitGuard",
        "description": "A Space Situational Awareness (SSA) system that tracks real satellites in real-time.",
        "creator": {
          "@id": "https://ganji-anirudh.vercel.app/#person"
        },
        "codeRepository": "https://github.com/anirudh1261/OrbitGuard",
        "url": "https://orbit-guard-five.vercel.app/",
        "programmingLanguage": "Python"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Helmet>
        <title>Ganji Anirudh | Full Stack Developer & AI/ML Enthusiast</title>
        <meta name="description" content="Portfolio of Ganji Anirudh - Full Stack Developer & AI/ML Enthusiast specializing in Python, React, and Machine Learning. Discover my projects, certifications, and technical skills." />
        <link rel="canonical" href="https://ganji-anirudh.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ganji-anirudh.vercel.app/" />
        <meta property="og:title" content="Ganji Anirudh | Full Stack Developer & AI/ML Enthusiast" />
        <meta property="og:description" content="Portfolio of Ganji Anirudh - Full Stack Developer & AI/ML Enthusiast specializing in Python, React, and Machine Learning. Discover my projects, certifications, and technical skills." />
        <meta property="og:image" content="https://ganji-anirudh.vercel.app/og-image.png" />
        <meta property="og:site_name" content="Ganji Anirudh Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ganji-anirudh.vercel.app/" />
        <meta name="twitter:title" content="Ganji Anirudh | Full Stack Developer & AI/ML Enthusiast" />
        <meta name="twitter:description" content="Portfolio of Ganji Anirudh - Full Stack Developer & AI/ML Enthusiast specializing in Python, React, and Machine Learning. Discover my projects, certifications, and technical skills." />
        <meta name="twitter:image" content="https://ganji-anirudh.vercel.app/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Global matrix rain — sits behind every section */}
      <MatrixRain />
      <Navbar />
      <ScrollToTop />
      <Terminal />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <InternshipSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Finale />
    </div>
  );
};

export default Index;
