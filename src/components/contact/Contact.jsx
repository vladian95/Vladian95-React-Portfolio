import { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="Contact" id="Contact">
      <div className="Left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="Right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, i will replay ASAP</span>}
        </form>
      </div>
    </div>
  );
}
