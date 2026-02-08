import "../Login/Auth.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import logo from "../../assets/logo/logo.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Signup() {
  return (
    <main className="auth-page">
      <motion.div
        className="auth-card"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="auth-logo">
          <img src={logo} alt="GaonKart" />
          <span>aonKart</span>
        </Link>
        <h1 className="auth-title">Sign up</h1>
        <p className="auth-subtitle">Create an account to order and track your food.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">
            Name
            <input
              type="text"
              className="auth-input"
              placeholder="Your name"
              disabled
              aria-disabled="true"
            />
          </label>
          <label className="auth-label">
            Email
            <input
              type="email"
              className="auth-input"
              placeholder="you@example.com"
              disabled
              aria-disabled="true"
            />
          </label>
          <label className="auth-label">
            Password
            <input
              type="password"
              className="auth-input"
              placeholder="••••••••"
              disabled
              aria-disabled="true"
            />
          </label>
          <Button
            label="Sign up (coming soon)"
            bgColor="#7ddc8a"
            textColor="#000"
            padding="14px 24px"
            onClick={() => {}}
          />
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </motion.div>
    </main>
  );
}
