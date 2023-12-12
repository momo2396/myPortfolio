import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import BottomNavigation from "./components/BottomNavigation";
import Navbar from "./components/Navbar";

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <Navbar />
      <Banner />
      <AboutMe />
      <BottomNavigation />
    </div>
  );
};

export default Portfolio;
