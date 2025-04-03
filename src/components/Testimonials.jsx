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
      image:
        "https://images.pexels.com/photos/23496905/pexels-photo-23496905/free-photo-of-a-man-in-a-suit-and-tie-standing-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "Outstanding service! They responded quickly to our emergency and handled everything expertly.",
      author: "Michael Chen",
      role: "Restaurant Owner",
      image:
        "https://images.pexels.com/photos/5058918/pexels-photo-5058918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      text: "Very impressed with their eco-friendly approach and attention to detail. Great job!",
      author: "Sarah Thompson",
      role: "Office Manager",
      image:
        "https://images.pexels.com/photos/8547396/pexels-photo-8547396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                <img src={testimonial.image} alt={testimonial.author} />
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
                <p>
                  <i class="fa-solid fa-star testimony-star"></i>
                  <i class="fa-solid fa-star testimony-star"></i>
                  <i class="fa-solid fa-star testimony-star"></i>
                  <i class="fa-solid fa-star testimony-star"></i>
                  <i class="fa-solid fa-star-half testimony-star"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
