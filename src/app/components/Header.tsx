import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="lg:fixed md:px-10 sticky top-0 left-0 w-full h-16 z-50 bg-black flex justify-between">
      <Link
        href="#hero-section"
        className="my-auto rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Back to top"
      >
        <Image
          src="/images/signature.svg"
          width={69}
          height={37}
          alt="Logo - Handwritten Signature"
        />
      </Link>
      <nav aria-label="Social navigation" className="my-auto">
        <ul className="flex gap-[24px]">
          <li className="my-auto">
            <Link
              href="https://github.com/goncalocantante"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="GitHub Profile"
            >
              <Image
                src="/images/icons/github.svg"
                width={20}
                height={20}
                alt="Github Logo"
                className="hover:scale-116 transition-transform"
              />
            </Link>
          </li>
          <li className="my-auto">
            <Link
              href="https://www.linkedin.com/in/goncalo-cantante/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="/images/icons/linkedIn.svg"
                width={20}
                height={20}
                alt="LinkedIn Logo"
                className="hover:scale-116 transition-transform"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
