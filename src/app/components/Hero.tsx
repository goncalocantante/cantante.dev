import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="grid grid-cols-12 content-center min-h-dvh md:pt-0 pt-5 lg:mb-0 mb-16"
    >
      <div className="col-start-2 col-span-10 md:col-span-5 md:col-start-4">
        <h1 className="pb-[16px] text-4xl font-playfair font-bold">
          Gonçalo Cantante
        </h1>
        <h2 className="pb-[24px] text-2xl text-highlight font-semibold">
          Product Engineer
        </h2>
        <div className="xl:pr-[128px] pb-[40px] flex flex-col gap-4 text-body leading-relaxed">
          <p>
            Building high-performance, user-validated web systems with{" "}
            <strong>Next.js, Node.js, TypeScript, and PostgreSQL</strong>.
          </p>
          <p>
            I specialize in architecting secure, scalable web applications from the ground up, bridging the gap between clean, maintainable code and real business value.
          </p>
          <p className="italic text-highlight/90 font-medium">
            Relocating permanently to Stockholm in July 2026 — seeking a collaborative tech team building high-impact solutions.
          </p>
        </div>
        <Image
          src="/images/wavy-divider.svg"
          width={160}
          height={12}
          alt=""
          aria-hidden="true"
          className="pb-[56px]"
          priority={true}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="pb-[48px]">
          <h3 className="pb-[24px] font-bold font-playfair text-xl">Find Me On</h3>
          <div className="flex gap-[24px]">
            <Link
              href="https://github.com/goncalocantante"
              target="_blank"
              rel="noopener noreferrer"
              className="my-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Image
                src="/images/icons/github.svg"
                width={20}
                height={20}
                alt="Github Logo"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/goncalo-cantante/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="/images/icons/linkedIn.svg"
                width={20}
                height={20}
                alt="LinkedIn Logo"
              />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="pb-6 font-bold font-playfair text-xl">Contact</h3>
          <p className="text-body">
            You can reach me at{" "}
            <Link
              className="underline text-highlight hover:text-highlight/85 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
              href="mailto:goncalo.cantante.jobs@gmail.com"
            >
              goncalo.cantante.jobs@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
