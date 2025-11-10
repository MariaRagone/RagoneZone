import "./Page.css";
import HeroSection from "../components/Hero";
import Introduction from "../components/Introduction";
import SecondaryHero from "../components/HeroSecondary";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  const handleContactClick = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page home-page">
      <div className="container">
        <HeroSection onContactClick={handleContactClick} />
        <Introduction />
        <SecondaryHero onContactClick={handleContactClick} />
        <AboutSection />
        <CTASection onContactClick={handleContactClick} />
      </div>
    </section>
  );
}
