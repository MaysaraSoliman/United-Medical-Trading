import AboutUs from "../components/AboutUs/AboutUs";
import Counting from "../components/Counting/Counting";
import Equipments from "../components/Equipments/Equipments";
import FactArea from "../components/FactArea/FactArea";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import Partners from "../components/Partners/Partners";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Services from "../components/Services/Services";
import VisionMisson from "../components/VisionMission/VisionMisson";
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
      <VisionMisson/>
      <HowWeWork/>
      <Partners/>
      <Equipments/>
      <ScrollToTop/>
    </div>
  )
}
