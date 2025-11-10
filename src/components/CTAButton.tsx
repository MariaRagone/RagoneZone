import "./CTAButton.css";

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

export default function CTAButton({ text, onClick }: CTAButtonProps) {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
}
