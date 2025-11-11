import CTAButton from "./CTAButton";

interface CTASectionProps {
  onContactClick: () => void;
}

export default function CTASection({}: CTASectionProps) {
  return (
    <div className="cta-wrapper">
      <p className="cta-text">
        <strong>Let’s cross a few things off that to-do list.</strong>
      </p>
        <CTAButton
                text="Schedule Your Fix"
                onClick={() => (window.location.href = "/contact")}
                />
   
    </div>
  );
}
