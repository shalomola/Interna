import Navbar from "../components/Navbar.tsx";
import Hero from "../components/sections/Hero.tsx";
import About from "../components/sections/About.tsx";
import Contact from "../components/sections/Contact.tsx";
import Video from "../components/sections/Video.tsx";

const Home = () => {
  return (
    <div className="w-full h-[100vh] box-border">
      <Navbar />
      <Hero />
      <About />
      <Video />
      <Contact />
    </div>
  );
};

export default Home;

            
