import "./Page.css";
import contactImg from "../assets/maria-tub-drain.jpg";
import CTAButton from "../components/CTAButton";

interface AboutProps {
  ctaOnClick?: () => void; // optional
}


export default function About({ }: AboutProps) {

  return (
    <main className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
        <h1>Your Trusted Handyman...err Handywoman Actually! 🔧</h1>
          <div className="about-image">
            <img src={contactImg} alt="Maria installing a tub drain" />
          </div>
          <p className="tagline">
            Delivering quality craftsmanship with professionalism, care, and a touch of humor.
          </p>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <h2>Meet Maria</h2>
          <p>
            I’m <strong>Maria Ragone</strong>, the founder and lead craftswoman behind <strong>Ragone Zone</strong>. I run a woman-owned handywoman service focused on reliability, attention to detail, and transparent pricing.
          </p>
          <p>
            With years of experience tackling everything from minor home repairs to full-scale renovations, I discovered a passion for transforming challenges into well-executed solutions.
          </p>
          <p>
            I thrive on creating functional, beautiful results while making the process straightforward and stress-free. The world deserves more skilled handywomen who deliver excellence without unnecessary upsells or attitude.
          </p>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2>My Approach</h2>
          <p>
            Every project deserves professionalism, precision, and practicality — with a little personality. I focus on delivering exceptional results while maintaining fairness and transparency.
          </p>
          <ul className="values-list">
            <li>✅ Do it right the first time.</li>
            <li>✅ Keep services affordable and honest.</li>
            <li>✅ Leave clients satisfied and confident in their space.</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Begin?</h2>
          <p>
            Whether you need a repair, an installation, or a full project completed, I’m ready to help.
          </p>
          <CTAButton
          text="Start Your Project"
          onClick={() => (window.location.href = "/contact")}
          />
        </section>
      </div>
    </main>
  );
}
