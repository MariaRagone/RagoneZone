import { FaBath } from "react-icons/fa6";
import "./Page.css";
import "./Services.css";
import { FaHammer, FaPaintBrush, FaTools, FaRulerCombined, FaCouch } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import CTAButton from "../components/CTAButton";

export default function Services() {
  return (
    <section className="page services-page">
      <div className="container">
        {/* Page Header */}
        <div className="services-hero">
          <h1>Ragone Zone Services 🔧</h1>
          <p className="hero-subtitle">
            Over 15 years of tackling just about any project under the sun!
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
<ServiceCard
  icon={<FaHammer size={36} />}
  title="General Repairs"
  blurb="Whether it's a loose doorknob or a faucet that drips at 3am, I handle repairs efficiently and with a smile."
/>

<ServiceCard
  icon={<FaPaintBrush size={36} />}
  title="Painting & Finishing"
  blurb="I carefully prep, paint, and finish your surfaces so every room looks like it was done by a pro."
/>

<ServiceCard
  icon={<FaTools size={36} />}
  title="Assembly & Installations"
  blurb="I assemble, install, and organize with precision, so you don’t have to curse over confusing manuals."
/>

<ServiceCard
  icon={<FaRulerCombined size={36} />}
  title="Custom Projects"
  blurb="From shelves to furniture, I design and build custom pieces tailored to your home and style."
/>

<ServiceCard
  icon={<FaCouch size={36} />}
  title="Furniture & Shelving"
  blurb="I design, build, and install furniture and shelving that actually fits your space."
/>


<ServiceCard
  icon={<FaBath size={36} />}
  title="Kitchen & Bath Fixes"
  blurb="I tackle plumbing and cabinet issues so your kitchen and bathroom are functional, stylish, and hassle-free."
/>
        </div>

        {/* CTA Section */}
        <div className="cta-wrapper">
          <p className="cta-text">
            Ready to finally cross a few things off that never-ending to-do list?
          </p>
          <CTAButton
          text="Start Your Project"
          onClick={() => (window.location.href = "/contact")}
          />
        </div>
      </div>
    </section>
  );
}
