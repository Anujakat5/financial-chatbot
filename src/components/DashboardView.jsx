import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import AccountSummary from '../pages/DepositCardGrid';
import FinancialCoach from '../pages/FinancialCoach';
import Home from '../pages/Home';
import MyInterests from '../pages/MyInterests';
import NearbySupport from '../pages/NearbySupport';
import AlertBar from './AlertBar';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import Navbar from './Navbar';

function DashboardView() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();


  const sidebarComponentMap = {
    "Account Summary" : <AccountSummary/>,
    "My Interests" : <MyInterests/>,
    "Nearby Support": <NearbySupport/>,
    "Financial Coach": <FinancialCoach/>
    // Add new ones here as you create them:
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
        navigate('/');
        return null;
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

  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('loginTimestamp');
    if (stored) {
      setTimestamp(stored);
    }
  }, []);

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
        {/* <div className="website-title p-3 ps-4">
          <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: "700", color: "#1B3C53" }}>
            SAARTHI
          </h1>
        </div> */}
        <div className="website-header d-flex justify-content-between align-items-center px-4 py-3">
          <div className="user-info-block">
            <div className="info-row-name">
              <span className="label">Customer Name:</span>
              <span className="value black">John Doe</span>
            </div>
            <div className="info-row-id">
              <span className="label">Customer ID:</span>
              <span className="value black">123456</span>
            </div>
            <div className="info-row-login-info">
              <span className="label red">Last Login Date & Time:</span>
              <span className="value grey">{timestamp}</span>
            </div>
          </div>

          <h1 className="website-title-text">SAARTHI</h1>
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
        <main className="main-area-bg flex-grow-1 p-4">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default DashboardView;
