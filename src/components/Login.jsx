import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";
import logo from "../pages/asset/logo.jpg";

const ROLES = ["Student", "Faculty", "Admin"];

const ROLE_CONFIG = {
  Student: {
    accent:  "#10b981",
    light:   "rgba(16,185,129,0.1)",
    glow:    "rgba(16,185,129,0.15)",
    idLabel: "Enrollment Number",
    hint:    "Use your enrollment number as your login ID",
    placeholder: "e.g. 2024001",
  },
  Faculty: {
    accent:  "#f59e0b",
    light:   "rgba(245,158,11,0.1)",
    glow:    "rgba(245,158,11,0.15)",
    idLabel: "Employee ID",
    hint:    "Use your employee ID as your login ID",
    placeholder: "e.g. 1001",
  },
  Admin: {
    accent:  "#6366f1",
    light:   "rgba(99,102,241,0.1)",
    glow:    "rgba(99,102,241,0.15)",
    idLabel: "Admin Login ID",
    hint:    "Enter your administrator credentials",
    placeholder: "e.g. 1001",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole]     = useState("Student");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw]   = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const cfg = ROLE_CONFIG[role];

  const switchRole = (r) => { setRole(r); reset(); setShowPw(false); };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${baseApiURL()}/${role.toLowerCase()}/auth/login`,
        { loginid: data.loginid, password: data.password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Navigate immediately — no toast.success() here, no setTimeout
      // type is lowercase so Profile API calls work: /faculty/details/getDetails
      navigate(`/${role.toLowerCase()}`, {
        state: {
          type:    role.toLowerCase(),
          loginid: res.data.loginid,
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Figtree:wght@400;500;600;700&display=swap');

        .login-root {
          min-height: 100vh;
          background: #080b12;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .login-root { grid-template-columns: 1fr; }
          .login-left { display: none; }
        }

        /* Ambient glow — updates when role changes */
        .login-root::before {
          content: '';
          position: fixed; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 18% 50%, ${cfg.glow} 0%, transparent 70%);
          pointer-events: none;
          transition: background 0.4s ease;
          z-index: 0;
        }

        .login-left {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 60px 48px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .login-left-inner { max-width: 360px; text-align: center; }
        .logo-wrap {
          width: 160px; height: 160px; margin: 0 auto 28px;
          border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 0 50px ${cfg.glow};
          transition: box-shadow 0.4s ease;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.03);
        }
        .logo-wrap img { width: 100%; height: 100%; object-fit: contain; padding: 14px; }
        .login-tagline {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic; font-size: 26px;
          color: #e8edf5; line-height: 1.4; margin-bottom: 10px;
        }
        .login-desc { font-size: 13px; color: #64748b; line-height: 1.6; }

        .login-right {
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 48px;
        }
        .login-card { width: 100%; max-width: 400px; }

        /* Role switcher */
        .role-switcher {
          display: flex;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 4px; gap: 4px; margin-bottom: 32px;
        }
        .role-btn {
          flex: 1; padding: 9px 6px; border-radius: 10px; border: none;
          background: none; cursor: pointer; font-size: 13px; font-weight: 600;
          font-family: 'Figtree', sans-serif; color: #64748b;
          transition: all 0.2s;
        }
        .role-btn.active {
          background: ${cfg.accent};
          color: white;
          box-shadow: 0 2px 10px ${cfg.glow};
        }
        .role-btn:not(.active):hover { background: rgba(255,255,255,0.06); color: #94a3b8; }

        /* Heading */
        .login-heading {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic; font-size: 30px; color: #f1f5f9; margin-bottom: 4px;
        }
        .login-hint { font-size: 13px; color: #64748b; margin-bottom: 26px; }

        /* Fields */
        .l-field { margin-bottom: 16px; }
        .l-label {
          display: block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #64748b; margin-bottom: 6px;
        }
        .l-input-wrap { position: relative; }
        .l-input {
          width: 100%; padding: 11px 15px; border-radius: 12px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: #e8edf5; font-size: 14px; font-family: 'Figtree', sans-serif;
          outline: none; transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .l-input:focus {
          border-color: ${cfg.accent};
          background: ${cfg.light};
          box-shadow: 0 0 0 3px ${cfg.glow};
        }
        .l-input.err { border-color: rgba(239,68,68,0.5); }
        .l-input::placeholder { color: #3a4558; }
        .pw-eye {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: #64748b;
          font-size: 15px; line-height: 1; padding: 4px;
        }
        .l-error { font-size: 12px; color: #f87171; margin-top: 4px; }

        /* Submit */
        .l-submit {
          width: 100%; margin-top: 8px; padding: 13px;
          border-radius: 12px; border: none; cursor: pointer;
          font-size: 15px; font-weight: 700;
          font-family: 'Figtree', sans-serif; color: white;
          background: ${cfg.accent};
          box-shadow: 0 4px 18px ${cfg.glow};
          transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .l-submit:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
        .l-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 17px; height: 17px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .l-footer { font-size: 12px; color: #3a4558; text-align: center; margin-top: 18px; line-height: 1.7; }
      `}</style>

      <div className="login-root">
        {/* Left branding panel */}
        <div className="login-left">
          <div className="login-left-inner">
            <div className="logo-wrap">
              <img src={logo} alt="Campus" />
            </div>
            <div className="login-tagline">Your Campus,<br />All in One Place.</div>
            <div className="login-desc">
              Access timetables, marks, materials, and notices — all in one professional portal.
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="login-right">
          <div className="login-card">

            {/* Role switcher tabs */}
            <div className="role-switcher">
              {ROLES.map(r => (
                <button
                  key={r} type="button"
                  className={`role-btn ${role === r ? "active" : ""}`}
                  onClick={() => switchRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="login-heading">{role} Login</div>
            <div className="login-hint">{cfg.hint}</div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Login ID */}
              <div className="l-field">
                <label className="l-label">{cfg.idLabel}</label>
                <input
                  className={`l-input ${errors.loginid ? "err" : ""}`}
                  type="text"
                  placeholder={cfg.placeholder}
                  autoComplete="username"
                  {...register("loginid", { required: `${cfg.idLabel} is required` })}
                />
                {errors.loginid && <div className="l-error">{errors.loginid.message}</div>}
              </div>

              {/* Password */}
              <div className="l-field">
                <label className="l-label">Password</label>
                <div className="l-input-wrap">
                  <input
                    className={`l-input ${errors.password ? "err" : ""}`}
                    type={showPw ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    style={{ paddingRight: 42 }}
                    {...register("password", { required: "Password is required" })}
                  />
                  <button type="button" className="pw-eye" tabIndex={-1} onClick={() => setShowPw(v => !v)}>
                    {showPw ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <div className="l-error">{errors.password.message}</div>}
              </div>

              <button className="l-submit" type="submit" disabled={loading}>
                {loading ? <div className="spinner" /> : "Sign In →"}
              </button>
            </form>

            <div className="l-footer">
              Default password = your Login ID (enrollment / employee number).<br />
              Change it from your profile after logging in.
            </div>
          </div>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#141b2a", color: "#e8edf5",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "'Figtree', sans-serif", fontSize: 13,
          },
        }}
      />
    </>
  );
};

export default Login;