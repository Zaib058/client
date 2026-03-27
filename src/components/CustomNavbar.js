import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../pages/asset/logo.jpg";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

  .cnav * { box-sizing: border-box; }
  .cnav {
    position: sticky; top: 0; z-index: 200;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .cnav.scrolled {
    background: rgba(10,25,49,0.97) !important;
    backdrop-filter: blur(16px);
    box-shadow: 0 4px 32px rgba(0,0,0,0.35);
  }
  .cnav.top {
    background: rgba(10,25,49,0.85);
    backdrop-filter: blur(8px);
  }
  .cnav-border {
    border-bottom: 1px solid rgba(201,168,76,0.18);
  }

  /* ── INNER ── */
  .cnav-inner {
    max-width: 1400px; margin: 0 auto;
    padding: 0 40px;
    height: 76px;
    display: flex; align-items: center;
    gap: 32px;
  }
  @media (max-width: 768px) { .cnav-inner { padding: 0 20px; } }

  /* ── BRAND ── */
  .cnav-brand {
    display: flex; align-items: center; gap: 12px;
    text-decoration: none; flex-shrink: 0;
  }
  .cnav-brand-logo {
    height: 46px; width: 46px;
    border-radius: 8px;
    border: 2px solid rgba(201,168,76,0.4);
    object-fit: cover;
    transition: border-color 0.2s;
  }
  .cnav-brand:hover .cnav-brand-logo { border-color: #C9A84C; }
  .cnav-brand-text { display: flex; flex-direction: column; }
  .cnav-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700;
    color: #ffffff; line-height: 1.2;
    letter-spacing: 0.2px;
  }
  .cnav-brand-tagline {
    font-size: 10px; font-weight: 500;
    letter-spacing: 1.5px; text-transform: uppercase;
    color: #C9A84C;
  }

  /* ── LINKS ── */
  .cnav-links {
    display: flex; align-items: center;
    gap: 4px; list-style: none;
    margin: 0; padding: 0;
    flex: 1; justify-content: center;
  }
  @media (max-width: 1024px) { .cnav-links { gap: 2px; } }
  @media (max-width: 900px) { .cnav-links { display: none; } }

  .cnav-link {
    position: relative;
    padding: 8px 14px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px; font-weight: 500;
    color: rgba(255,255,255,0.72);
    letter-spacing: 0.2px;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
  }
  .cnav-link:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.06);
  }
  .cnav-link.active {
    color: #C9A84C;
    background: rgba(201,168,76,0.1);
  }
  .cnav-link.active::after {
    content: '';
    position: absolute; bottom: 2px;
    left: 50%; transform: translateX(-50%);
    width: 20px; height: 2px;
    background: #C9A84C; border-radius: 2px;
  }

  /* ── RIGHT ACTIONS ── */
  .cnav-actions {
    display: flex; align-items: center; gap: 12px; flex-shrink: 0;
  }
  .cnav-apply {
    display: inline-flex; align-items: center; gap: 6px;
    background: #C9A84C; color: #0A1931;
    font-weight: 700; font-size: 13px;
    padding: 10px 22px; border-radius: 100px;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
    white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
  }
  .cnav-apply:hover { background: #E8C97A; transform: translateY(-1px); }
  .cnav-login {
    display: inline-flex; align-items: center;
    background: transparent;
    color: rgba(255,255,255,0.75);
    font-weight: 500; font-size: 13px;
    padding: 9px 18px; border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.2);
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
    white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
  }
  .cnav-login:hover { border-color: #C9A84C; color: #C9A84C; }

  /* ── HAMBURGER ── */
  .cnav-burger {
    display: none; flex-direction: column;
    gap: 5px; cursor: pointer;
    background: none; border: none; padding: 8px;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .cnav-burger:hover { background: rgba(255,255,255,0.08); }
  @media (max-width: 900px) { .cnav-burger { display: flex; } }
  .cnav-burger span {
    display: block; width: 22px; height: 2px;
    background: rgba(255,255,255,0.8);
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s, width 0.3s;
  }
  .cnav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .cnav-burger.open span:nth-child(2) { opacity: 0; }
  .cnav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* ── MOBILE DRAWER ── */
  .cnav-drawer {
    position: absolute; top: 100%; left: 0; right: 0;
    background: rgba(10,25,49,0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.1);
    padding: 16px 20px 24px;
    display: flex; flex-direction: column; gap: 4px;
    transform: translateY(-8px);
    opacity: 0; pointer-events: none;
    transition: opacity 0.25s, transform 0.25s;
  }
  .cnav-drawer.open { opacity: 1; transform: translateY(0); pointer-events: all; }
  .cnav-drawer-link {
    display: block; padding: 13px 16px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 15px; font-weight: 500;
    color: rgba(255,255,255,0.75);
    transition: background 0.2s, color 0.2s;
  }
  .cnav-drawer-link:hover, .cnav-drawer-link.active {
    background: rgba(201,168,76,0.1);
    color: #C9A84C;
  }
  .cnav-drawer-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 8px 0; }
  .cnav-drawer-actions { display: flex; gap: 10px; padding: 4px 0; flex-wrap: wrap; }
`;

const navLinks = [
 
  { to: "/about",      label: "About" },
   { to: "/",           label: "Home" },
  { to: "/admissions", label: "Admissions" },
  { to: "/charter",    label: "Partnerships" },
  { to: "/prospectus", label: "Prospectus" },
  { to: "/contact",    label: "Contact" },
  { to: "/gallery_events", label: "Gallery" },
];

const CustomNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <style>{css}</style>
      <nav className={`cnav cnav-border ${scrolled ? "scrolled" : "top"}`} style={{ position: "sticky" }}>
        <div className="cnav-inner">

          {/* Brand */}
          <Link to="/" className="cnav-brand">
            <img src={logo} alt="Dr AQ Khan College" className="cnav-brand-logo" />
            <div className="cnav-brand-text">
              <span className="cnav-brand-name">Dr A.Q. Khan College</span>
              <span className="cnav-brand-tagline">Science & Technology</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="cnav-links">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`cnav-link${isActive(l.to) ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="cnav-actions">
            <Link to="/login" className="cnav-login">Login</Link>
            <Link to="/admissions" className="cnav-apply">Apply Now →</Link>

            {/* Hamburger */}
            <button
              className={`cnav-burger${open ? " open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`cnav-drawer${open ? " open" : ""}`}>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`cnav-drawer-link${isActive(l.to) ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="cnav-drawer-divider" />
          <div className="cnav-drawer-actions">
            <Link to="/admissions" className="cnav-apply" style={{ flex: 1, justifyContent: "center" }}>
              📄 Apply Now
            </Link>
            <Link to="/login" className="cnav-login" style={{ flex: 1, justifyContent: "center" }}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;