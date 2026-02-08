import { NavLink, useNavigate } from "react-router-dom";
import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import "./Navbar.css";
import logo from "../../assets/logo/logo.svg";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { AUTH_VISIBLE } from "../../config/featureFlags";

const dropdownLinks = [
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const authCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownCloseTimer.current = setTimeout(() => setDropdownOpen(false), 250);
  };

  const cancelClose = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };
  const closeAuth = () => {
    authCloseTimer.current = setTimeout(() => setAuthOpen(false), 300);
  };
  const cancelAuthClose = () => {
    if (authCloseTimer.current) {
      clearTimeout(authCloseTimer.current);
      authCloseTimer.current = null;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="GaonKart" />
            <span>aonKart</span>
          </NavLink>

          <nav className="nav desktop-nav">
            <div
              className="nav-dropdown-trigger"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span className="nav-dropdown-label">
                Explore
                <FiChevronDown className={`nav-dropdown-chevron ${dropdownOpen ? "open" : ""}`} />
              </span>
              {dropdownOpen && (
                <div
                  className="nav-dropdown"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  {dropdownLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="nav-dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="nav-dropdown-text">{label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/about">About</NavLink>
            {AUTH_VISIBLE && (
              <div
                className="nav-auth-wrap"
                onMouseEnter={() => { cancelAuthClose(); setAuthOpen(true); }}
                onMouseLeave={closeAuth}
              >
                <button
                  className="auth-icon-button"
                  aria-label="Account"
                  onClick={() => setAuthOpen((s) => !s)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#fff" />
                    <path d="M3 20c0-2.761 4.477-5 9-5s9 2.239 9 5v1H3v-1z" fill="#fff" />
                  </svg>
                </button>
                {authOpen && (
                  <div className="auth-popover" onMouseEnter={cancelAuthClose} onMouseLeave={closeAuth}>
                    <NavLink to="/login" className="auth-popover-item" onClick={() => setAuthOpen(false)}>
                      <span className="auth-popover-text">Login</span>
                    </NavLink>
                    <NavLink to="/signup" className="auth-popover-item" onClick={() => setAuthOpen(false)}>
                      <span className="auth-popover-text">Sign up</span>
                    </NavLink>
                  </div>
                )}
              </div>
            )}
            <Button
              label="Make an Order"
              padding="10px 20px"
              fontSize="14px"
              icon={<FaArrowRight />}
              onClick={() => navigate("/order")}
            />
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="mobile-menu" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="overlay-enter"
            enterFrom="overlay-enter-from"
            enterTo="overlay-enter-to"
            leave="overlay-leave"
            leaveFrom="overlay-leave-from"
            leaveTo="overlay-leave-to"
          >
            <div className="mobile-overlay" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="panel-enter"
            enterFrom="panel-enter-from"
            enterTo="panel-enter-to"
            leave="panel-leave"
            leaveFrom="panel-leave-from"
            leaveTo="panel-leave-to"
          >
            <Dialog.Panel className="mobile-panel">
              <div className="mobile-header">
                <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
                  <img src={logo} alt="GaonKart" />
                  <span>aonKart</span>
                </NavLink>
                <button
                  className="close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={26} />
                </button>
              </div>

              <nav className="mobile-nav">
                <div className="mobile-nav-group">
                  <span className="mobile-nav-group-label">Explore</span>
                  <NavLink to="/products" onClick={() => setOpen(false)}>
                    Products
                  </NavLink>
                  <NavLink to="/quality" onClick={() => setOpen(false)}>
                    Quality
                  </NavLink>
                </div>
                <NavLink to="/about" onClick={() => setOpen(false)}>
                  About
                </NavLink>
                {AUTH_VISIBLE && (
                  <>
                    <NavLink to="/login" onClick={() => setOpen(false)} className="auth-link">Login</NavLink>
                    <NavLink to="/signup" onClick={() => setOpen(false)} className="auth-link">Sign up</NavLink>
                  </>
                )}
                <Button
                  label="Make an Order"
                  padding="12px 24px"
                  icon={<FaArrowRight />}
                  fontSize="16px"
                  onClick={() => {
                    setOpen(false);
                    navigate("/order");
                  }}
                />
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
