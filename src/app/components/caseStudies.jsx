import Image from "next/image";

const CaseStudies = () => {
  return (
    <section id="case-studies-section" className="grid grid-cols-12 mb-16">
      <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6">
        <h2 className="subheading mb-6">
          Case Study: EloClinico
        </h2>
        <h3 className="text-highlight font-playfair font-bold text-xl mb-4">
          Secure Multi-Tenant Healthcare SaaS MVP
        </h3>
        
        <div className="text-body flex flex-col gap-6 mb-8 leading-relaxed">
          <div>
            <h4 className="font-semibold text-white mb-2">The Problem</h4>
            <p className="text-white/80">
              Clinical psychologists face significant administrative overhead managing patient scheduling, session notes, and billing. To solve this, I designed a SaaS platform that eliminates manual scheduling friction while adhering to strict healthcare privacy requirements.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">The Architecture</h4>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>
                <strong>Data Isolation:</strong> Implemented a secure multi-tenant architecture in PostgreSQL, ensuring strict tenant isolation between clinics to secure sensitive patient health information.
              </li>
              <li>
                <strong>Stripe Payments:</strong> Integrated Stripe payment processing with robust webhook handler systems for automated, real-time subscription lifecycle management and secure invoicing.
              </li>
              <li>
                <strong>Robust Stack:</strong> Engineered the frontend and backend using Next.js, TypeScript, and TailwindCSS for a seamless, type-safe development workflow.
              </li>
              <li>
                <strong>User Validation:</strong> Designed an intuitive, high-performance scheduling calendar and patient dashboard to minimize page load times and interface latency.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">The Impact</h4>
            <p className="text-white/80">
              Successfully launched as a validated MVP with active clinical psychologists, reducing scheduling administrative overhead by over 50% and ensuring full data auditability.
            </p>
          </div>
        </div>

        {/* Dashboard Preview Image */}
        <div className="border border-highlight/20 rounded-xl overflow-hidden shadow-2xl shadow-black mb-10 transition-colors hover:border-highlight/40">
          <Image
            src="/images/eloclinico_dashboard.png"
            width={1200}
            height={1200}
            alt="EloClinico SaaS Dashboard Mockup"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <Image
          src="/images/wavy-divider.svg"
          width="160"
          height="12"
          alt="Wavy Line Section Divider"
          className="mt-6"
        />
      </div>
    </section>
  );
};

export default CaseStudies;
