import "./Order.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import { FaWhatsapp } from "react-icons/fa";
import { AUTH_VISIBLE } from "../../config/featureFlags";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Order() {
  const navigate = useNavigate();
  const whatsappNumber = "919026198225";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="order-hero-inner">
          <motion.h1
            className="order-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            Fresh from Gaon. <span className="highlight">Honest to Order.</span>
          </motion.h1>
          <motion.p
            className="order-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            GaonKart brings pure, traditionally sourced wheat, rice, and dal
            directly from villages. Order the way that works for you.
          </motion.p>
        </div>
      </section>

      <section className="order-options">
        <div className="order-options-inner">
          <motion.h2
            className="order-section-heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45 }}
          >
            How to order
          </motion.h2>

          <div className="order-cards">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="order-card order-card-primary"
            >
              <span className="order-card-icon">
                <FaWhatsapp size={32} />
              </span>
              <h3>Order on WhatsApp</h3>
              <p>
                Send us your order on WhatsApp. We’ll confirm availability and
                delivery. Quick and personal.
              </p>
              <span className="order-card-cta">Open WhatsApp →</span>
            </a>

            <div
              className="order-card order-card-placeholder"
            >
              <h3>Online orders (coming soon)</h3>
              <p>
                We’re building a full order experience with login and order
                history. Until then, use WhatsApp or the form below.
              </p>
            </div>
          </div>

          <motion.div
            className="order-actions"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              label="Order on WhatsApp"
              icon={<FaWhatsapp />}
              bgColor="#25D366"
              textColor="#fff"
              onClick={() => window.open(whatsappUrl, "_blank")}
            />
            <Button
              label="Back to Home"
              bgColor="#fff"
              textColor="#000"
              onClick={() => navigate("/")}
            />
          </motion.div>

          {AUTH_VISIBLE && (
            <motion.p className="order-auth-hint" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Have an account? <Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link> to see your orders.
            </motion.p>
          )}
        </div>
      </section>
    </main>
  );
}
