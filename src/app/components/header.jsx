import Image from "next/image";

const Header = () => {
  return (
    <header className="lg:fixed md:px-10 sticky top-0 left-0 w-full h-16 z-50 bg-black flex justify-between">
      <a href="#hero-section" className="my-auto">
        <Image
          src="/images/signature.svg"
          width={66}
          height={37}
          alt="Logo - Handwritten Signature"
        />
      </a>
      <ul className="flex gap-[24px]">
        <li className="my-auto">
          <a href="https://github.com/goncalocantante">
            <Image
              src="/images/icons/github.svg"
              width={20}
              height={20}
              alt="Github Logo"
              className="hover:scale-116"
            />
          </a>
        </li>
        <li className="my-auto">
          <a href="https://www.linkedin.com/in/goncalo-cantante/">
            <Image
              src="/images/icons/linkedIn.svg"
              width={20}
              height={20}
              alt="LinkedIn Logo"
              className="hover:scale-116"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
