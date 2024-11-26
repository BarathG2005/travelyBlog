import React from 'react'
import Nav from '../nav/nav'
import Temp from '../template/temp'
import Image from '../asset/trip2.jpg'
import Footer from '../footer/footer'
function Contact() {
  return (
   <>
   <Nav/>
   <Temp title="CONTACT" cName="img-mid" bName="black-mid" Image ={Image}/>
   <div className='contact'>
    <div className='content'>
      <h2>GET IN TOUCH</h2>
      <h3>Contact Form</h3>
      <p>Send me your questions, comments, or suggestions!</p>.
      <p>If you'd like to work with me or you have a question or comment, you can contact me using the form below. You can also find more info about me here.</p>
    <p>Sometimes I'm busy traveling, but I try to respond to any messages!</p>
    </div>
<div className='form'>
  <form action="">

    <label htmlFor="name" className='label'>Your Name</label>
    <input type="text" className='input'/>
    <label htmlFor="name" className='label'>Your Email</label>
    <input type="text" className='input' />
    <label htmlFor="name" className='label'>Subject</label>
    <input type="text"  className='input'/>
    <label htmlFor="name" className='label'>Your Message</label>
    <textarea className='input'/>
    <button className='sb'>Submit</button>
  
    
      </form>
This site is protected by reCAPTCHA, and the Google Privacy Policy and Terms of Service apply.

</div>

   </div>
   <Footer/>
   </>
  )
}

export default Contact