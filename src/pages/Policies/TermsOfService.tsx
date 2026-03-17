import { Link } from 'react-router-dom';
import './Policies.css';

export default function TermsOfService() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p className="policy-updated">Last updated: March 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using VillageFood ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Platform.</p>
        </section>

        <section>
          <h2>2. Products & Pricing</h2>
          <ul>
            <li>All products listed are sourced directly from verified village farmers and producers.</li>
            <li>Prices are listed in Indian Rupees (₹) and include applicable taxes unless stated otherwise.</li>
            <li>We reserve the right to update pricing without prior notice. Orders already confirmed will not be affected.</li>
            <li>Product images are representative. Natural products may vary slightly in appearance.</li>
          </ul>
        </section>

        <section>
          <h2>3. Orders & Payments</h2>
          <ul>
            <li>An order is confirmed only after successful payment through our secure Razorpay gateway.</li>
            <li>We accept UPI, Credit/Debit Cards, Net Banking, and Wallets.</li>
            <li>Once confirmed, orders are dispatched within 24–48 hours via our logistics partners.</li>
          </ul>
        </section>

        <section>
          <h2>4. Returns & Refunds</h2>
          <ul>
            <li>Due to the perishable nature of our products, returns are accepted only if the product is damaged, expired, or significantly different from the description.</li>
            <li>Report issues within 24 hours of delivery with photos for fastest resolution.</li>
            <li>Approved refunds are processed within 5-7 business days to the original payment method.</li>
          </ul>
        </section>

        <section>
          <h2>5. User Accounts</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You must provide accurate information during registration.</li>
            <li>We reserve the right to suspend accounts involved in fraudulent activities.</li>
          </ul>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>VillageFood shall not be liable for delays caused by logistics partners, natural disasters, or events beyond our reasonable control.</p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Rajasthan, India.</p>
        </section>
      </div>
    </main>
  );
}
