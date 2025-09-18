import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="grid grid-cols-12 content-center min-h-dvh md:pt-0 pt-5 lg:mb-0 mb-16"
    >
      <div className="col-start-2 col-span-10 md:col-span-5 md:col-start-4">
        <h1 className="pb-[24px] text-4xl">
          Hi, I&apos;m{" "}
          <span className="font-playfair text-highlight font-bold">
            Gonçalo Cantante
          </span>
          !
        </h1>
        <div className="xl:pr-[128px] pb-[40px] flex flex-col gap-1">
          <p>
            I build scalable, user-focused web applications using modern JS
            frameworks.
          </p>
          <p>
            Currently open to remote-first or hybrid teams building useful AI
            tools — especially where I can learn fast and contribute hands-on.
          </p>
          <p>
            This site is the first of many. I&apos;m sharing my progress
            publicly as I pivot into the world of applied AI.
          </p>
        </div>
        <Image
          src="/images/wavy-divider.svg"
          width="160"
          height="12"
          alt="Wavy Line Section Divider"
          className="pb-[56px]"
        />
        <div className="pb-[48px]">
          <h2 className="pb-[24px] font-bold font-playfair">Find Me On</h2>
          <div className="flex gap-[24px]">
            <a href="https://github.com/goncalocantante" className="my-auto">
              <Image
                src="/images/icons/github.svg"
                width="16"
                height="16"
                alt="Github Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/goncalo-cantante/"
              className="my-auto"
            >
              <Image
                src="/images/icons/linkedIn.svg"
                width="16"
                height="16"
                alt="LinkedIn Logo"
              />
            </a>
          </div>
        </div>
        <div>
          <h2 className="pb-6 font-bold font-playfair">Contact</h2>
          <p>
            You can reach me out at anytime at{" "}
            <a className="underline" href="mailto:goncalocantante@gmail.com”">
              goncalocantante@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
