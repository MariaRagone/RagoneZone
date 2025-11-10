import "./Page.css";
import contactImg from "../assets/maria-tub-drain.jpg";


export default function About() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="about-page">
      {/* Hero Section */}
        <div className="container">
      <section className="about-hero">

        <h1>One Woman With Tools… and She Knows How to Use Them 🔧</h1>
        {/* <img src={logo} alt="Ragone Zone Logo" className="about-page-logo" /> */}
       <div className="about-image">

        <img src={contactImg} alt="Maria installing a tub drain" />

      </div>

        <p className="tagline">
          Powered by grit, laughter, and a cordless drill.
        </p>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <h2>Meet Maria</h2>
        <p>
          Hi, I’m <strong>Maria Ragone</strong>, the face, hands, and muscle
          behind <strong>Ragone Zone</strong>, a woman-run handywoman service
          built on quality, honesty, and a dash of good humor.
        </p>
        <p>
          After years of DIY projects and helping friends fix everything from
          loose cabinet doors to full-on renovation chaos, I realized I could
          turn that passion into a profession.
        </p>
        <p>
          I genuinely love fixing, building, and improving things. The world
          needs more handywomen who can do it right without the upsell or the
          attitude.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>My Approach</h2>
        <p>
          Every project deserves patience, precision, and practicality (plus a
          bit of personality). I don’t cut corners, and I don’t overcharge.
        </p>
        <ul className="values-list">
          <li>✅ Fix it right.</li>
          <li>✅ Keep it affordable.</li>
          <li>✅ Make you smile when it’s done.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Whether you need something built, fixed, or finally finished I’m
          here to help.
        </p>
        <button className="cta-button" onClick={handleContactClick}>
          Get Your Project Started
        </button>
      </section>
        </div>
    </main>
  );
}
