import logo from "../assets/ragone-zone-logo.png";
import CTAButton from "./CTAButton";
import HammerIcon from "./HammerIcon";

interface HeroProps {
  onContactClick: () => void;
}

export default function HeroSection({ }: HeroProps) {
  return (
    <div className="hero">
      <img src={logo} alt="Ragone Zone Logo" className="logo" />
      <h1>Welcome to the Ragone Zone</h1>
      <h2>Where “I’ll Get to It” Finally Gets Done <HammerIcon /></h2>
      
      <CTAButton
      text="Start Your Project"
      onClick={() => (window.location.href = "/contact")}
      />
    </div>
  );
}
