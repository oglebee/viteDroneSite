import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
        emailjs
          .sendForm('service_zbzo186', 'template_kg4qidb', form.current, '5yKqRfKxlLo9augxk')
          .then(
            (result) => {
              console.log(result.text);
              setSubmitted(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    };

  return (
    <div>
      {submitted ? (
        <div className='thanks'>
          Thank you for your submission. We look forward to working with you.
        </div>
      ) : (
        <form className='form' ref={form} onSubmit={sendEmail}>
          <div className='field'>
            <label htmlFor='to'>To:</label>
            <a id='to' href="mailto:info@oglebee.com?subject=Inquiry Oglebee Solutions services">info@oglebee.com</a>
            <br />
          </div>
          <div className='field'>
            <label htmlFor='reply_to'>From:</label>
            <input type="email" name="reply_to" placeholder='your-email@here'/>
          </div>
          <div className='field'>
            <label htmlFor='subject'>Subject:</label>
            <input type="text" name='subject' />
          </div>
          <div className='field'>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <div className='button-container'>
            <input type="submit" value="Send" />
          </div>
        </form> 
      )}
    </div>
  );
};
