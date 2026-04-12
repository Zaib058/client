import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../../baseUrl";

const AddFaculty = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [branches, setBranches] = useState([]);
  const [d, setD] = useState({
    employeeId: "", firstName: "", middleName: "", lastName: "",
    email: "", phoneNumber: "", department: "", gender: "",
    experience: "", post: "",
  });

  useEffect(() => {
    axios.get(`${baseApiURL()}/branch/getBranch`)
      .then(r => r.data.success && setBranches(r.data.branches))
      .catch(() => {});
  }, []);

  const handleFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const submit = e => {
    e.preventDefault();
    toast.loading("Adding faculty…");
    const fd = new FormData();
    Object.entries(d).forEach(([k, v]) => { if (v) fd.append(k, v); });
    fd.append("type", "profile");
    if (file) fd.append("profile", file);

    axios.post(`${baseApiURL()}/faculty/details/addDetails`, fd, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(r => {
        toast.dismiss();
        if (r.data.success) {
          toast.success(r.data.message);
          return axios.post(`${baseApiURL()}/faculty/auth/register`, {
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
          toast.success("Faculty login created!");
          setD({ employeeId: "", firstName: "", middleName: "", lastName: "", email: "", phoneNumber: "", department: "", gender: "", experience: "", post: "" });
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
          <input className="field-inp" placeholder="e.g. Sara"
            value={d.firstName} onChange={e => setD(p => ({ ...p, firstName: e.target.value }))} required />
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

        <div className="section-rule">Professional Details</div>

        <div className="field">
          <div className="field-lbl">Employee ID *</div>
          <input className="field-inp" type="number" placeholder="e.g. 1001"
            value={d.employeeId} onChange={e => setD(p => ({ ...p, employeeId: e.target.value }))} required />
        </div>
        <div className="field">
          <div className="field-lbl">Department *</div>
          <select className="field-sel" value={d.department}
            onChange={e => setD(p => ({ ...p, department: e.target.value }))} required>
            <option value="">Select…</option>
            {branches.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
          </select>
        </div>
        <div className="field">
          <div className="field-lbl">Post / Designation *</div>
          <input className="field-inp" placeholder="e.g. Lecturer"
            value={d.post} onChange={e => setD(p => ({ ...p, post: e.target.value }))} required />
        </div>
        <div className="field">
          <div className="field-lbl">Experience (years)</div>
          <input className="field-inp" type="number" min="0" placeholder="e.g. 5"
            value={d.experience} onChange={e => setD(p => ({ ...p, experience: e.target.value }))} />
        </div>

        <div className="section-rule">Contact</div>

        <div className="field">
          <div className="field-lbl">Email *</div>
          <input className="field-inp" type="email" placeholder="faculty@college.edu"
            value={d.email} onChange={e => setD(p => ({ ...p, email: e.target.value }))} required />
        </div>
        <div className="field">
          <div className="field-lbl">Phone *</div>
          <input className="field-inp" type="number"
            value={d.phoneNumber} onChange={e => setD(p => ({ ...p, phoneNumber: e.target.value }))} required />
        </div>

        <div className="section-rule">Profile Photo</div>

        <div className="field span2">
          <label className="upload-zone" htmlFor="add-fac-photo">
            <div style={{ fontSize: 26 }}>📷</div>
            <p>{file ? file.name : "Click to upload photo"}</p>
          </label>
          <input type="file" id="add-fac-photo" accept="image/*"
            style={{ display: "none" }} onChange={handleFile} />
          {preview && (
            <div className="preview-strip">
              <img src={preview} alt="Preview" />
              <p>{file?.name}</p>
            </div>
          )}
        </div>

        <div className="field span2">
          <button type="submit" className="btn btn-primary btn-full">✓ Add Faculty</button>
        </div>
      </div>
    </form>
  );
};

export default AddFaculty;