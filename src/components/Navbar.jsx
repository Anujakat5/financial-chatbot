import React, { useState } from "react";
import { LogOut, Menu, X, ChevronDown } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    onTabClick(tab);
    setIsMenuOpen(false); 
  };

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
    // <nav className="navbar-custom d-flex align-items-center" style={{ width: "100%" }}>
    //   <div className="navbar-tabs ms-auto d-flex">
    <nav className="navbar-custom d-flex align-items-center">
      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle d-md-none ms-auto"
        onClick={toggleMenu}
        type="button"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="navbar-tabs ms-auto d-none d-md-flex">
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
      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu d-md-none ${isMenuOpen ? 'show' : ''}`}>
        <div className="d-flex flex-column">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mobile-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
              type="button"
            >
              {tab === "Logout" ? (
                <span className="d-flex align-items-center gap-2">
                  <LogOut size={20} />
                  Logout
                </span>
              ) : (
                tab
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;