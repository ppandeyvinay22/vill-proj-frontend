import { NavLink, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

import "./Navbar.css";
import logo from "../../assets/logo/logo.svg";
import Button from "../Button/Button";
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <NavLink to="/" className="logo">
            <img src={logo} alt="GaonHarvest" />
            <span>aonHarvest</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="nav desktop-nav">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/quality">Quality</NavLink>
            <NavLink to="/about">About</NavLink>
            <Button
              label="Make an Order"
              padding="10px 20px"
              fontSize="14px"
              onClick={() => navigate("/order")}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU (DIALOG) ================= */}
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
              {/* Top bar */}
              <div className="mobile-header">
                <NavLink
                  to="/"
                  className="logo"
                  onClick={() => setOpen(false)}
                >
                  <img src={logo} alt="GaonHarvest" />
                  <span>aonHarvest</span>
                </NavLink>

                <button
                  className="close-btn"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={26} />
                </button>
              </div>

              {/* Mobile Nav */}
              <nav className="mobile-nav">
                <NavLink to="/products" onClick={() => setOpen(false)}>
                  Products
                </NavLink>
                <NavLink to="/quality" onClick={() => setOpen(false)}>
                  Quality
                </NavLink>
                <NavLink to="/about" onClick={() => setOpen(false)}>
                  About
                </NavLink>

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
