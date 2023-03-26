import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../ProjectsList/projects.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const SlideProjects = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="swiperBox">
              <img src={`${project.image}`} />
              <div className="swiperContent">
                <h4>{project.title}</h4>
                <p>{project.usedSkills}</p>                  
                <p className="arrowBox"></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
