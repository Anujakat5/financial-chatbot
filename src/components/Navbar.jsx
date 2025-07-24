import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const tabs = ["Home", "Transaction", "Investment", "Credit Score", "Manage Account", "Contact Us", "Logout"];

const Navbar = ({ onTabClick, activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    onTabClick(tab);
    setIsMenuOpen(false); 
  };

  return (
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
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`navbar-tab-btn${activeTab === tab ? " active" : ""}`}
            onClick={() => onTabClick(tab)}
            type="button"
            title={tab === "Logout" ? "Logout" : ""}
          >
            {tab === "Logout" ? (
              <span className="d-flex align-items-center gap-1">
                <LogOut size={28} />
              </span>
            ) : (
              tab
            )}
          </button>
        ))}
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