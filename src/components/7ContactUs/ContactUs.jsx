import React, { useRef } from 'react'
import './ContactUs.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  //Mailing Part
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bi565pq', 'template_dfby2n4', form.current, 'FlXE3sWkQEtKCBeig')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='Join' id='join-us' style={{margin: '5% 0'}}>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Ready To</span>
          <span> Level Up</span>
        </div>

        <div>
          <span>Your Game</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </div>

      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your email address' />
          <button className='btn btn-j'>Join Now</button>
        </form>

      </div>
    </div>
  )
}

export default Join