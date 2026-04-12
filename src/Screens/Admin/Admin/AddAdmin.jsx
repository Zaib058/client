import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../../baseUrl";

const AddAdmin = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [d, setD] = useState({
    employeeId: "", firstName: "", middleName: "",
    lastName: "", email: "", phoneNumber: "", gender: "",
  });

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const submit = e => {
    e.preventDefault();
    toast.loading("Adding admin…");
    const fd = new FormData();
    Object.entries(d).forEach(([k, v]) => { if (v) fd.append(k, v); });
    fd.append("type", "profile");
    if (file) fd.append("profile", file);

    axios.post(`${baseApiURL()}/admin/details/addDetails`, fd, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(r => {
        toast.dismiss();
        if (r.data.success) {
          toast.success(r.data.message);
          // Fixed original bug: was /Admin/ (capital A)
          return axios.post(`${baseApiURL()}/admin/auth/register`, {
            loginid: d.employeeId,
            password: d.employeeId,
          });
        } else {
          toast.error(r.data.message);
          return Promise.reject();
        }
      })
      .then(r => {
        toast.dismiss();
        if (r?.data?.success) {
          toast.success("Admin login created!");
          setD({ employeeId: "", firstName: "", middleName: "", lastName: "", email: "", phoneNumber: "", gender: "" });
          setFile(null);
          setPreview("");
        } else if (r) {
          toast.error(r.data.message);
        }
      })
      .catch(err => {
        toast.dismiss();
        if (err) toast.error(err.response?.data?.message || "Error");
      });
  };

  return (
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
          <div className="field-lbl">Gender *</div>
          <select className="field-sel" value={d.gender}
            onChange={e => setD(p => ({ ...p, gender: e.target.value }))} required>
            <option value="">Select…</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="section-rule">Account Details</div>

        <div className="field">
          <div className="field-lbl">Employee ID *</div>
          <input className="field-inp" type="number" placeholder="Used as login ID"
            value={d.employeeId} onChange={e => setD(p => ({ ...p, employeeId: e.target.value }))} required />
        </div>
        <div className="field">
          <div className="field-lbl">Email *</div>
          <input className="field-inp" type="email" value={d.email}
            onChange={e => setD(p => ({ ...p, email: e.target.value }))} required />
        </div>
        <div className="field">
          <div className="field-lbl">Phone</div>
          <input className="field-inp" type="number" value={d.phoneNumber}
            onChange={e => setD(p => ({ ...p, phoneNumber: e.target.value }))} />
        </div>

        <div className="section-rule">Profile Photo</div>

        <div className="field span2">
          <label className="upload-zone" htmlFor="add-admin-photo">
            <div style={{ fontSize: 26 }}>📷</div>
            <p>{file ? file.name : "Click to upload photo"}</p>
          </label>
          <input type="file" id="add-admin-photo" accept="image/*"
            style={{ display: "none" }} onChange={handleFile} />
          {preview && (
            <div className="preview-strip">
              <img src={preview} alt="Preview" />
              <p>{file?.name}</p>
            </div>
          )}
        </div>

        <div className="field span2">
          <button type="submit" className="btn btn-primary btn-full">✓ Add Administrator</button>
        </div>
      </div>
    </form>
  );
};

export default AddAdmin;