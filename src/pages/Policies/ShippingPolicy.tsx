import { Link } from 'react-router-dom';
import './Policies.css';

export default function ShippingPolicy() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back">← Back to Home</Link>
        <h1>Shipping & Delivery Policy</h1>
        <p className="policy-updated">Last updated: March 2026</p>

        <section>
          <h2>How We Deliver</h2>
          <p>VillageFood partners with India's leading logistics aggregator <strong>Shiprocket</strong>, which connects us to multiple courier partners for the fastest and most reliable delivery:</p>
          <div className="courier-grid">
            <div className="courier-card">
              <strong>Delhivery</strong>
              <span>2–4 business days</span>
            </div>
            <div className="courier-card">
              <strong>BlueDart</strong>
              <span>1–3 business days</span>
            </div>
            <div className="courier-card">
              <strong>DTDC</strong>
              <span>3–5 business days</span>
            </div>
            <div className="courier-card">
              <strong>Ecom Express</strong>
              <span>3–5 business days</span>
            </div>
          </div>
        </section>

        <section>
          <h2>The Delivery Process</h2>
          <ol className="delivery-steps">
            <li>
              <strong>Order Confirmed</strong>
              <p>Your order is confirmed and our village hub begins preparing your items.</p>
            </li>
            <li>
              <strong>Shipment Created</strong>
              <p>We automatically create a shipment via Shiprocket. An AWB (tracking) number is assigned and a courier partner is selected based on your pincode for fastest delivery.</p>
            </li>
            <li>
              <strong>Pickup by Courier</strong>
              <p>The courier partner sends a rider to our Village Hub warehouse to collect your package (within 24 hours).</p>
            </li>
            <li>
              <strong>In Transit</strong>
              <p>Your package moves through the courier's sorting network. Track it in real-time on your Orders page.</p>
            </li>
            <li>
              <strong>Delivered</strong>
              <p>The courier delivers to your doorstep. You'll receive SMS and email notifications at each step.</p>
            </li>
          </ol>
        </section>

        <section>
          <h2>Shipping Charges</h2>
          <ul>
            <li><strong>Standard Delivery:</strong> ₹39 – ₹69 depending on the courier assigned.</li>
            <li><strong>Free Shipping:</strong> On orders above ₹499.</li>
            <li>Charges are calculated at checkout based on delivery pincode and package weight.</li>
          </ul>
        </section>

        <section>
          <h2>Serviceable Areas</h2>
          <p>We currently deliver across <strong>all major Indian cities and towns</strong> via Shiprocket's 25,000+ pincode coverage. Enter your pincode at checkout to verify serviceability.</p>
        </section>

        <section>
          <h2>Tracking Your Order</h2>
          <p>Once shipped, you can track your order:</p>
          <ul>
            <li>From the <strong>Orders</strong> page in your account.</li>
            <li>Using the AWB tracking number on the courier's website.</li>
            <li>Via the tracking link sent to your email.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
