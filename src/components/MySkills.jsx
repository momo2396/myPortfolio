const MySkills = () => {
  return (
    <div
      id="Skills"
      className="mt-20 flex flex-col justify-center items-center"
    >
      <div className="text-lg font-semibold">My abilities</div>
      <div className="text-3xl font-semibold mb-5">Skills</div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-black bg-opacity-10 py-5 px-3 rounded-lg">
          <div>
            <div className="text-center">Front-end Development</div>
            <div className="grid grid-cols-2">
              <li className="list-disc pl-5">
                <span>HTML</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>CSS</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>JavaScript</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>Git</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>React</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>Bootstrap</span> <br />
                <span className="text-sm text-gray-400">Advanced</span>
              </li>
              <li className="list-disc pl-5">
                <span>Tailwind</span> <br />
                <span className="text-sm text-gray-400">Advanced</span>
              </li>
              <li className="list-disc pl-5">
                <span>DaisyUI</span> <br />
                <span className="text-sm text-gray-400">Advanced</span>
              </li>
              {/* <li className="list-disc pl-5">
                <span>MambaUI</span> <br />
                <span className="text-sm text-gray-400">Advanced</span>
              </li> */}
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-10 py-5 px-3 rounded-lg">
          <div>
            <div className="text-center">Back-end Development</div>
            <div className="grid grid-cols-2">
              <li className="list-disc pl-5">
                <span>Express JS</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>PHP</span> <br />
                <span className="text-sm text-gray-400">Basic</span>
              </li>
              <li className="list-disc pl-5">
                <span>MySQL</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>PostgreSQL</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>Firebase</span> <br />
                <span className="text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>MongoDB</span> <br />
                <span className=" text-sm text-gray-400">Intermediate</span>
              </li>
              <li className="list-disc pl-5">
                <span>Python</span> <br />
                <span className="text-sm text-gray-400">Basic</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
