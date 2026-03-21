import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm a passionate 2nd-year Computer Science student at SR University,
          focused on becoming a proficient full-stack developer. I believe in the
          power of clean code and well-designed interfaces to communicate ideas
          effectively.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I enjoy designing responsive user interfaces and developing robust
          backend systems. I actively participate in hackathons and work on
          real-time projects to gain practical experience beyond academics.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I'm always open to collaborations, internships, and opportunities
          where I can contribute, learn, and grow in the tech industry. My
          technical journey spans across web development, machine learning, and
          AI — and I'm constantly exploring new technologies.
        </p>
      </div>
    </div>

  </SectionBlock>
);

export default AboutSection;
