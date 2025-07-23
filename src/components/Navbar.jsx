import { LogOut } from 'lucide-react';

const tabs = ["Home", "Transaction", "Investment", "Credit Score", "Manage Account", "Contact Us", "Logout"];

const Navbar = ({ onTabClick, activeTab }) => {
  return (
    <nav className="navbar-custom d-flex align-items-center" style={{ width: "100%" }}>
      <div className="navbar-tabs ms-auto d-flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`navbar-tab-btn${activeTab === tab ? " active" : ""}`}
            onClick={() => onTabClick(tab)}
            type="button"
            title={tab === "Logout" ? "Logout" : ""} // Tooltip on hover
          >
            {tab === "Logout" ? (
              <span className="d-flex align-items-center gap-1">
                <LogOut size={28} /> {/* Icon */}
              </span>
            ) : (
              tab
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
