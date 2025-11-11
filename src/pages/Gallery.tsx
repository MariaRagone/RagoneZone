import "./Page.css";
import CTAButton from "../components/CTAButton";

import img1 from "../assets/ragone-zone-1.jpg";
import img2 from "../assets/ragone-zone-2.jpg";
import img3 from "../assets/ragone-zone-3.jpg";
import img4 from "../assets/ragone-zone-4.jpg";
import img5 from "../assets/ragone-zone-5.jpg";
import img6 from "../assets/ragone-zone-6.jpg";
import img7 from "../assets/ragone-zone-7.jpg";
import img8 from "../assets/ragone-zone-8.jpg";
import img9 from "../assets/ragone-zone-9.jpg";
import img10 from "../assets/ragone-zone-10.jpg";
import img11 from "../assets/ragone-zone-11.jpg";
import img12 from "../assets/ragone-zone-12.png";

interface GalleryProps {
  onContactClick: () => void;
}

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]; // Add more as needed

export default function ({ }: GalleryProps) {
  return (
    <main className="gallery-page">
      <div className="container">
        <section className="gallery-hero">
          <h1>Gallery</h1>
          <p>Take a look at some of the projects I’ve completed.</p>
        </section>

        <section className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </section>

        <section className="gallery-cta">
          <h2>Want Your Project Featured?</h2>
          <CTAButton
                text="Contact Me"
                onClick={() => (window.location.href = "/contact")}
                />
              
        </section>
      </div>
    </main>
  );
}
