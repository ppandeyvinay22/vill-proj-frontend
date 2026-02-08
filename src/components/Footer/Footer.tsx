import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/logo.svg";
import { AUTH_VISIBLE } from "../../config/featureFlags";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="GaonKart" />
            <span className="logo-text">aonKart</span>
          </Link>
          <p className="footer-tagline">
            <span className="highlight">Fresh</span> from <span className="highlight">Gaon</span>.{" "}
            <span className="highlight">Honest</span> to <span className="highlight">Home</span>.
          </p>
        </div>

        <div className="footer-links">
          <h5>Explore</h5>
          <Link to="/products">Products</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-links">
          <h5>Order</h5>
          <Link to="/order">Order page</Link>
          <a href="https://wa.me/919026198225" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          {AUTH_VISIBLE && (
            <>
              <Link to="/login" className="auth-link">Login</Link>
              <Link to="/signup" className="auth-link">Sign up</Link>
            </>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GaonKart
      </div>
    </footer>
  );
}
