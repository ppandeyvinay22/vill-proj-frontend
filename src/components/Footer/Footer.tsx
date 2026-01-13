import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4>GaonHarvest</h4>
          <p>Fresh from Gaon. Honest to Home.</p>
        </div>

        <div>
          <h5>Company</h5>
          <p>About</p>
          <p>Quality</p>
        </div>

        <div>
          <h5>Order</h5>
          <p>WhatsApp</p>
          <p>Google Form</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GaonHarvest
      </div>
    </footer>
  );
}
