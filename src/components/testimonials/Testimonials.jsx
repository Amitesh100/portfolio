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
    review: 'I don\'t know this man. He\'s just using my name. Even the image shown here isn\'t mine'
  },
  {
    avatar: AVTR2,
    name: "Helena Litz",
    review: 'Mera bhi wohi kathan rhega, jayda dhiyan na dein, aage badhein'
  },
  {
    avatar: AVTR3,
    name: "Rachele Parkton",
    review: 'Did\'t you heard... Move ahead'
  },
  {
    avatar: AVTR4,
    name: "Kinderson Gaultella",
    review: 'So, I\'m the last one. If you again swipe, then you are going to get bored.'
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