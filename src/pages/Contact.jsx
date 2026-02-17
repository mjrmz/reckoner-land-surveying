import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
