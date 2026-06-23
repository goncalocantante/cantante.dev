import TimelineItem from "./TimelineItem";

interface TimelineItemData {
  jobTitle: string;
  companyName: string;
  dates: string;
  jobDescription?: string;
}

const timelineItems: TimelineItemData[] = [
  {
    jobTitle: "Founder & Lead Engineer",
    companyName: "EloClinico (Healthcare SaaS)",
    dates: "Aug 2025 — Present",
    jobDescription:
      "Architected and built a secure, multi-tenant scheduling and clinic management SaaS. Implemented strict database-level schema isolation in PostgreSQL, Next.js dashboard UI, and integrated Stripe payments via webhook infrastructure to automate subscription billing.",
  },
  {
    jobTitle: "Tech Consultant & Full Stack Developer",
    companyName: "Deloitte",
    dates: "May 2023 — Aug 2025",
    jobDescription:
      "Engineered performant full-stack web applications using React, Next.js, Node.js, and TypeScript. Optimized complex workflows and state management for enterprise-scale clients, boosting system efficiency and data processing speeds.",
  },
  {
    jobTitle: "Postgraduate in LLMs - Generative AI for Engineers",
    companyName: "Técnico+ (Instituto Superior Técnico)",
    dates: "Mar 2025 — May 2025",
  },
  {
    jobTitle: "Master's in Electrical and Computer Engineering",
    companyName: "Instituto Superior Técnico (IST - ULisboa)",
    dates: "Sep 2017 — Jun 2023",
  },
];

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <h2 className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 subheading mb-6">
        Experience
      </h2>
      {timelineItems.map((item, id) => (
        <TimelineItem
          key={`job-${id}`}
          jobTitle={item.jobTitle}
          companyName={item.companyName}
          dates={item.dates}
          jobDescription={item.jobDescription}
          isLast={id === timelineItems.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
