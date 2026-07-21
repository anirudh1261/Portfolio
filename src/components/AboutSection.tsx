import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';
import { Link } from 'react-router-dom';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <article
      aria-label="About Ganji Anirudh"
      className="flex flex-col md:flex-row items-center md:items-start gap-12"
    >
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm <strong>Ganji Anirudh</strong>, a passionate B.Tech Computer
          Science student (Class of 2028) at{' '}
          <strong>SR University, Warangal, Telangana</strong>. I build
          full-stack web applications and AI-powered systems — driven by a
          belief that clean code and thoughtful design can genuinely improve
          people's lives.
        </p>
        <p className="body-text max-w-2xl mt-6">
          My core stack spans <strong>React</strong> and{' '}
          <strong>TypeScript</strong> on the frontend, and{' '}
          <strong>Node.js</strong>, <strong>Express</strong>, and{' '}
          <strong>FastAPI</strong> on the backend — backed by{' '}
          <strong>MongoDB</strong> and SQL databases. On the AI side, I work
          with <strong>Python</strong>, <strong>LangChain</strong>,{' '}
          <strong>TensorFlow</strong>, and <strong>scikit-learn</strong> to
          build Retrieval-Augmented Generation (RAG) systems, computer-vision
          pipelines, and machine-learning models.
        </p>
        <p className="body-text max-w-2xl mt-6">
          Outside the classroom, I stay sharp through{' '}
          <strong>hackathons</strong> — including INNO-VA-THON 2.0, HackOS,
          VIVITSU '26, and EFOS — where I've shipped real prototypes under
          pressure. I also contribute to{' '}
          <strong>open-source projects</strong> on GitHub and continuously
          expand my knowledge through certifications from AWS, Google, IBM,
          Microsoft, and Cisco.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I'm currently open to <strong>software engineering internships</strong>{' '}
          and <strong>collaborations</strong> where I can apply my skills in
          full-stack development and AI to solve meaningful, real-world
          problems. If you're building something exciting, I'd love to hear
          about it. You can also read my{' '}
          <Link
            to="/about"
            className="font-bold underline underline-offset-4 decoration-2 hover:text-black transition-colors"
            aria-label="Read Ganji Anirudh's detailed biography page"
          >
            detailed biography
          </Link>{' '}
          to learn more about my academic background, career goals, and project details.
        </p>
      </div>
    </article>
  </SectionBlock>
);

export default AboutSection;

