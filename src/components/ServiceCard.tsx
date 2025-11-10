import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  blurb: string; 
}

export default function ServiceCard({ icon, title, blurb }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-shape"></div>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>

      {/* Slide-up overlay */}
      <div className="service-overlay">
        <div>{blurb}</div>
      </div>
    </div>
  );
}
