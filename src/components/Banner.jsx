import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaSquareTwitter } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="lg:h-[500px] mt-20 flex flex-col lg:flex-row gap-5 justify-center items-center">
      <div className="py-5 w-full lg:w-5/6 h-full">
        <div className="text-center">
          Hello, I am <br />
          <span className="text-2xl font-semibold">Foyazunnesa Alam Momo</span>
          <br />
          <span>MERN Stack Developer</span>
        </div>
        <div className="mt-7 max-w-[500px] mx-auto border-8 border-black p-3">
          <div className="">
            <img
              className=""
              src="https://i.ibb.co/4KYSDGs/Whats-App-Image-2023-12-12-at-7-26-10-PM-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        <div className="pt-10 flex justify-center items-center gap-5">
          <button className="btn btn-outline border-black border-4">
            Download CV
          </button>
          <button className="btn bg-black text-white">About Me</button>
        </div>
      </div>

      <div className="flex flex-row lg:flex-col w-full lg:w-1/6 h-full">
        <div className="lg:flex-1"></div>
        <div className="py-3  md:py-5 flex-1 flex flex-wrap lg:flex-col justify-center gap-5 items-center  lg:justify-end text-center md:h-fit  w-fit px-4">
          <a className="bg-black p-4 bg-opacity-10 rounded-full" href="">
            <FaLinkedin className="text-2xl" />
          </a>
          <a className="bg-black p-4 bg-opacity-10 rounded-full" href="">
            <SiGithub className="text-2xl" />
          </a>
          <a className="bg-black p-4 bg-opacity-10 rounded-full" href="">
            <FaSquareTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
