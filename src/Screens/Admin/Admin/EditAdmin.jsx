import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../../baseUrl";

const EditAdmin = () => {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [id, setId] = useState("");
  const [d, setD] = useState({
    employeeId: "", firstName: "", middleName: "",
    lastName: "", email: "", phoneNumber: "", gender: "", profile: "",
  });

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const doSearch = e => {
    e.preventDefault();
    if (!search.trim()) return toast.error("Enter an employee ID.");
    toast.loading("Searching…");
    axios.post(`${baseApiURL()}/admin/details/getDetails`,
      { employeeId: search }, { headers: { "Content-Type": "application/json" } })
      .then(r => {
        toast.dismiss();
        if (r.data.success && r.data.user.length > 0) {
          const u = r.data.user[0];
          setId(u._id);
          setFound(true);
          toast.success("Admin found!");
          setD({
            employeeId: u.employeeId, firstName: u.firstName,
            middleName: u.middleName || "", lastName: u.lastName,
            email: u.email, phoneNumber: u.phoneNumber,
            gender: u.gender, profile: u.profile,
          });
        } else {
          toast.error("No admin found with that ID.");
        }
      })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
  };

  const clear = () => {
    setSearch(""); setFound(false); setFile(null); setPreview(""); setId("");
    setD({ employeeId: "", firstName: "", middleName: "", lastName: "", email: "", phoneNumber: "", gender: "", profile: "" });
  };

  const submit = e => {
    e.preventDefault();
    toast.loading("Updating…");
    const fd = new FormData();
    Object.entries(d).forEach(([k, v]) => { if (v) fd.append(k, v); });
    if (file) { fd.append("type", "profile"); fd.append("profile", file); }
    axios.put(`${baseApiURL()}/admin/details/updateDetails/${id}`, fd,
      { headers: { "Content-Type": "multipart/form-data" } })
      .then(r => {
        toast.dismiss();
        if (r.data.success) { toast.success("Updated!"); clear(); }
        else toast.error(r.data.message);
      })
      .catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
  };

  return (
    <>
      <form className="search-bar" onSubmit={doSearch} style={{ marginBottom: 18 }}>
        <input className="search-inp" placeholder="Search by Employee ID…"
          value={search} onChange={e => setSearch(e.target.value)} />
        {found
          ? <button type="button" className="search-btn" onClick={clear}>✕</button>
          : <button type="submit" className="search-btn">⌕</button>
        }
      </form>

      {found && (
        <div className="found-banner">
          ✓ Editing Admin: <strong>{d.firstName} {d.lastName}</strong> — ID: {d.employeeId}
        </div>
      )}

      {found && (
        <form onSubmit={submit}>
          <div className="form-grid">
            <div className="section-rule">Personal Information</div>

            <div className="field">
              <div className="field-lbl">First Name *</div>
              <input className="field-inp" value={d.firstName}
                onChange={e => setD(p => ({ ...p, firstName: e.target.value }))} required />
            </div>
            <div className="field">
              <div className="field-lbl">Middle Name</div>
              <input className="field-inp" value={d.middleName}
                onChange={e => setD(p => ({ ...p, middleName: e.target.value }))} />
            </div>
            <div className="field">
              <div className="field-lbl">Last Name *</div>
              <input className="field-inp" value={d.lastName}
                onChange={e => setD(p => ({ ...p, lastName: e.target.value }))} required />
            </div>

            {/* Gender values capitalized to match Mongoose enum: "Male" / "Female" */}
            <div className="field">
              <div className="field-lbl">Gender</div>
              <select className="field-sel" value={d.gender}
                onChange={e => setD(p => ({ ...p, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="section-rule">Account</div>

            <div className="field">
              <div className="field-lbl">Employee ID</div>
              <input className="field-inp" value={d.employeeId} disabled />
            </div>
            <div className="field">
              <div className="field-lbl">Email</div>
              <input className="field-inp" type="email" value={d.email}
                onChange={e => setD(p => ({ ...p, email: e.target.value }))} />
            </div>
            <div className="field">
              <div className="field-lbl">Phone</div>
              <input className="field-inp" type="number" value={d.phoneNumber}
                onChange={e => setD(p => ({ ...p, phoneNumber: e.target.value }))} />
            </div>

            <div className="section-rule">Profile Photo</div>

            <div className="field span2">
              <label className="upload-zone" htmlFor="edit-admin-photo">
                <div style={{ fontSize: 26 }}>📷</div>
                <p>{file ? file.name : "Click to change photo"}</p>
              </label>
              <input type="file" id="edit-admin-photo" accept="image/*"
                style={{ display: "none" }} onChange={handleFile} />
              {(preview || d.profile) && (
                <div className="preview-strip">
                  <img src={preview || process.env.REACT_APP_MEDIA_LINK + "/" + d.profile} alt="Preview" />
                  <p>{preview ? "New photo" : "Current photo"}</p>
                </div>
              )}
            </div>

            <div className="field span2">
              <button type="submit" className="btn btn-primary btn-full">✓ Update Admin</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditAdmin;