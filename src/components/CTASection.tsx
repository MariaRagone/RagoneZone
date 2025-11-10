
interface CTASectionProps {
  onContactClick: () => void;
}

export default function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <div className="cta-wrapper">
      <p className="cta-text">
        <strong>Let’s cross a few things off that to-do list.</strong>
      </p>
      <button className="cta-button" onClick={onContactClick}>
        Schedule Your Fix
      </button>
    </div>
  );
}
