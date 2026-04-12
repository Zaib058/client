import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseApiURL } from "../../baseUrl";

const fmt = iso => {
  const [d] = iso.split("T");
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
};

const Material = () => {
  const [subject, setSubject] = useState([]);
  const [selected, setSelected] = useState("");
  const [material, setMaterial] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    axios.get(`${baseApiURL()}/subject/getSubject`)
      .then(r => { if (r.data.success) setSubject(r.data.subject); })
      .catch(() => {});
  }, []);

  const load = () => {
    if (!selected) return toast.error("Please select a subject first.");
    axios.post(`${baseApiURL()}/material/getMaterial`, { subject: selected }, { headers: { "Content-Type": "application/json" } })
      .then(r => { if (r.data.success) { setMaterial(r.data.material); setSearched(true); } })
      .catch(console.error);
  };

  const onSubjectChange = e => {
    setSelected(e.target.value);
    setMaterial([]);
    setSearched(false);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-end", marginBottom: 24 }}>
        <div className="field" style={{ flex: 1, maxWidth: 320 }}>
          <div className="field-lbl">Select Subject</div>
          <select className="field-sel" value={selected} onChange={onSubjectChange}>
            <option value="">Choose a subject…</option>
            {subject.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
          </select>
        </div>
        <button className="btn btn-primary" onClick={load}>Load Materials</button>
      </div>

      {searched && material.length === 0 && (
        <div className="empty card">
          <div className="empty-icon">⊟</div>
          <p>No materials found for <strong>{selected}</strong>.</p>
          <small>Your faculty hasn't uploaded any yet.</small>
        </div>
      )}

      {material.map((item, i) => (
        <div className="mat-card fade-up" key={i}
          onClick={() => item.link && window.open(process.env.REACT_APP_MEDIA_LINK + "/" + item.link)}
          style={{ animationDelay: `${i * 0.05}s` }}>
          <div className="mat-title">
            {item.title}
            {item.link && <span style={{ fontSize: 14, color: "var(--muted)" }}>↗</span>}
          </div>
          <div className="mat-meta">{item.subject} · {item.faculty}</div>
          {item.createdAt && <div className="mat-date">📅 {fmt(item.createdAt)}</div>}
        </div>
      ))}
    </>
  );
};
export default Material;
