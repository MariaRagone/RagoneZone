import "./Page.css";

export default function Contact() {
  return (
    <section className="page contact-page">
      <div className="section-container">
        <h1>Get in Touch with the Zone 🛠️</h1>

        <div className="intro-text">
          <p>
            Whether it’s a leaky faucet, a crooked picture frame, or a “simple” install
            that came with 47 'extra' screws, I’m here to help.
          </p>
          <p>
            You can reach me directly using any of the methods below. I’ll respond as
            quickly as possible!
          </p>
        </div>

        <div className="contact-info">
          <p>
            📧 Email:{" "}
            <a href="mailto:maria@ragone.net">maria@ragone.net</a>
          </p>
          <p>
            📞 Phone:{""}
            <a href="tel:+248-770-4257">(248) 770-4257</a>
          </p>
          <p>
            🏠 Servicing Metro Detroit
          </p>
        </div>

        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
          I love hearing about projects, big or small. Don’t hesitate to reach out!
        </p>
      </div>
    </section>
  );
}
