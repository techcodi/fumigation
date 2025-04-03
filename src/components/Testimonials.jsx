import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Testimonials() {
  const testimonies = [
    {
      text: "The team was professional, thorough, and efficient. Our pest problem was solved completely!",
      author: "Emily Richardson",
      role: "Homeowner",
    },
    {
      text: "Outstanding service! They responded quickly to our emergency and handled everything expertly.",
      author: "Michael Chen",
      role: "Restaurant Owner",
    },
    {
      text: "Very impressed with their eco-friendly approach and attention to detail.",
      author: "Sarah Thompson",
      role: "Office Manager",
    },
  ];
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonies.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
