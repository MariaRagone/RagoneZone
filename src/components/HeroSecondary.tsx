import contactImg from "../assets/ragone-zone-maria.png";
import CTAButton from "./CTAButton";

interface HeroSecondaryProps {
  onContactClick: () => void;
}

export default function HeroSecondary({ }: HeroSecondaryProps) {
  return (
    <div className="secondary-hero">
      <div className="secondary-hero-grid">
        <div className="secondary-hero-text">
          <h2>Why Hire Me?</h2>
   <p>
  With over 15 years of turning “oops” into “ahh, finally!” I’ve tackled just about every project under the sun. From leaky faucets and bathroom rennovations, to kitchen overhauls and even building furniture.
</p>

      <CTAButton
                text="Learn More"
                onClick={() => (window.location.href = "/about")}
                />
        </div>
        <div className="secondary-hero-image">
          <img src={contactImg} alt="Maria on a roof tearing out a chimney" />
        </div>
      </div>
    </div>
  );
}
