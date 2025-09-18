import TimelineItem from "./timelineItem";

const timelineItems = [
  {
    jobTitle: "Tech Consultant",
    companyName: "Deloitte",
    dates: "May 2023 — Aug 2025",
    jobDescription:
      "Full-stack development with React, Next.js, and Node.js to build performant, scalable web applications.",
  },
  {
    jobTitle: "LLMs - Generative AI for Engineers",
    companyName: "Postgraduate Degree at Técnico+",
    dates: "Mar 2025 — May 2025",
  },
  {
    jobTitle: "Master´s in Electrical and Computer Engineering",
    companyName: "Instituto Superior Técnico - ULisboa",
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
          jobTitle={item?.jobTitle}
          companyName={item?.companyName}
          dates={item?.dates}
          jobDescription={item?.jobDescription}
          isLast={id === timelineItems.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceSection;
