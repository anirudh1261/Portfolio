import SectionBlock from './SectionBlock';
import { Briefcase, ExternalLink, Building2, CalendarDays, FileText } from 'lucide-react';

const internships = [
  {
    role: 'Full Stack Developer Intern',
    company: 'InternCourse',
    duration: 'May 2026 – Jul 2026',
    description:
      'Successfully completed a 2-month intensive internship program specializing in Full Stack Development, designing responsive user interfaces, and implementing robust server-side functionalities.',
    certificates: [
      {
        label: 'Internship Certificate',
        link: '/certificates/Internship_ceritificates/InternCourse_Internship_Certificate.pdf',
      },
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: '1Stop',
    duration: '2025',
    description:
      'Completed a hands-on internship gaining practical industry experience in software development and project execution.',
    certificates: [
      {
        label: 'Internship Certificate',
        link: '/certificates/Internship_ceritificates/Internship_Certificate - Ganji_Anirudh_page-0001.jpg',
      },
      {
        label: 'Internship Certificate (Copy 2)',
        link: '/certificates/Internship_ceritificates/Internship_Certificate---Ganji_Anirudh-1/Internship_Certificate - Ganji_Anirudh (1)_page-0001.jpg',
      },
      {
        label: 'Project Completion Certificate',
        link: '/certificates/Internship_ceritificates/Project_Completion_Certificate---Ganji_Anirudh/Project_Completion_Certificate - Ganji_Anirudh_page-0001.jpg',
      },
      {
        label: 'Project Completion Certificate (Copy 2)',
        link: '/certificates/Internship_ceritificates/Project_Completion_Certificate---Ganji_Anirudh-1/Project_Completion_Certificate - Ganji_Anirudh (1)_page-0001.jpg',
      },
      {
        label: 'Certificate of Participation',
        link: '/certificates/Internship_ceritificates/Certificate_of_Participation - Ganji_Anirudh.pdf',
      },
      {
        label: 'Certificate of Participation (Copy 2)',
        link: '/certificates/Internship_ceritificates/Certificate_of_Participation - Ganji_Anirudh (1).pdf',
      },
    ],
  },
];

const InternshipSection = () => {
  return (
    <SectionBlock id="internship" title="Internship">
      <div className="space-y-8">
        <p className="body-text mb-8">
          Real-world industry exposure through hands-on internship programs,
          applying academic knowledge to practical projects and earning{' '}
          <strong>verified completion credentials</strong>.
        </p>

        {internships.map((intern, idx) => (
          <div
            key={idx}
            className="group relative border-2 border-black/10 bg-white hover:border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-black group-hover:w-full transition-all duration-500" />

            <div className="p-6 md:p-8">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Icon badge */}
                  <div className="p-3 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-foreground tracking-tight">
                      {intern.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <span className="flex items-center gap-1.5 text-foreground/70 text-sm font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        {intern.company}
                      </span>
                      <span className="text-foreground/30 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-foreground/50">
                        <CalendarDays className="w-3 h-3" />
                        {intern.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <span className="self-start px-3 py-1 border-2 border-black bg-black text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  Completed
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 pl-14">
                {intern.description}
              </p>

              {/* Divider */}
              <div className="border-t-2 border-black/8 mb-5 mx-0" />

              {/* Certificates */}
              <div className="pl-14">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-3.5 h-3.5 text-foreground/50" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">
                    Verified Credentials
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {intern.certificates.map((cert, cIdx) => (
                    <a
                      key={cIdx}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cert inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black/20 bg-black/3 hover:border-black hover:bg-black hover:text-white text-[11px] font-bold uppercase tracking-wider text-black transition-all duration-200 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-3 h-3 group-hover/cert:rotate-12 transition-transform duration-200" />
                      {cert.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
};

export default InternshipSection;
