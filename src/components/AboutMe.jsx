const AboutMe = () => {
  return (
    <>
      <div className="max-w-[900px] mx-auto px-10 hidden lg:block mt-96  text-center ">
        <div>
          <span className="text-xl font-semibold">My intro</span> <br />
          <span className="text-3xl font-semibold">About Me</span>
          <br />
          <span className="text-gray-500">
            Passionate MERN stack developer with a flair for creating dynamic
            and responsive web applications. Proficient in leveraging MongoDB,
            Express.js, React, and Node.js to craft seamless user experiences.
            Dedicated to staying ahead in the ever-evolving tech landscape, I
            strive to merge creativity with functionality in every project I
            undertake.
          </span>
        </div>
        <div className="mt-5">
          <button className="btn bg-black text-white">Contact Me</button>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-10 mt-20 text-center lg:hidden">
        <div>
          <span className="text-xl font-semibold">My intro</span> <br />
          <span className="text-3xl font-semibold">About Me</span>
          <br />
          <span className="text-gray-500">
            Passionate MERN stack developer with a flair for creating dynamic
            and responsive web applications. Proficient in leveraging MongoDB,
            Express.js, React, and Node.js to craft seamless user experiences.
            Dedicated to staying ahead in the ever-evolving tech landscape, I
            strive to merge creativity with functionality in every project I
            undertake.
          </span>
        </div>
        <div className="mt-5">
          <button className="btn bg-black text-white">Contact Me</button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
