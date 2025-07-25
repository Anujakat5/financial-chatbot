// import React from "react";

// const sidebarItems = [
//   "Account Summary",
//   "My Interests",
//   "Nearby Support",
//   "Financial Coach"
// ];

// const LeftSidebar = ({ onSidebarClick, activeSidebar, isOpen }) => {
//   return (
//     <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
//       <div className="left-sidebar-inner p-3 shadow">
//         <div className="sidebar-logo-container mb-4" style={{ textAlign: "center" }}>
//           <img src="/logo.png" alt="Logo" style={{ height: "90px", width: "auto" }} />
//         </div>
//         <h6>Welcome John Doe!</h6>
//         <ul className="list-unstyled mt-3">
//           {sidebarItems.map((item) => (
//             <li
//               key={item}
//               className="mb-2"
//               style={{
//                 borderBottom: "1px solid #ccc",
//                 paddingBottom: "6px",
//                 borderRadius: "4px",
//               }}
//             >
//               <button
//                 className={`sidebar-btn${activeSidebar === item ? " active" : ""}`}
//                 style={{
//                   textAlign: "left",
//                   width: "100%",
//                   backgroundColor: activeSidebar === item ? "#1B3C53" : "transparent",
//                   color: activeSidebar === item ? "#fff" : "#000",
//                   border: "none",
//                   padding: "8px 12px",
//                   borderRadius: "4px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => onSidebarClick(item)}
//               >
//                 {item}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default LeftSidebar;
import React, { useEffect, useState } from "react";
import axios from "axios"; // make sure axios is installed

const sidebarItems = [
  "Account Summary",
  "My Interests",
  "Nearby Support",
  "Financial Coach"
];

const LeftSidebar = ({ onSidebarClick, activeSidebar, isOpen, sinNumber }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(`/api/customer/name?sin=${sinNumber}`);
        setUserName(response.data.name);
      } catch (error) {
        console.error("Error fetching username:", error);
        setUserName("User"); // fallback
      }
    };

    if (sinNumber) fetchUserName();
  }, [sinNumber]);

  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="left-sidebar-inner p-3 shadow">
        <div className="sidebar-logo-container mb-4" style={{ textAlign: "center" }}>
          <img src="src/assets/logo.png" alt="Logo" style={{ height: "90px", width: "auto" }} />
        </div>
        <h6>Welcome</h6>
        <ul className="list-unstyled mt-3">
          {sidebarItems.map((item) => (
            <li
              key={item}
              className="mb-2"
              style={{
                borderBottom: "1px solid #ccc",
                paddingBottom: "6px",
                borderRadius: "4px",
              }}
            >
              <button
                className={`sidebar-btn${activeSidebar === item ? " active" : ""}`}
                style={{
                  textAlign: "left",
                  width: "100%",
                  backgroundColor: activeSidebar === item ? "#1B3C53" : "transparent",
                  color: activeSidebar === item ? "#fff" : "#000",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
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
