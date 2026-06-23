import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import CaseStudies from "./components/caseStudies";
import Resume from "./components/resume";

export default function Home() {
  return (
    <div className="bg-black text-white font-body px-10 flex flex-col">
      <Header />
      {/* Main vertical sections */}
      <main>
        <Hero />
        <CaseStudies />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
