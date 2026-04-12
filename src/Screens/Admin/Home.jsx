/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../baseUrl";
import { DS, roleTheme } from "../design";
import Notice from "../../components/Notice";
import Student from "./Student";
import Faculty from "./Faculty";
import Subjects from "./Subject";
import Admin from "./Admin";
import Profile from "./Profile";
import Branch from "./Branch";

const t = roleTheme.admin;
const NAV = [
  { key: "Profile",   icon: "◉", label: "My Profile" },
  { key: "Student",   icon: "⚑", label: "Students" },
  { key: "Faculty",   icon: "✦", label: "Faculty" },
  { key: "Branch",    icon: "⬡", label: "Departments" },
  { key: "Notice",    icon: "◈", label: "Notices" },
  { key: "Subjects",  icon: "⊞", label: "Subjects" },
  { key: "Admin",     icon: "⊛", label: "Admins" },
];

const Home = () => {
  const router   = useLocation();
  const navigate = useNavigate();
  const [page, setPage]  = useState("Profile");
  const [open, setOpen]  = useState(true);
  const [counts, setCounts] = useState({ students: "—", faculty: "—" });
  const [load, setLoad]  = useState(false);

  useEffect(() => { if (!router.state) navigate("/"); setLoad(true); }, []);
  useEffect(() => {
    axios.get(`${baseApiURL()}/student/details/count`).then(r => r.data.success && setCounts(p => ({ ...p, students: r.data.user }))).catch(() => {});
    axios.get(`${baseApiURL()}/faculty/details/count`).then(r => r.data.success && setCounts(p => ({ ...p, faculty: r.data.user }))).catch(() => {});
  }, []);

  if (!load) return null;
  const W = open ? "220px" : "60px";

  return (
    <>
      <style>{DS}</style>
      <style>{`
        :root { --accent: ${t.accent}; }
        .sb-item.active { background: ${t.light}; border: 1px solid ${t.border}; color: ${t.text}; }
        .tab.active { background: ${t.accent}; border-color: ${t.accent}; }
        .btn-primary { background: ${t.accent}; }
        .sb-logo { background: linear-gradient(135deg, ${t.accent}, ${t.accent}cc); }
        .field-inp:focus,.field-sel:focus { border-color: ${t.accent}; background: ${t.light}; }
      `}</style>

      <div className="erp-layout">
        {/* Sidebar */}
        <aside className="erp-sidebar" style={{ width: W }}>
          <div className="sb-header">
            <div className="sb-logo">{open ? "ERP" : t.letter}</div>
            {open && <div><div className="sb-title">Campus ERP</div><div className="sb-sub">Administrator</div></div>}
          </div>
          <nav className="sb-nav">
            {open && <div className="sb-label">Navigation</div>}
            {NAV.map(n => (
              <button key={n.key} className={`sb-item ${page === n.key ? "active" : ""}`} onClick={() => setPage(n.key)} title={!open ? n.label : ""}>
                <span className="sb-icon">{n.icon}</span>
                {open && <span className="sb-text">{n.label}</span>}
              </button>
            ))}
          </nav>
          <div className="sb-footer">
            <button className="sb-item" onClick={() => navigate("/")} title={!open ? "Sign out" : ""}>
              <span className="sb-icon">⎋</span>
              {open && <span className="sb-text">Sign Out</span>}
            </button>
          </div>
        </aside>

        {/* Toggle */}
        <button className="erp-toggle" style={{ left: `calc(${W} - 12px)` }} onClick={() => setOpen(o => !o)}>
          {open ? "‹" : "›"}
        </button>

        {/* Main */}
        <div className="erp-main" style={{ marginLeft: W }}>
          <header className="erp-topbar">
            <h1 className="tb-title">{NAV.find(n => n.key === page)?.label}</h1>
            <div className="tb-right">
              <span className="tb-stat" style={{ background: t.light, border: `1px solid ${t.border}`, color: t.text }}>
                {counts.students} Students
              </span>
              <span className="tb-stat" style={{ background: t.light, border: `1px solid ${t.border}`, color: t.text }}>
                {counts.faculty} Faculty
              </span>
              <button className="tb-logout" onClick={() => navigate("/")}>Sign Out</button>
            </div>
          </header>

          <main className="erp-content fade-up">
            {page === "Profile" && (
              <div className="stat-grid" style={{ marginBottom: 28 }}>
                {[
                  { icon: "⚑", label: "Total Students", val: counts.students },
                  { icon: "✦", label: "Total Faculty",  val: counts.faculty },
                  { icon: "⊛", label: "Your Role",      val: "Admin" },
                ].map(s => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-icon" style={{ background: t.light, color: t.text }}>{s.icon}</div>
                    <div><div className="stat-val">{s.val}</div><div className="stat-lbl">{s.label}</div></div>
                  </div>
                ))}
              </div>
            )}
            {page === "Profile"   && <Profile />}
            {page === "Student"   && <Student />}
            {page === "Faculty"   && <Faculty />}
            {page === "Branch"    && <Branch />}
            {page === "Notice"    && <Notice />}
            {page === "Subjects"  && <Subjects />}
            {page === "Admin"     && <Admin />}
          </main>
        </div>
      </div>

      <Toaster position="bottom-right" toastOptions={{
        style: { background: "var(--card)", color: "var(--text)", border: "1px solid var(--border2)", fontFamily: "var(--font-body)", fontSize: 13 }
      }} />
    </>
  );
};

export default Home;
