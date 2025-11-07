import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import HowToApply from "@/components/HowToApply";
import Timeline from "@/components/Timeline";
import Judges from "@/components/Judges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Categories />
      <HowToApply />
      <Timeline />
      <Judges />
      <Footer />
    </div>
  );
};

export default Index;
