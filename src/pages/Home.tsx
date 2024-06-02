import AboutUs from "../components/AboutUs/AboutUs";
import Counting from "../components/Counting/Counting";
import FactArea from "../components/FactArea/FactArea";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Counting/>
      <Services/>
      <FactArea/>
      <WhyChooseUs/>
      <HowWeWork/>
    </div>
  )
}
