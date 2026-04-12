import React, { useState } from "react";
import AddAdmin from "./Admin/AddAdmin";
import EditAdmin from "./Admin/EditAdmin";

const Admin = () => {
  const [tab, setTab] = useState("add");
  return (
    <>
      <div className="tab-row">
        <button className={`tab ${tab === "add" ? "active" : ""}`} onClick={() => setTab("add")}>+ Add Admin</button>
        <button className={`tab ${tab === "edit" ? "active" : ""}`} onClick={() => setTab("edit")}>Edit Admin</button>
      </div>
      {tab === "add" ? <AddAdmin /> : <EditAdmin />}
    </>
  );
};
export default Admin;
