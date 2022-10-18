import './contact.css';

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="Left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="Right">
        <h2>Contact.</h2>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
