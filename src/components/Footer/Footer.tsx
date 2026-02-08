import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          {/* Logo */}
          <p className="logo">
            <img src={logo} alt="GaonKart" />
            <span className="logo-text">aonKart</span>
          </p>
          <p> <span className="highlight">Fresh</span> from <span className="highlight">Gaon</span>. <span className="highlight">Honest</span> to <span className="highlight">Home</span>.</p>
        </div>

        <div className="footer-links">
          <h5>Company</h5>
          <Link to="/about">About</Link>
          <Link to="/quality">Quality</Link>
        </div>

        <div className="footer-links">
          <h5>Order</h5>
          <a
            href="https://wa.me/919026198225"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://forms.gle/FORM_LINK"
            target="_blank"
            rel="noreferrer"
          >
            Google Form
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GaonKart
      </div>
    </footer>
  );
}
