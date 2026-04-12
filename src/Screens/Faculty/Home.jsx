import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DS, roleTheme } from "../design";
import Profile from "./Profile";
import Timetable from "./Timetable";
import Marks from "./Marks";
import Material from "./Material";
import Notice from "../../components/Notice";
import Student from "./Student";

const t = roleTheme.faculty;

const NAV = [
  { key: "My Profile",   icon: "◉", label: "My Profile" },
  { key: "Student Info", icon: "⚑", label: "Student Info" },
  { key: "Upload Marks", icon: "◎", label: "Upload Marks" },
  { key: "Timetable",   icon: "◫", label: "Timetable" },
  { key: "Notice",      icon: "◈", label: "Notices" },
  { key: "Material",    icon: "⊟", label: "Materials" },
];

const Home = () => {
  const [page, setPage]   = useState("My Profile");
  const [open, setOpen]   = useState(true);
  const [load, setLoad]   = useState(false);
  const router   = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!router.state) {
      navigate("/");
      return;
    }
    setLoad(true);
  }, [navigate, router.state]);

  if (!load) return null;
  const W = open ? "220px" : "60px";

  return (
    <>
      <style>{DS}</style>
      <style>{`
        :root { --accent: ${t.accent}; }
        .sb-item.active { background: ${t.light}; border: 1px solid ${t.border}; color: ${t.text}; }
        .tab.active     { background: ${t.accent}; border-color: ${t.accent}; }
        .btn-primary    { background: ${t.accent}; }
        .sb-logo        { background: linear-gradient(135deg, ${t.accent}, ${t.accent}cc); }
        .field-inp:focus, .field-sel:focus { border-color: ${t.accent}; }
        .search-bar:focus-within { border-color: ${t.accent}44; }
      `}</style>

      <div className="erp-layout">
        <aside className="erp-sidebar" style={{ width: W }}>
          <div className="sb-header">
            <div className="sb-logo">{open ? "FAC" : "F"}</div>
            {open && (
              <div>
                <div className="sb-title">Faculty Portal</div>
                <div className="sb-sub">Campus ERP</div>
              </div>
            )}
          </div>

          <nav className="sb-nav">
            {open && <div className="sb-label">Menu</div>}
            {NAV.map(n => (
              <button
                key={n.key}
                className={`sb-item ${page === n.key ? "active" : ""}`}
                onClick={() => setPage(n.key)}
                title={!open ? n.label : ""}
              >
                <span className="sb-icon">{n.icon}</span>
                {open && <span className="sb-text">{n.label}</span>}
              </button>
            ))}
          </nav>

          <div className="sb-footer">
            <button className="sb-item" onClick={() => navigate("/")}>
              <span className="sb-icon">⎋</span>
              {open && <span className="sb-text">Sign Out</span>}
            </button>
          </div>
        </aside>

        <button
          className="erp-toggle"
          style={{ left: `calc(${W} - 12px)` }}
          onClick={() => setOpen(o => !o)}
        >
          {open ? "‹" : "›"}
        </button>

        <div className="erp-main" style={{ marginLeft: W }}>
          <header className="erp-topbar">
            <h1 className="tb-title">{NAV.find(n => n.key === page)?.label}</h1>
            <div className="tb-right">
              <span className="tb-badge" style={{ background: t.light, border: `1px solid ${t.border}`, color: t.text }}>
                Faculty
              </span>
              <button className="tb-logout" onClick={() => navigate("/")}>Sign Out</button>
            </div>
          </header>

          <main className="erp-content fade-up">
            {page === "My Profile"   && <Profile />}
            {page === "Student Info" && <Student />}
            {page === "Upload Marks" && <Marks />}
            {page === "Timetable"   && <Timetable />}
            {page === "Notice"      && <Notice />}
            {page === "Material"    && <Material />}
          </main>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--text)",
            border: "1px solid var(--border2)",
            fontFamily: "var(--font-body)",
            fontSize: 13,
          },
        }}
      />
    </>
  );
};

export default Home;