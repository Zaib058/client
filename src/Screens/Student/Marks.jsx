// ── Student/Marks.jsx ──────────────────────────────────────────
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { baseApiURL } from "../../baseUrl";

const MAX = { internal: 15, external: 25 };
const color = (s, m) => { const p = s / m; return p >= 0.8 ? "#10b981" : p >= 0.5 ? "#f59e0b" : "#ef4444"; };

const Marks = () => {
  const userData = useSelector(s => s.userData);
  const [internal, setInternal] = useState(null);
  const [external, setExternal] = useState(null);

  useEffect(() => {
    axios.post(`${baseApiURL()}/marks/getMarks`, { enrollmentNo: userData.enrollmentNo }, { headers: { "Content-Type": "application/json" } })
      .then(r => {
        if (r.data.Mark?.length > 0) {
          setInternal(r.data.Mark[0].internal || null);
          setExternal(r.data.Mark[0].external || null);
        }
      }).catch(err => { toast.dismiss(); console.log(err); });
  }, [userData.enrollmentNo]);

  const renderSection = (data, max, label) => (
    <div className="card-lg">
      <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: 12, marginBottom: 18 }}>
        <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 18, color: "var(--text)" }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>Out of {max} marks</div>
      </div>
      {Object.entries(data).map(([sub, score]) => (
        <div className="mark-row" key={sub}>
          <span className="mark-sub">{sub}</span>
          <div className="mark-bar-bg">
            <div className="mark-bar-fill" style={{ width: `${Math.min((score / max) * 100, 100)}%`, background: color(score, max) }} />
          </div>
          <span className="mark-score" style={{ color: color(score, max) }}>{score}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 24, color: "var(--text)", marginBottom: 20 }}>
        Academic Results — Year {userData.semester}
      </div>
      {(internal || external) ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {internal && renderSection(internal, MAX.internal, "Daily Test Marks")}
          {external && renderSection(external, MAX.external, "Check Point Marks")}
        </div>
      ) : (
        <div className="empty card-lg"><div className="empty-icon">◎</div><p>No marks recorded yet.</p><small>Check back after your assessments.</small></div>
      )}
    </>
  );
};
export default Marks;
