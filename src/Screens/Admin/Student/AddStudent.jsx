import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../../baseUrl";

const AddStudent = () => {
  const [file, setFile]         = useState(null);
  const [branches, setBranches] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [data, setData] = useState({
    enrollmentNo: "", firstName: "",  middleName: "",
    lastName: "",    email: "",       phoneNumber: "",
    semester: "",    branch: "",      gender: "",
  });

  useEffect(() => {
    axios
      .get(`${baseApiURL()}/branch/getBranch`, { headers: { "Content-Type": "application/json" } })
      .then(r => { if (r.data.success) setBranches(r.data.branches); })
      .catch(console.error);
  }, []);

  const handleFileChange = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreviewImage(URL.createObjectURL(f));
  };

  const addStudentProfile = e => {
    e.preventDefault();
    toast.loading("Adding Student…");
    const formData = new FormData();
    formData.append("enrollmentNo", data.enrollmentNo);
    formData.append("firstName",    data.firstName);
    if (data.middleName) formData.append("middleName", data.middleName);
    formData.append("lastName",    data.lastName);
    formData.append("email",       data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("semester",    data.semester);
    formData.append("branch",      data.branch);
    formData.append("gender",      data.gender);
    formData.append("type",        "profile");
    if (file) formData.append("profile", file);

    axios
      .post(`${baseApiURL()}/student/details/addDetails`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(r => {
        toast.dismiss();
        if (r.data.success) {
          toast.success(r.data.message);
          return axios.post(`${baseApiURL()}/student/auth/register`, {
            loginid: data.enrollmentNo, password: data.enrollmentNo,
          });
        } else { toast.error(r.data.message); return Promise.reject(); }
      })
      .then(r => {
        toast.dismiss();
        if (r?.data?.success) {
          toast.success("Student login created!");
          setFile(null); setPreviewImage("");
          setData({ enrollmentNo: "", firstName: "", middleName: "", lastName: "", email: "", phoneNumber: "", semester: "", branch: "", gender: "" });
        } else if (r) { toast.error(r.data.message); }
      })
      .catch(err => { toast.dismiss(); if (err) toast.error(err.response?.data?.message || "Error"); });
  };

  // Explicit inline styles guarantee dark text on light bg — prevents dark global CSS bleed
  const inputStyle = { color: "#111827", backgroundColor: "#eff6ff" };
  const selectStyle = { color: "#111827", backgroundColor: "#eff6ff" };
  const inputCls = "w-full rounded border border-gray-300 focus:border-blue-500 outline-none py-2 px-3 text-base leading-8 transition-colors";
  const selectCls = "px-2 py-3 rounded-sm text-base w-full mt-1 border border-gray-300 focus:border-blue-500 outline-none";

  return (
    <form
      onSubmit={addStudentProfile}
      className="w-[70%] flex justify-center items-center flex-wrap gap-6 mx-auto mt-10"
    >
      {/* First Name */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">First Name *</label>
        <input type="text" required style={inputStyle} className={inputCls}
          value={data.firstName} onChange={e => setData({ ...data, firstName: e.target.value })} />
      </div>

      {/* Middle Name */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Middle Name (Optional)</label>
        <input type="text" style={inputStyle} className={inputCls}
          value={data.middleName} onChange={e => setData({ ...data, middleName: e.target.value })} />
      </div>

      {/* Last Name */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Last Name *</label>
        <input type="text" required style={inputStyle} className={inputCls}
          value={data.lastName} onChange={e => setData({ ...data, lastName: e.target.value })} />
      </div>

      {/* Enrollment No */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Enrollment No *</label>
        <input type="number" required style={inputStyle} className={inputCls}
          value={data.enrollmentNo} onChange={e => setData({ ...data, enrollmentNo: e.target.value })} />
      </div>

      {/* Email */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Email Address *</label>
        <input type="email" required style={inputStyle} className={inputCls}
          value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
      </div>

      {/* Phone */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Phone Number *</label>
        <input type="number" required style={inputStyle} className={inputCls}
          value={data.phoneNumber} onChange={e => setData({ ...data, phoneNumber: e.target.value })} />
      </div>

      {/* Year */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Select Year *</label>
        <select required style={selectStyle} className={selectCls}
          value={data.semester} onChange={e => setData({ ...data, semester: e.target.value })}>
          <option value="">-- Select --</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
        </select>
      </div>

      {/* Department */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Select Department *</label>
        <select required style={selectStyle} className={selectCls}
          value={data.branch} onChange={e => setData({ ...data, branch: e.target.value })}>
          <option value="">-- Select --</option>
          {branches.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
        </select>
      </div>

      {/* Gender — "Male"/"Female" to match Mongoose enum */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Select Gender *</label>
        <select required style={selectStyle} className={selectCls}
          value={data.gender} onChange={e => setData({ ...data, gender: e.target.value })}>
          <option value="">-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Profile Photo */}
      <div className="w-[40%]">
        <label className="leading-7 text-sm text-gray-700">Profile Photo</label>
        <input type="file" accept="image/*" onChange={handleFileChange}
          style={{ color: "#111827" }}
          className="w-full bg-blue-50 rounded border border-gray-300 outline-none py-1 px-3 text-base leading-8" />
        {previewImage && (
          <div className="flex justify-center items-center mt-3">
            <img src={previewImage} alt="Preview" className="w-28 h-28 object-cover rounded-full shadow-lg" />
          </div>
        )}
      </div>

      <button type="submit"
        className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;