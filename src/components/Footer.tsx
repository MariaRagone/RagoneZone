import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2>Ready to Get Started?</h2>
        <p>Let’s tackle that to-do list one project at a time.</p>
        <a href="/contact" className="cta-button-secondary">
          Get a Free Estimate
        </a>
              <p>Let’s tackle that to-do list one project at a time.</p>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Affiliated Sites</h3>
          <ul>
            <li>
              <a href="https://missiondiy.com" target="_blank" rel="noreferrer">
                Mission DIY
              </a>
            </li>
            <li>
              <a
                href="https://missiondiy.com/shescrafty/"
                target="_blank"
                rel="noreferrer"
                >
                She’s Crafty
              </a>
            </li>
         
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="mailto:maria@ragone.net">Maria@Ragone.net</a>
            </li>
          </ul>
        </div>
      </div>
       <div className="footer-copywrite">
        <p>© {new Date().getFullYear()} Ragone Zone. All rights reserved.</p>
      </div>
            </div>

    </footer>
  );
}
