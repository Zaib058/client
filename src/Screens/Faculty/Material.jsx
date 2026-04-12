/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { baseApiURL } from "../../baseUrl";

const Material = () => {
  const { fullname } = useSelector(s => s.userData);
  const [subject, setSubject] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({ title: "", subject: "" });

  // Build faculty name: "FirstName LastName" (skip middle)
  const facultyName = (() => {
    const parts = (fullname || "").split(" ").filter(Boolean);
    return parts.length >= 2 ? `${parts[0]} ${parts[parts.length - 1]}` : fullname || "";
  })();

  useEffect(() => {
    axios.get(`${baseApiURL()}/subject/getSubject`)
      .then(r => { toast.dismiss(); if (r.data.success) setSubject(r.data.subject); })
      .catch(() => {});
  }, []);

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setFileName(f.name);
  };

  const upload = () => {
    if (!form.title.trim() || !form.subject || !file)
      return toast.error("Please fill all fields and select a file.");
    toast.loading("Uploading material…");
    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("subject", form.subject);
    fd.append("faculty", facultyName);
    fd.append("type", "material");
    fd.append("material", file);
    axios.post(`${baseApiURL()}/material/addMaterial`, fd, { headers: { "Content-Type": "multipart/form-data" } })
      .then(r => {
        toast.dismiss();
        if (r.data.success) { toast.success(r.data.message); setForm({ title: "", subject: "" }); setFile(null); setFileName(""); }
        else toast.error(r.data.message);
      }).catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Upload failed"); });
  };

  return (
    <div className="card-lg" style={{ maxWidth: 560 }}>
      <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 22, color: "var(--text)", marginBottom: 22 }}>
        Upload Study Material
      </div>

      <div className="field" style={{ marginBottom: 16 }}>
        <div className="field-lbl">Material Title</div>
        <input className="field-inp" type="text" placeholder="e.g. Chapter 3 Notes"
          value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
      </div>

      <div className="field" style={{ marginBottom: 16 }}>
        <div className="field-lbl">Subject</div>
        <select className="field-sel" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}>
          <option value="">Select subject…</option>
          {subject.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
        </select>
      </div>

      <div className="field" style={{ marginBottom: 20 }}>
        <div className="field-lbl">File</div>
        <label className="upload-zone" htmlFor="mat-upload">
          <div style={{ fontSize: 26, marginBottom: 6 }}>⊟</div>
          <p>{fileName || "Click to select a file (PDF, DOC, etc.)"}</p>
        </label>
        <input type="file" id="mat-upload" style={{ display: "none" }} onChange={handleFile} />
        {fileName && (
          <div className="preview-strip">
            <span style={{ fontSize: 24 }}>📄</span>
            <p>{fileName}</p>
          </div>
        )}
      </div>

      <button className="btn btn-primary btn-full" onClick={upload}>⊞ Upload Material</button>
    </div>
  );
};
export default Material;
