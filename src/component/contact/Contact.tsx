import React, { useRef } from 'react'
import './contact.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
      };

      const form = useRef();

  // const success = <p>thank you for sending us a message</p>;

  const sendEmail =  (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        form.current || '',
        process.env.REACT_APP_PUBLIC_KEY || ''
      )
      .then(
        (result) => {
          alert(`message sent successfully... ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
      return (
        <div>
            <Navbar/>
          <h1>Contact Form</h1>
          <form className='cf' onSubmit={handleSubmit}>
            <div className='half left cf'>
              <input type='text' placeholder='Name' name='user_name' />
              <input type='email' placeholder='Email address' name='user_email' />
            </div>
            <div className='half right cf'>
              <textarea name='message' placeholder='Message'></textarea>
            </div>
            <input type='submit' value='Submit' id='input-submit' />
          </form>

        </div>
      );
}

export default Contact