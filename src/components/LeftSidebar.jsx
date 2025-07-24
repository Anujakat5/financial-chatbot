import React from "react";
import logo from "../assets/logo.png";

const sidebarItems = [
  "Account Summary",
  "My Interests",
  "Nearby Support",
  "Financial Coach",
  // "Suggestions",
  // "Personal details",
  // "Account details",
  // "Planned Goal",
  "Card request",
  // "Transaction Limit",
  // "KYC"
];

const LeftSidebar = ({ onSidebarClick, activeSidebar, isOpen }) => {
  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="left-sidebar-inner bg-light p-3 shadow">
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
    </div>
  );
};

export default LeftSidebar;
