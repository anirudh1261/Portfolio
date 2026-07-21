import {
  Github,
  Linkedin,
  ArrowUp,
  Heart,
  InstagramIcon,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/anirudh1261',
      label: "Ganji Anirudh's GitHub profile",
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ganji-anirudh-8897133b0',
      label: "Ganji Anirudh's LinkedIn profile",
    },
    {
      icon: InstagramIcon,
      href: 'https://instagram.com/anddyyyy_08',
      label: "Ganji Anirudh's Instagram",
    },
  ];

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Certifications', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-white border-t-4 border-black pt-16 pb-32 px-6 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <address className="md:col-span-2 space-y-6 not-italic">
            <p className="text-2xl font-black uppercase tracking-tighter italic">
              GANJI ANIRUDH<span className="text-foreground">.....</span>
            </p>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Full Stack Developer &amp; AI/ML Engineer focused on building
              high-performance web applications with clean, functional design
              and exceptional user experience.
            </p>
            <p className="flex items-center gap-2 text-xs font-mono text-foreground/50 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Warangal, Telangana, India
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </address>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-black/40">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:underline underline-offset-4 decoration-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Column */}
          <div className="space-y-6 flex flex-col items-start md:items-end">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-black/40">
              Back to start
            </h3>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="group flex items-center gap-3 px-6 py-3 border-2 border-black bg-white font-bold uppercase tracking-wider transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Top{' '}
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-12 lg:px-0">
          <p className="text-xs font-mono text-black/40 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Ganji Anirudh — Full Stack Developer &amp; AI/ML Engineer, Warangal
          </p>
          <p className="text-xs font-mono text-black/40 flex items-center justify-center gap-2 uppercase tracking-widest text-center md:text-right">
            Designed &amp; Engineered with{' '}
            <Heart className="w-3.5 h-3.5 text-black fill-black animate-heartbeat inline-block" />{' '}
            by Anirudh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

