import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Projects = () => {
  const allProjects = [
    {
      id: 0,
      Title: "Elegance Ensemble",
      images: [
        "https://i.ibb.co/8z9dnvD/Screenshot-2023-12-13-122206.png",
        "https://i.ibb.co/19vgrxZ/Screenshot-2023-12-13-122225.png",
        "/src/assets/brandManagement/Screenshot 2023-12-13 122256.png",
        "https://i.ibb.co/sj4xCP1/Screenshot-2023-12-13-122708.png",
      ],
      description:
        "It is a brand shop related website. My website is about beauty brand shop. 8 Brands are included here. A logo, some private routes are implemented on navbar.If i click one of the brands, it redirects to the brand page, where some brands include at least 4 products. Some brands do not have any product. Advertisement images are included here. If i click one of the products, then it will redirect to the details page, which is private. It will be accessed only when a user is logged in Without being logged in, the private routes will redirect to login page. Email pass and gmail authentication are implemented.",
      demo: "https://brand-shop-client-1a3b1.web.app/",
    },
    {
      id: 1,
      Title: "Flavor Frontiers",
      images: [
        "https://i.ibb.co/3ySc3kH/Screenshot-2023-12-13-123341.png",
        "https://i.ibb.co/ngzL6NH/Screenshot-2023-12-13-123555.png",
        "https://i.ibb.co/BGzhfsN/Screenshot-2023-12-13-123715.png",
        "https://i.ibb.co/TvbMqQf/Screenshot-2023-12-13-123807.png",
      ],
      description:
        "It's a restaurant management website for flavorfontiers. It contains Home page, a blog page, a all foods page, a profile page(private route), a your added food page(private route), an add food page(private route), a your ordered food page(private route). Home page contains a banner, a top 6 food section, a about section, a contact us section. All food section contains pagination. The limit of pagination is 9. When an user logs in, she can add a food from add food page, she can her added food and update it, she can delete ordered food her food. But she cannot order her own added food. When an unlogged in user tries to access private pages, she redirects to log in page.",
      demo: "https://restaurant-management-55e76.web.app/",
    },
    {
      id: 2,
      Title: "Contest Hub",
      images: [
        "https://i.ibb.co/864qmcn/Screenshot-2023-12-13-124300.png",
        "https://i.ibb.co/0hNr0W1/Screenshot-2023-12-13-124539.png",
        "https://i.ibb.co/Hp2Htmm/Screenshot-2023-12-13-124556.png",
        "https://i.ibb.co/4WMqwNN/Screenshot-2023-12-13-124647.png",
      ],
      description:
        "This a contest arranging and management system, named ContestHub. Three roles have been set -- Admin, Creator, User. There is a home, all contests, leader board, time visualization page.  Dashboard is separated for three defined roles.  Admin Dashboard Pages: all users, all contests. Creator Dashboard Pages: all created contests, submitted tasks for single contests, add contest.  User Dashboard Pages: registered contests, submitted tasks, winning contests. Without logged in, one cannot access details pages",
      demo: "https://contestplatfrom.web.app/",
    },
  ];
  return (
    <div id="Projects" className="mt-20 container">
      <div className="text-center mb-10">
        <div className="text-lg font-semibold">My works</div>
        <div className="text-3xl font-semibold">Projects</div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
        {allProjects?.map((p) => (
          <>
            {/* <Modal p={p} key={p?.id}></Modal> */}

            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={p?.images[0]} alt="project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p?.Title}</h2>
                <p>{p?.description.split(" ").slice(0, 6).join(" ")}...</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => document.getElementById(p?.id).showModal()}
                    className="hidden md:block btn bg-black text-white border-black"
                  >
                    View Details
                  </button>
                  <a
                    className="pt-3 block md:hidden border-black btn bg-black text-white"
                    href={p?.demo}
                  >
                    View Demo
                  </a>
                </div>
                <div className="hidden md:block">
                  <dialog id={p?.id} className="text-black  modal modal-middle">
                    <div className="mt-44 max-w-[500px] mx-auto h-[500px]">
                      <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img
                            className="w-[500px] h-[500px]"
                            src={p?.images[1]}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="w-[500px] h-[500px]"
                            src={p?.images[2]}
                            alt=""
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="w-[500px] h-[500px]"
                            src={p?.images[3]}
                            alt=""
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    {/* <img src={p?.images[1]} alt="" /> */}
                    <div className="mt-44 modal-box">
                      <h3 className="font-bold text-lg">{p?.Title}</h3>
                      <p className="py-4">{p?.description}</p>
                      <div className="modal-action">
                        <form method="dialog">
                          <div className="flex gap-5">
                            <button className="btn">Close</button>
                            <a
                              className="btn bg-black text-white"
                              href={p?.demo}
                            >
                              View Demo
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// const Modal = ({ p }) => {
//   return (

//   );
// };
