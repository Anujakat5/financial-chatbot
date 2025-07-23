import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderSidebarContent = () => {
    if (!activeSidebar) return null;
    return (
      <div style={{ padding: '2rem' }}>
        {activeSidebar} Coming Soon...
      </div>
    );
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
        return <div style={{ padding: '2rem' }}>Contact Us Coming Soon...</div>;
      case 'Logout':
        return <div style={{ padding: '2rem' }}>Logout Coming Soon...</div>;
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
        <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: "700", color: "#1B3C53"}}>
          Financial Chatbot App
        </h1>
      </div>
        <Navbar
          onTabClick={(tab) => { setActiveTab(tab); setActiveSidebar(null); }}
          activeTab={activeTab}
        />
        <main className="flex-grow-1 p-4">
          {renderContent()}
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
