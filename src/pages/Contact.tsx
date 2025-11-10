import "./Page.css";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="page contact-page">
        <div className="section-container">
          <h1>Message Received! 💌</h1>
          <p>
            Thanks for reaching out — the <strong>Ragone Zone</strong> is on it.
            I’ll get back to you faster than a loose nail can roll under your fridge. 🔧
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page contact-page">
      <div className="section-container">
        <h1>Let’s Get Your Project in the Zone 🛠️</h1>

        <div className="intro-text">
          <p>
            Whether it’s a leaky faucet, a crooked picture frame, or a “simple” install
            that came with 47 'extra' screws, I’m here to help.
          </p>
          <p>
            Fill out the form below with a few details about your project. I’ll respond faster than you can find that screwdriver you just had in your hand a second ago.
          </p>
          <p>
            <strong>P.S.</strong> No judgment if your “DIY attempt” turned into a
            “call for help.” Happens to the best of us, that’s why the Zone exists. 😅
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea placeholder="Describe your project..." required />
          </label>
          <button type="submit" className="cta-button">
            Send It to the Zone
          </button>
        </form>
      </div>
    </section>
  );
}
