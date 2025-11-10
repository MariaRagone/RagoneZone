import logo from "../assets/ragone-zone-logo.png";
import HammerIcon from "./HammerIcon";

interface HeroProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroProps) {
  return (
    <div className="hero">
      <img src={logo} alt="Ragone Zone Logo" className="logo" />
      <h1>Welcome to the Ragone Zone</h1>
      <h2>Where “I’ll Get to It” Finally Gets Done <HammerIcon /></h2>
      <button className="cta-button" onClick={onContactClick}>
        Contact Me & Get Started
      </button>
    </div>
  );
}
