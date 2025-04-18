import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact/Contact";
import ExperianceSection from "./Components/ExperianceSection/ExperianceSection";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import Hero from "./Components/Hero/Hero";
import LogosSec from "./Components/LogosSec/LogosSec";
import Navbar from "./Components/Navbar/Navbar";
import ShowCases from "./Components/ShowCases/ShowCases";
import Testimonals from "./Components/Testimonals/Testimonals";
import TechStack from "./TechStack";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCases />
      <LogosSec />
      <FeatureCard />
      <ExperianceSection />
      <TechStack />
      <Testimonals />
      <Contact />
      <Footer />
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid none",
            padding: "16px",
            background: "#075985",
          },
        }}
      />
    </>
  );
}

export default App;
