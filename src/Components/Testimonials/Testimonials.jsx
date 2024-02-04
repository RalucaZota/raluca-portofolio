import "./Testimonials.scss";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial3.jpg";
import Image3 from "../../assets/testimonial5.jpg";
import Image4 from "../../assets/testimonial4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Testimonials = () => {
  const Data = [
    {
      id: 1,
      image: Image1,
      title: "Iulian Negrila",
      role: "Frontend Developer",
      description:
        "My collaboration with Raluca has been consistently excellent. Her remarkable front-end skills played a essential role in making a significant contribution to the project's success. Efficient communication and his unwavering dedication to details have made our working experience highly productive.",
    },
    {
      id: 2,
      image: Image2,
      title: "Alexandra Poleac",
      role: "QA TESTER - Newroco",
      description:
        "Raluca is highly skilled and reliable. Committed to deadlines and efficient task management. Possesses strong listening skills, facilitating clear understanding. Excellent problem-solving and communication abilities. A positive experience collaborating with her.",
    },
    {
      id: 3,
      image: Image3,
      title: "Anda Ciulei",
      role: "Technical Expert -  Allianz Parteners",
      description:
        "Working closely with Raluca has been a pleasure. Her dedication to excellence is evident in his work. Raluca's technical expertise, combined with her collaborative approach, ensures smooth teamwork. Her positive attitude and problem-solving skills make her a valuable teammate.",
    },
    {
      id: 4,
      image: Image4,
      title: "Iancu Gabriel",
      role: "Frontend Developer",
      description:
        "Raluca is a standout team member, consistently delivering exceptional results. Her strong work ethic, attention to detail, and proactive approach contribute significantly to project success. I appreciate her positive attitude and dedication to achieving outstanding outcomes.",
    },
  ];

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <span className="presentation-subtitle">People say</span>
      <Swiper
        className="testimonial-container"
        loop={true}
        autoplay={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, role, description }) => {
          return (
            <SwiperSlide className="testimonial-card" key={id}>
              <img src={image} alt="" className="testimonial-img" />
              <h3 className="testimonial-name">{title}</h3>
              <h5 className="testimonial-role">{role}</h5>
              <p className="testimonial-description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
