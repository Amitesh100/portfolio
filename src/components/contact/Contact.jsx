import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>rakshitamitesh@gmail.com</h5>
            <a href="mailto:rakshitamitesh@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <GrInstagram />
            <h4>Instagram</h4>
            <h5>amitesh_rakshit</h5>
            <a href="https://www.instagram.com/amitesh_rakshit/" target='_blank'>Instagram Direct</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp />
            <h4>Whatsapp</h4>
            <h5>Amitesh Rakshit</h5>
            <a href="https://wa.me/+919179295494" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact