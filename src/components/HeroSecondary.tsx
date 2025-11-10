import contactImg from "../assets/ragone-zone-maria.png";

interface HeroSecondaryProps {
  onContactClick: () => void;
}

export default function HeroSecondary({ onContactClick }: HeroSecondaryProps) {
  return (
    <div className="secondary-hero">
      <div className="secondary-hero-grid">
        <div className="secondary-hero-text">
          <h2>Why Hire Me?</h2>
   <p>
  With over 15 years of turning “oops” into “ahh, finally!” I’ve tackled just about every project under the sun. From leaky faucets and bathroom rennovations, to kitchen overhauls and even building furniture.
</p>




          <button className="cta-button" onClick={onContactClick}>
            Let’s Get Started
          </button>
        </div>
        <div className="secondary-hero-image">
          <img src={contactImg} alt="Maria on a roof tearing out a chimney" />
        </div>
      </div>
    </div>
  );
}
