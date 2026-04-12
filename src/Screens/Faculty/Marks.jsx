import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseApiURL } from "../../baseUrl";

const Marks = () => {
  const [branch, setBranch] = useState([]);
  const [subject, setSubject] = useState([]);
  const [students, setStudents] = useState(null);
  const [marks, setMarks] = useState({});
  const [sel, setSel] = useState({ branch: "", semester: "", subject: "", examType: "" });

  useEffect(() => {
    axios.get(`${baseApiURL()}/branch/getBranch`).then(r => r.data.success && setBranch(r.data.branches)).catch(() => {});
    axios.get(`${baseApiURL()}/subject/getSubject`).then(r => r.data.success && setSubject(r.data.subject)).catch(() => {});
  }, []);

  const loadStudents = () => {
    if (!sel.branch || !sel.semester || !sel.subject || !sel.examType)
      return toast.error("Please fill all filters before loading students.");
    toast.loading("Loading students…");
    axios.post(`${baseApiURL()}/student/details/getDetails`,
      { branch: sel.branch, semester: sel.semester }, { headers: { "Content-Type": "application/json" } })
      .then(r => { toast.dismiss(); if (r.data.success) { setStudents(r.data.user); setMarks({}); } else toast.error(r.data.message); })
      .catch(err => { toast.dismiss(); toast.error(err.message); });
  };

  const submit = async () => {
    if (!students?.length) return;
    toast.loading("Uploading marks…");
    try {
      await Promise.all(students.map(s =>
        axios.post(`${baseApiURL()}/marks/addMarks`,
          { enrollmentNo: s.enrollmentNo, [sel.examType]: { [sel.subject]: marks[s.enrollmentNo] || 0 } },
          { headers: { "Content-Type": "application/json" } })
      ));
      toast.dismiss(); toast.success("All marks uploaded!");
    } catch { toast.dismiss(); toast.error("Some marks failed to upload."); }
  };

  return (
    <>
      {!students && (
        <div className="filter-card">
          <div className="filter-title">Filter Students</div>
          <div className="filter-grid">
            {[
              { lbl: "Department", key: "branch", opts: branch.map(b => ({ v: b.name, l: b.name })) },
              { lbl: "Year / Class", key: "semester", opts: [{ v: "1", l: "1st Year" }, { v: "2", l: "2nd Year" }] },
              { lbl: "Subject", key: "subject", opts: subject.map(s => ({ v: s.name, l: s.name })) },
              { lbl: "Exam Type", key: "examType", opts: [{ v: "internal", l: "Daily Test" }, { v: "external", l: "Check Point" }] },
            ].map(f => (
              <div className="field" key={f.key}>
                <div className="field-lbl">{f.lbl}</div>
                <select className="field-sel" value={sel[f.key]} onChange={e => setSel(p => ({ ...p, [f.key]: e.target.value }))}>
                  <option value="">Select…</option>
                  {f.opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                </select>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" style={{ marginTop: 18 }} onClick={loadStudents}>Load Students →</button>
        </div>
      )}

      {students && (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 20, color: "var(--text)" }}>
              {sel.examType === "internal" ? "Daily Test" : "Check Point"} — {sel.subject}, {sel.branch} Yr {sel.semester}
            </div>
            <button className="btn btn-ghost" onClick={() => setStudents(null)}>← Change Filters</button>
          </div>

          {students.length === 0 ? (
            <div className="empty card"><div className="empty-icon">⚑</div><p>No students found.</p></div>
          ) : (
            <>
              <div className="marks-entry">
                {students.map(s => (
                  <div className="entry-row" key={s.enrollmentNo}>
                    <div className="entry-enroll">{s.enrollmentNo}</div>
                    <input className="entry-inp" type="number" placeholder="Marks"
                      value={marks[s.enrollmentNo] || ""}
                      onChange={e => setMarks(p => ({ ...p, [s.enrollmentNo]: e.target.value }))} />
                  </div>
                ))}
              </div>
              <button className="btn btn-primary btn-full" onClick={submit}>✓ Upload All Marks</button>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Marks;
