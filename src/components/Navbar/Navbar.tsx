import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useCartStore } from "../../store/useCartStore";
import { ShoppingCart, LogOut, Package, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { totalCount } = useCartStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
    { to: "/about", label: "Our Story" },
    ...(isAuthenticated ? [{ to: "/orders", label: "My Orders" }] : []),
  ];

  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🌿 VillageFood
        </Link>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={isActive(link.to) ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {isAuthenticated ? (
            <>
              <span className="navbar-welcome">Hi, {user?.name.split(' ')[0]}</span>
              <button className="icon-btn" onClick={() => navigate("/cart")} aria-label="Cart">
                <ShoppingCart size={20} />
                {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
              </button>
              <button className="icon-btn" onClick={() => navigate("/orders")} aria-label="Orders">
                <Package size={20} />
              </button>
              <button className="icon-btn logout-btn" onClick={handleLogout} aria-label="Logout">
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-link">Log In</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
