import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-16 border-t border-highlight/10">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 mb-12">
          <h2 className="subheading mb-4">Let&apos;s Build Together</h2>
          <p className="text-body text-white/80 mb-8 leading-relaxed">
            I am seeking a collaborative product team in Stockholm where I can contribute to building high-performance web systems. Reach out if you are hiring or would like to discuss my experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/cv.pdf"
              download="Goncalo_Cantante_CV.pdf"
              className="px-6 py-3 rounded-lg bg-highlight text-black font-semibold text-center transition-all hover:bg-highlight/90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Download CV (PDF)
            </a>
            <Link
              href="mailto:goncalo.cantante.jobs@gmail.com"
              className="px-6 py-3 rounded-lg border border-highlight/30 text-white font-semibold text-center transition-all hover:bg-highlight/10 hover:border-highlight/50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="col-start-2 col-span-10 flex justify-between items-center text-sm text-white/40 pt-6 border-t border-white/5">
          <p>© 2026 Gonçalo Cantante</p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/goncalo-cantante/"
              className="hover:text-highlight transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/goncalocantante"
              className="hover:text-highlight transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
