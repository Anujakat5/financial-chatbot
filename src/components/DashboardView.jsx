import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import Navbar from './Navbar';
import AlertBar from './AlertBar'; 
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
// import PersonalDetails from '../pages/PersonalDetails';
// import AccountDetails from '../pages/AccountDetails';
import Logout from '../pages/Logout';
import AccountSummary from '../pages/DepositCardGrid'
import MyInterests from '../pages/MyInterests'
import NearbySupport from '../pages/NearbySupport'
import FinancialCoach from '../pages/FinancialCoach'

function DashboardView() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarComponentMap = {
    // "Personal details": <PersonalDetails />,
    // "Account details" : <AccountDetails />,
    "Account Summary" : <AccountSummary/>,
    "My Interests" : <MyInterests/>,
    "Nearby Support": <NearbySupport/>,
    "Financial Coach": <FinancialCoach/>
    // Add new ones here as you create them:
    // "Account details": <AccountDetails />,
    // Add more side items here as needed
  };

  const renderSidebarContent = () => {
    if (!activeSidebar) return null;
    const component = sidebarComponentMap[activeSidebar];
    return component || <div style={{ padding: '2rem' }}>{activeSidebar} Coming Soon...</div>;
  };

  const renderContent = () => {
    if (activeSidebar) return renderSidebarContent();

    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'Transaction':
        return <div style={{ padding: '2rem' }}>Transaction Coming Soon...</div>;
      case 'Investment':
        return <div style={{ padding: '2rem' }}>Investment Coming Soon...</div>;
      case 'Credit Score':
        return <div style={{ padding: '2rem' }}>Credit Score Coming Soon...</div>;
      case 'Manage Account':
        return <div style={{ padding: '2rem' }}>Manage Account Coming Soon...</div>;
      case 'Contact Us':
        return <ContactUs />;
      case 'Logout':
        return <Logout />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  return (
    <div className="app-layout d-flex">
      <>
        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        <LeftSidebar
          onSidebarClick={(item) => {
            setActiveSidebar(item);
            setSidebarOpen(false); // auto-close sidebar after click
          }}
          activeSidebar={activeSidebar}
          isOpen={isSidebarOpen}
        />
      </>

      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)} // click outside to close
        />
      )}

      <div className="main-content flex-grow-1 d-flex flex-column">
        {/* Website Title */}
        <div className="website-title p-3 ps-4">
          <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: "700", color: "#1B3C53" }}>
            SAARTHI
          </h1>
        </div>

        {/* ✅ Alert Bar */}
        <AlertBar />

        {/* ✅ Navbar */}
        <Navbar
          onTabClick={(tab) => {
            setActiveTab(tab);
            setActiveSidebar(null);
          }}
          activeTab={activeTab}
        />

        {/* Main Content Area */}
        <main className="flex-grow-1 p-4">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default DashboardView;
