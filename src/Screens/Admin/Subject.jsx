import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { baseApiURL } from "../../baseUrl";

const Subject = () => {
  const [form, setForm] = useState({ name: "", code: "" });
  const [tab, setTab] = useState("add");
  const [subjects, setSubjects] = useState([]);
  const [confirmId, setConfirmId] = useState(null);
  const [confirmName, setConfirmName] = useState("");

  useEffect(() => { fetch(); }, []);

  const fetch = () => {
    axios.get(`${baseApiURL()}/subject/getSubject`)
      .then(r => { if (r.data.success) setSubjects(r.data.subject); })
      .catch(err => toast.error(err.message));
  };

  const add = () => {
    if (!form.name.trim() || !form.code) return toast.error("Both subject code and name are required.");
    toast.loading("Adding…");
    axios.post(`${baseApiURL()}/subject/addSubject`, form, { headers: { "Content-Type": "application/json" } })
      .then(r => { toast.dismiss(); if (r.data.success) { toast.success(r.data.message); setForm({ name: "", code: "" }); fetch(); setTab("view"); } else toast.error(r.data.message); })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
  };

  const remove = id => {
    toast.loading("Deleting…");
    axios.delete(`${baseApiURL()}/subject/deleteSubject/${id}`, { headers: { "Content-Type": "application/json" } })
      .then(r => { toast.dismiss(); if (r.data.success) { toast.success(r.data.message); fetch(); } else toast.error(r.data.message); })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
    setConfirmId(null);
  };

  return (
    <>
      <div className="tab-row">
        <button className={`tab ${tab === "add" ? "active" : ""}`} onClick={() => setTab("add")}>+ Add Subject</button>
        <button className={`tab ${tab === "view" ? "active" : ""}`} onClick={() => setTab("view")}>View ({subjects.length})</button>
      </div>

      {tab === "add" && (
        <div className="card-lg" style={{ maxWidth: 480 }}>
          <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 20, color: "var(--text)", marginBottom: 18 }}>New Subject</div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 14, marginBottom: 16 }}>
            <div className="field">
              <div className="field-lbl">Code</div>
              <input className="field-inp" type="number" placeholder="101"
                value={form.code} onChange={e => setForm(p => ({ ...p, code: e.target.value }))} />
            </div>
            <div className="field">
              <div className="field-lbl">Subject Name</div>
              <input className="field-inp" placeholder="e.g. Mathematics"
                value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                onKeyDown={e => e.key === "Enter" && add()} />
            </div>
          </div>
          <button className="btn btn-primary" onClick={add}>Add Subject</button>
        </div>
      )}

      {tab === "view" && (
        <div style={{ maxWidth: 600 }}>
          {subjects.length === 0
            ? <div className="empty card"><div className="empty-icon">⊞</div><p>No subjects yet.</p></div>
            : subjects.map((s, i) => (
              <div className="list-item" key={s._id}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span className="list-code" style={{ background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.22)", color: "#a5b4fc" }}>{s.code}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{s.name}</span>
                </div>
                <button className="btn btn-danger" style={{ padding: "6px 14px", fontSize: 12 }}
                  onClick={() => { setConfirmId(s._id); setConfirmName(s.name); }}>
                  Delete
                </button>
              </div>
            ))
          }
        </div>
      )}

      {confirmId && (
        <div className="modal-bg">
          <div className="modal-box">
            <h4>Delete Subject?</h4>
            <p>"{confirmName}" will be removed. Existing marks for this subject may be affected.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={() => remove(confirmId)}>Yes, Delete</button>
              <button className="btn btn-ghost" onClick={() => setConfirmId(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Subject;
