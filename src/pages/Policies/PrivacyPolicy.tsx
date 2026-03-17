import { Link } from 'react-router-dom';
import './Policies.css';

export default function PrivacyPolicy() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="policy-updated">Last updated: March 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>When you create an account or place an order, we collect:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery address.</li>
            <li><strong>Payment Information:</strong> Payment details are processed securely through Razorpay. We do NOT store your card or UPI details on our servers.</li>
            <li><strong>Usage Data:</strong> Pages visited, products viewed, and interaction patterns to improve our service.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process and deliver your orders via our logistics partners (Delhivery, DTDC, BlueDart, etc.).</li>
            <li>To send order confirmations, shipping updates, and delivery notifications.</li>
            <li>To improve our product catalog and user experience.</li>
            <li>To prevent fraud and ensure platform security.</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Sharing</h2>
          <p>We share your data ONLY with:</p>
          <ul>
            <li><strong>Logistics Partners:</strong> Your name, phone, and address are shared with Shiprocket-aggregated couriers to deliver your order.</li>
            <li><strong>Payment Processor:</strong> Razorpay processes payments under their own privacy policy.</li>
          </ul>
          <p>We never sell your data to third parties for advertising purposes.</p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We use industry-standard encryption (JWT tokens, bcrypt password hashing, HTTPS) to protect your data. All payment processing happens through PCI DSS compliant gateways.</p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>You can request to view, update, or delete your personal data at any time by contacting us at <strong>privacy@villagefood.com</strong>.</p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>For any privacy-related questions, reach us at <strong>privacy@villagefood.com</strong> or call <strong>+91 98765 43210</strong>.</p>
        </section>
      </div>
    </main>
  );
}
