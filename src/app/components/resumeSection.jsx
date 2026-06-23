import Image from "next/image";

const ResumeSection = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <h2 className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 subheading mb-6">
        Resume
      </h2>
      <p className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 text-body leading-relaxed">
        My background spans a Master&apos;s in Electrical & Computer Engineering
        from Instituto Superior Técnico (Lisbon), 2+ years at Deloitte as a Full Stack Developer engineering scalable web applications, and architecting secure SaaS products. Having recently completed postgraduate specialization in Generative AI and LLMs, I combine deep engineering foundations with modern web technologies to build high-impact software solutions.
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
