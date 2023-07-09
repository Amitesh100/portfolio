import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Blog Site',
    github: 'https://github.com/Amitesh100/blog-site',
    demo: '#'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Slam Book',
    github: 'https://github.com/Amitesh100/slam-book',
    demo: '#'
  },
  {
    id: 1,
    image: IMG1,
    title: 'Rocket Missions Project',
    github: 'https://github.com/Amitesh100/nasa-project',
    demo: '#'
  }
  // {
  //   id: 1,
  //   image: IMG4,
  //   title: 'Something',
  //   github: '',
  //   demo: ''
  // },
  // {
  //   id: 1,
  //   image: IMG5,
  //   title: 'Something',
  //   github: '',
  //   demo: ''
  // },
  // {
  //   id: 1,
  //   image: IMG6,
  //   title: 'Something',
  //   github: '',
  //   demo: ''
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a className='btn' href={github}>Github</a>
                  <a className='btn btn-primary' href={demo} target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio