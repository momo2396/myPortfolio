import { CiHome } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
const BottomNavigation = () => {
  return (
    <div className="btm-nav fixed bottom-5 z-30  bg-black bg-opacity-60 max-w-[500px] mx-auto rounded-full">
      <div className="flex flex-col gap-2">
        <a href="#Home">
          <CiHome className="text-white text-2xl" />
        </a>
        <div className="text-gray-400 text-sm">Home</div>
      </div>
      <div className="flex flex-col gap-2">
        <a href="#AboutMe">
          <SiAboutdotme className="text-white text-2xl" />
        </a>
        <div className="text-gray-400 text-sm">About Me</div>
      </div>
      <div className="flex flex-col gap-2">
        <a href="#Skills">
          <GiSkills className="text-white text-2xl" />
        </a>
        <div className="text-gray-400 text-sm">Skills</div>
      </div>
      <div className="flex flex-col gap-2">
        <a href="#Projects">
          <GrProjects className="text-white text-2xl" />
        </a>
        <div className="text-gray-400 text-sm">Projects</div>
      </div>
      <div className="flex flex-col gap-2">
        <a href="#ContactMe">
          <MdPermContactCalendar className="text-white text-2xl" />
        </a>
        <div className="text-gray-400 text-sm">Contact Me</div>
      </div>
    </div>
  );
};

export default BottomNavigation;
