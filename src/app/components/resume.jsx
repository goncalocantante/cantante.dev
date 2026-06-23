import ResumeSection from "./resumeSection";
import TechStackSection from "./techStackSection";
import ExperienceSection from "./experienceSection";

const Resume = () => {
  return (
    <section className="min-h-dvh">
      <ResumeSection />
      <TechStackSection />
      <ExperienceSection />
    </section>
  );
};

export default Resume;
