import React from "react";
import logo from "../assets/logo.png";

const sidebarItems = [
  "Personal details",
  "Account details",
  "Planned Goal",
  "Card request",
  "Transaction Limit",
  "KYC"
];

const LeftSidebar = ({ onSidebarClick, activeSidebar }) => {
  return (
    <div className="left-sidebar bg-light p-3 shadow" style={{ minHeight: "100vh" }}>
      <div className="sidebar-logo-container mb-4" style={{ textAlign: "center" }}>
        <img src={logo} alt="Logo" style={{ height: "90px", width: "auto" }} />
      </div>
      <h6>Welcome {"<username>"} !</h6>
      <ul className="list-unstyled mt-3">
        {sidebarItems.map((item) => (
          <li key={item} className="mb-2">
            <button
              className={`sidebar-btn${activeSidebar === item ? " active" : ""}`}
              style={{ textAlign: "left" }}
              onClick={() => onSidebarClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
