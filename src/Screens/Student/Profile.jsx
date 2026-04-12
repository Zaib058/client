import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setUserData } from "../../redux/actions";
import { baseApiURL } from "../../baseUrl";
import toast from "react-hot-toast";

const Profile = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useLocation();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const [pw, setPw] = useState({ current: "", new: "" });

  useEffect(() => {
    axios.post(`${baseApiURL()}/${router.state.type}/details/getDetails`,
      { enrollmentNo: router.state.loginid }, { headers: { "Content-Type": "application/json" } })
      .then(r => {
        if (r.data.success && r.data.user?.length > 0) {
          const u = r.data.user[0];
          setData(u);
          dispatch(setUserData({
            fullname: `${u.firstName} ${u.middleName || ""} ${u.lastName}`.trim(),
            semester: u.semester, enrollmentNo: u.enrollmentNo, branch: u.branch,
          }));
        } else toast.error(r.data.message);
      }).catch(console.error);
  }, [dispatch, router.state.loginid, router.state.type]);

  const changePassword = e => {
    e.preventDefault();
    axios.post(`${baseApiURL()}/student/auth/login`,
      { loginid: router.state.loginid, password: pw.current }, { headers: { "Content-Type": "application/json" } })
      .then(r => { if (r.data.success) updatePassword(r.data.id); else toast.error(r.data.message); })
      .catch(err => toast.error(err.response?.data?.message || "Error"));
  };

  const updatePassword = id => {
    axios.put(`${baseApiURL()}/student/auth/update/${id}`,
      { loginid: router.state.loginid, password: pw.new }, { headers: { "Content-Type": "application/json" } })
      .then(r => { if (r.data.success) { toast.success("Password updated!"); setPw({ current: "", new: "" }); setShowPass(false); } else toast.error(r.data.message); })
      .catch(err => toast.error(err.response?.data?.message || "Error"));
  };

  if (!data) return <div className="empty"><div className="empty-icon">◉</div><p>Loading profile…</p></div>;

  return (
    <div className="profile-wrap">
      <div className="profile-info">
        <div className="profile-name">Hello, {data.firstName} <span>👋</span></div>
        <div className="info-grid">
          <div className="info-cell"><div className="info-key">Enrollment No</div><div className="info-val">{data.enrollmentNo}</div></div>
          <div className="info-cell"><div className="info-key">Department</div><div className="info-val">{data.branch}</div></div>
          <div className="info-cell"><div className="info-key">Year</div><div className="info-val">Year {data.semester}</div></div>
          <div className="info-cell"><div className="info-key">Gender</div><div className="info-val" style={{ textTransform: "capitalize" }}>{data.gender || "—"}</div></div>
          <div className="info-cell"><div className="info-key">Phone</div><div className="info-val">+91 {data.phoneNumber}</div></div>
          <div className="info-cell"><div className="info-key">Email</div><div className="info-val" style={{ fontSize: 12, wordBreak: "break-all" }}>{data.email}</div></div>
        </div>
        <div style={{ marginTop: 18 }}>
          <button className={`btn ${showPass ? "btn-danger" : "btn-ghost"}`} onClick={() => setShowPass(o => !o)}>
            {showPass ? "✕ Cancel" : "⚿ Change Password"}
          </button>
        </div>
        {showPass && (
          <form className="pass-form" onSubmit={changePassword}>
            <h4>Update Password</h4>
            <div className="field" style={{ marginBottom: 12 }}>
              <div className="field-lbl">Current Password</div>
              <input type="password" className="field-inp" placeholder="Current password" value={pw.current} onChange={e => setPw(p => ({ ...p, current: e.target.value }))} required />
            </div>
            <div className="field" style={{ marginBottom: 16 }}>
              <div className="field-lbl">New Password</div>
              <input type="password" className="field-inp" placeholder="Min. 6 characters" value={pw.new} onChange={e => setPw(p => ({ ...p, new: e.target.value }))} required />
            </div>
            <button type="submit" className="btn btn-primary">Update Password</button>
          </form>
        )}
      </div>
      <div className="profile-avatar">
        {data.profile ? <img src={process.env.REACT_APP_MEDIA_LINK + "/" + data.profile} alt="Profile" /> : "🎓"}
      </div>
    </div>
  );
};
export default Profile;
