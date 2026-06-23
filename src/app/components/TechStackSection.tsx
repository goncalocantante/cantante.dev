import Image from "next/image";

const imageStyle = {
  height: "25px",
};

const TechStackSection = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <h2 className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 subheading mb-6">
        Tech Stack
      </h2>
      {/* Logos aligned wider, starting at col 2 */}
      <div className="col-span-12 md:col-start-2 md:col-span-10 flex gap-4 md:gap-0 md:overflow-visible overflow-scroll md:justify-between">
        <Image
          src="/images/skillsLogos/next.svg"
          alt="Next.js"
          width={120}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/node.svg"
          alt="Node.js"
          width={85}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/tailwindcss.svg"
          alt="Tailwind CSS"
          width={191}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/postgresql.svg"
          alt="PostgreSQL"
          width={128}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/express.svg"
          alt="Express.js"
          width={41}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/knex.svg"
          alt="Knex.js"
          width={85}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
        <Image
          src="/images/skillsLogos/typescript.svg"
          alt="TypeScript"
          width={108}
          height={25}
          style={imageStyle}
          className="hover:scale-116 transition-transform"
        />
      </div>
    </div>
  );
};

export default TechStackSection;
