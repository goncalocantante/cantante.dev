import Image from "next/image";

const ResumeSection = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <h2 className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 subheading mb-6">
        Resume
      </h2>
      <p className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 text-body ">
        Here&apos;s a snapshot of my work so far — from full-stack roles in
        consulting and non-profits to personal projects and hackathons. I focus
        on clean code, product impact, and learning fast. If you'd like the full
        PDF version, feel free to reach out.
      </p>
      <Image
        src="/images/wavy-divider.svg"
        width="160"
        height="12"
        alt="Wavy Line Section Divider"
        className="col-start-2 col-span-10 md:col-start-4 md:col-span-8 mt-4"
      />
    </div>
  );
};

export default ResumeSection;
