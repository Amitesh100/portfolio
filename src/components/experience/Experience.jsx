import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experinece__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>
          
        </div>
        <div className="experinece__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Expess</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience