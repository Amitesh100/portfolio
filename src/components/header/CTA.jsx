import React from 'react'
import CV from '../../assets/AmiteshCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn' href={CV} download>Download CV</a>
      <a className='btn-primary' href="#contact">Let's talk!</a>
    </div>
  )
}

export default CTA