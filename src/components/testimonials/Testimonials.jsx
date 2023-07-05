import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// SwiperJS imports
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: "Sneha Paul",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nam eveniet provident quidem et accusantium possimus, magni alias blanditiis aspernatur asperiores repellendus sequi, ratione quisquam dicta quod sunt velit!'
  },
  {
    avatar: AVTR2,
    name: "Helena Litz",
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti qui sequi tempora rem, cum, pariatur eligendi iure quibusdam velit maxime reprehenderit, et neque aliquam placeat aut alias ut fugit!'
  },
  {
    avatar: AVTR3,
    name: "Rachele Parkton",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nam eveniet provident quidem et accusantium possimus, magni alias blanditiis aspernatur asperiores repellendus sequi, ratione quisquam dicta quod sunt velit!'
  },
  {
    avatar: AVTR4,
    name: "Kinderson Gaultella",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed nam eveniet provident quidem et accusantium possimus, magni alias blanditiis aspernatur asperiores repellendus sequi, ratione quisquam dicta quod sunt velit!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials