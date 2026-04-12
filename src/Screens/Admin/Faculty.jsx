import React, { useState } from "react";
import AddFaculty from "./Faculty/AddFaculty";
import EditFaculty from "./Faculty/EditFaculty";

const Faculty = () => {
  const [tab, setTab] = useState("add");
  return (
    <>
      <div className="tab-row">
        <button className={`tab ${tab === "add" ? "active" : ""}`} onClick={() => setTab("add")}>+ Add Faculty</button>
        <button className={`tab ${tab === "edit" ? "active" : ""}`} onClick={() => setTab("edit")}>Edit Faculty</button>
      </div>
      {tab === "add" ? <AddFaculty /> : <EditFaculty />}
    </>
  );
};
export default Faculty;
