import React from "react";
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
   return (
      <section id="services">
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="container services__container">
            <article className="service">
               <div className="service__head">
                  <h3>Web Development</h3>
               </div>
               <ul className="service__list">
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>API Development.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Database Management.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Security Implementation.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Performance Optimization.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Error Handelling and Debugging.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Version control and Collaboration.</p>
                  </li>
               </ul>
            </article>
            {/* END OF WEB DEVELOPMENT SERVICE */}
            <article className="service">
               <div className="service__head">
                  <h3>UI/UX Design</h3>
               </div>
               <ul className="service__list">
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Wireframing and Prototyping.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Interaction Design.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Visual Design.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Responsive Design.</p>
                  </li>
               </ul>
            </article>
            {/* END OF UI/UX DESIGN SERVICE */}
            <article className="service">
               <div className="service__head">
                  <h3>Blogging</h3>
               </div>
               <ul className="service__list">
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Research and Topic Selection.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Writing and Editing.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Content Creation.</p>
                  </li>
                  <li>
                     <BiCheck className="service__list-icon" />
                     <p>Content Promotion.</p>
                  </li>
               </ul>
            </article>
            {/* END OF CONTENT CREATION SERVICE */}
         </div>
      </section>
   )
}

export default Services