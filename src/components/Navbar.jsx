const tabs = ["Home", "Transaction", "Investment", "Credit Score", "Manage Account", "Contact Us", "Logout"];

// const Navbar = ({ onTabClick }) => {
//   return (
//     <nav className="navbar bg-light shadow-sm px-4 py-4 d-flex justify-content-between align-items-center">
//       {/* <button className="btn btn-outline-primary" onClick={() => onTabClick("Home")}>
//         Dashboard
//       </button> */}
//       <div className="ms-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className="btn btn-link mx-2"
//             onClick={() => onTabClick(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };
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
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
