import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { baseApiURL } from "../../baseUrl";

const Branch = () => {
  const [name, setName] = useState("");
  const [tab, setTab] = useState("add");
  const [branches, setBranches] = useState([]);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => { fetch(); }, []);

  const fetch = () => {
    axios.get(`${baseApiURL()}/branch/getBranch`)
      .then(r => { if (r.data.success) setBranches(r.data.branches); })
      .catch(err => toast.error(err.message));
  };

  const add = () => {
    if (!name.trim()) return toast.error("Enter a department name.");
    toast.loading("Adding…");
    axios.post(`${baseApiURL()}/branch/addBranch`, { name }, { headers: { "Content-Type": "application/json" } })
      .then(r => { toast.dismiss(); if (r.data.success) { toast.success(r.data.message); setName(""); fetch(); setTab("view"); } else toast.error(r.data.message); })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
  };

  const remove = id => {
    toast.loading("Deleting…");
    axios.delete(`${baseApiURL()}/branch/deleteBranch/${id}`, { headers: { "Content-Type": "application/json" } })
      .then(r => { toast.dismiss(); if (r.data.success) { toast.success(r.data.message); fetch(); } else toast.error(r.data.message); })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
    setConfirmId(null);
  };

  return (
    <>
      <div className="tab-row">
        <button className={`tab ${tab === "add" ? "active" : ""}`} onClick={() => setTab("add")}>+ Add Department</button>
        <button className={`tab ${tab === "view" ? "active" : ""}`} onClick={() => setTab("view")}>View ({branches.length})</button>
      </div>

      {tab === "add" && (
        <div className="card-lg" style={{ maxWidth: 460 }}>
          <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 20, color: "var(--text)", marginBottom: 18 }}>
            New Department
          </div>
          <div className="field" style={{ marginBottom: 16 }}>
            <div className="field-lbl">Department Name</div>
            <input className="field-inp" placeholder="e.g. Computer Science"
              value={name} onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && add()} />
          </div>
          <button className="btn btn-primary" onClick={add}>Add Department</button>
        </div>
      )}

      {tab === "view" && (
        <div style={{ maxWidth: 600 }}>
          {branches.length === 0
            ? <div className="empty card"><div className="empty-icon">⬡</div><p>No departments yet.</p></div>
            : branches.map((b, i) => (
              <div className="list-item" key={b._id} style={{ animationDelay: `${i * 0.04}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--faint)", minWidth: 24 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{b.name}</div>
                </div>
                <button className="btn btn-danger" style={{ padding: "6px 14px", fontSize: 12 }}
                  onClick={() => setConfirmId(b._id)}>
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
            <h4>Delete Department?</h4>
            <p>This action cannot be undone. Students and faculty linked to this department may be affected.</p>
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
export default Branch;
