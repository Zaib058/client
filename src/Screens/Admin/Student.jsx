import React, { useState } from "react";
import AddStudent from "./Student/AddStudent";
import EditStudent from "./Student/EditStudent";

const Student = () => {
  const [tab, setTab] = useState("add");
  return (
    <>
      <div className="tab-row">
        <button className={`tab ${tab === "add" ? "active" : ""}`} onClick={() => setTab("add")}>+ Add Student</button>
        <button className={`tab ${tab === "edit" ? "active" : ""}`} onClick={() => setTab("edit")}>Edit Student</button>
      </div>
      {tab === "add" ? <AddStudent /> : <EditStudent />}
    </>
  );
};
export default Student;
