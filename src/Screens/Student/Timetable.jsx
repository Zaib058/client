import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { baseApiURL } from "../../baseUrl";

const Timetable = () => {
  const [timetable, setTimetable] = useState("");
  const userData = useSelector(s => s.userData);

  useEffect(() => {
    if (!userData) return;
    axios.get(`${baseApiURL()}/timetable/getTimetable`,
      { semester: userData.semester, branch: userData.branch },
      { headers: { "Content-Type": "application/json" } })
      .then(r => { if (r.data.length > 0) setTimetable(r.data[0].link); })
      .catch(err => { toast.dismiss(); console.log(err); });
  }, [userData]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontFamily: "var(--font-head)", fontStyle: "italic", fontSize: 22, color: "var(--text)" }}>
          Timetable — Year {userData?.semester}
        </div>
        {timetable && (
          <button className="btn btn-ghost"
            onClick={() => window.open(process.env.REACT_APP_MEDIA_LINK + "/" + timetable)}>
            ↓ Download
          </button>
        )}
      </div>

      {timetable ? (
        <img
          className="tt-image fade-up"
          src={process.env.REACT_APP_MEDIA_LINK + "/" + timetable}
          alt="Timetable"
        />
      ) : (
        <div className="empty card">
          <div className="empty-icon">◫</div>
          <p>No timetable available yet.</p>
          <small>Your admin hasn't uploaded one for your class.</small>
        </div>
      )}
    </>
  );
};
export default Timetable;
