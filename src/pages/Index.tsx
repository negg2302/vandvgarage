import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkFormats from "@/components/sections/WorkFormats";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import BriefTemplate from "@/components/sections/BriefTemplate";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WorkFormats />
      <Process />
      <About />
      <BriefTemplate />
      <Footer />
    </main>
  );
};

export default Index;
