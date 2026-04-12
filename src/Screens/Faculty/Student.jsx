// Faculty/Student.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { baseApiURL } from "../../baseUrl";

const Student = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const searchStudent = e => {
    e.preventDefault();
    if (!search.trim()) return toast.error("Enter an enrollment number");
    toast.loading("Searching…");
    axios.post(`${baseApiURL()}/student/details/getDetails`,
      { enrollmentNo: search }, { headers: { "Content-Type": "application/json" } })
      .then(r => {
        toast.dismiss();
        if (r.data.success && r.data.user.length > 0) { setData(r.data.user[0]); toast.success("Student found!"); }
        else toast.error("No student found.");
      }).catch(err => { toast.dismiss(); toast.error(err.response?.data?.message || "Error"); });
  };

  return (
    <>
      <form className="search-bar" onSubmit={searchStudent} style={{ marginBottom: 20 }}>
        <input className="search-inp" placeholder="Search by Enrollment Number…" value={search} onChange={e => setSearch(e.target.value)} />
        {data
          ? <button type="button" className="search-btn" onClick={() => { setData(null); setSearch(""); }}>✕</button>
          : <button type="submit" className="search-btn">⌕</button>}
      </form>

      {data && (
        <div className="student-viewer fade-up">
          <div>
            <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 22, color: "var(--text)", marginBottom: 16 }}>
              {data.firstName} {data.middleName || ""} {data.lastName}
            </div>
            <div className="info-grid">
              <div className="info-cell"><div className="info-key">Enrollment No</div><div className="info-val">{data.enrollmentNo}</div></div>
              <div className="info-cell"><div className="info-key">Department</div><div className="info-val">{data.branch}</div></div>
              <div className="info-cell"><div className="info-key">Year</div><div className="info-val">Year {data.semester}</div></div>
              <div className="info-cell"><div className="info-key">Gender</div><div className="info-val" style={{ textTransform: "capitalize" }}>{data.gender}</div></div>
              <div className="info-cell"><div className="info-key">Phone</div><div className="info-val">+91 {data.phoneNumber}</div></div>
              <div className="info-cell"><div className="info-key">Email</div><div className="info-val" style={{ fontSize: 12, wordBreak: "break-all" }}>{data.email}</div></div>
            </div>
          </div>
          <div className="profile-avatar" style={{ width: 130, height: 130, minWidth: 130 }}>
            {data.profile ? <img src={process.env.REACT_APP_MEDIA_LINK + "/" + data.profile} alt="Student" /> : "🎓"}
          </div>
        </div>
      )}
    </>
  );
};
export default Student;
