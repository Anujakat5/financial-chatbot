import React, { useState } from "react";
import { LogOut, ChevronDown } from "lucide-react";

const tabs = [
  "Home",
  "Transaction",
  "Investment",
  "Credit Score",
  "Manage Account",
  "Contact Us",
  "Logout"
];

const dropdownItems = {
  Transaction: ["View Transactions", "Download Statement", "Money Transfers","Bill Payments", "Standing Instructions"],
  Investment: ["Portfolio", "Open FD", "Open RD", "Account Status","Close Account", "Investment Calculator"],
  "Credit Score": ["View Credit Score", "Improve Score", "Credit History","Score History", "Check loan eligibility"],
  "Manage Account": ["Deposit Accounts", "Operative Accounts", "PPF Accounts", "View SCSS Account", "Link Accounts"],
};

const Navbar = ({ onTabClick, activeTab }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (tab) => {
    setOpenDropdown(openDropdown === tab ? null : tab);
  };

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar-dropdown") && !e.target.closest(".navbar-tab-btn.has-dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="navbar-custom d-flex align-items-center" style={{ width: "100%" }}>
      <div className="navbar-tabs ms-auto d-flex">
        {tabs.map((tab) => {
          const hasDropdown = !!dropdownItems[tab];
          return (
            <div key={tab} className="position-relative" style={{ display: "flex", alignItems: "center" }}>
              <button
                className={`navbar-tab-btn${activeTab === tab ? " active" : ""}${hasDropdown ? " has-dropdown" : ""}`}
                onClick={() => {
                  if (hasDropdown) {
                    handleDropdown(tab);
                  } else {
                    setOpenDropdown(null);
                    onTabClick(tab);
                  }
                }}
                type="button"
                title={tab === "Logout" ? "Logout" : ""}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                {tab === "Logout" ? (
                  <span className="d-flex align-items-center gap-1">
                    <LogOut size={28} />
                  </span>
                ) : (
                  <>
                    {tab}
                    {hasDropdown && (
                      <ChevronDown
                        size={18}
                        style={{
                          transition: "transform 0.2s",
                          transform: openDropdown === tab ? "rotate(180deg)" : "none"
                        }}
                      />
                    )}
                  </>
                )}
              </button>
              {hasDropdown && openDropdown === tab && (
                <div className="navbar-dropdown">
                  {dropdownItems[tab].map((item) => (
                    <button
                      key={item}
                      className="navbar-dropdown-btn"
                      type="button"
                      onClick={() => {
                        setOpenDropdown(null);
                        // Optionally handle dropdown item click here
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;