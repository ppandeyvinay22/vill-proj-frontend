import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ShieldCheck, Truck } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">🌿 VillageFood</Link>
            <p>Bringing the authentic, pure, and untouched taste of rural India to your modern doorstep.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop Market</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/quality">Quality Standards</Link></li>
              <li><Link to="/orders">Track Orders</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Support</h4>
            <ul>
              <li><Link to="/shipping">Shipping & Delivery</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Village Hub, Rajasthan, India</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@villagefood.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-container badges">
          <div className="trust-badge">
            <ShieldCheck size={20} />
            <span>100% Purity Tested</span>
          </div>
          <div className="trust-badge">
             <Truck size={20} />
             <span>Powered by Shiprocket</span>
          </div>
          <div className="trust-badge">
            <span className="badge-icon">🌿</span>
            <span>Zero Preservatives</span>
          </div>
          <div className="trust-badge">
            <span className="badge-icon">💳</span>
            <span>Razorpay Secure</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} VillageFood. All rights reserved.</p>
          <div className="payment-icons">
             <span>UPI · Visa · Mastercard · Net Banking · COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
