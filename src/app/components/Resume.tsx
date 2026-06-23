import ResumeSection from "./ResumeSection";
import TechStackSection from "./TechStackSection";
import ExperienceSection from "./ExperienceSection";

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
