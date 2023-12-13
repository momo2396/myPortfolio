import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import BottomNavigation from "./components/BottomNavigation";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const Portfolio = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/c3/37/73/c337735f6392960d4cf7028cd2ac9d23.gif")`,
      }}
    >
      <div className="bg-white bg-opacity-90">
        <div className="max-w-[1200px] mx-auto px-5">
          <Navbar />
          <Banner />
          <AboutMe />
          <MySkills />
          <Projects />
          <ContactMe />

          <Footer />
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
