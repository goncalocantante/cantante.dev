import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <div className="bg-black text-white font-body px-10 flex flex-col">
      <Header />
      {/* Main vertical sections */}
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <Hero />
        <CaseStudies />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
