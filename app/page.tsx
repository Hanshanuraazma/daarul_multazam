import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Registration from "@/components/sections/Registration";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Registration />
    </>
  );
}
