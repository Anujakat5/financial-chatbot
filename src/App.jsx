import { useState } from 'react';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(null);

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

  return (
    <div className="app-layout d-flex" style={{ minHeight: "100vh" }}>
      <LeftSidebar
        onSidebarClick={(item) => setActiveSidebar(item)}
        activeSidebar={activeSidebar}
      />
      <div className="main-content flex-grow-1 d-flex flex-column">
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
