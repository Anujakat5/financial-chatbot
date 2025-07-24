import React, { useState } from "react";
import Card from "../components/Card";
import PopupModal from "../components/PopupModal";
import BalanceEnquiry from "./BalanceEnquiry"; // Import the balance enquiry component

import img1 from "../assets/Credit_Debit.svg";
import img2 from "../assets/FD_RD.svg";
import img9 from "../assets/Rewards.svg";
import img4 from "../assets/Goal_planning.svg";
import img5 from "../assets/Govt_schemes.svg";
import img6 from "../assets/Settings.svg";
import img7 from "../assets/Recommendations.svg";
import img8 from "../assets/Location.svg";
import img3 from "../assets/Placeholder_2.svg";

const sectionData = {
  "Section 1": ["Account Statement", "FD/RD", "Balance Enquiry"],
  "Section 2": ["Goal Planning", "Government schemes", "Update Details"],
  "Section 3": ["Recommendations", "Branches Near You", "Rewards"],
};

const cardImages = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9
];

const Home = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [activePage, setActivePage] = useState("home"); // 👈 Track which view to render

  // Flatten all items for rendering
  const allItems = Object.entries(sectionData).flatMap(([sectionTitle, items]) =>
    items.map((item) => ({ sectionTitle, item }))
  );

  if (activePage === "balance-enquiry") {
    return <BalanceEnquiry goBack={() => setActivePage("home")} />; // 👈 Show BalanceEnquiry component
  }

  return (
    <>
      <div className="card-grid">
        {allItems.map(({ item }, idx) => {
          // const col = 2 + (idx % 3) * 2;
          // const row = 1 + Math.floor(idx / 3);
          return (
            <div
              className="card-grid-item"
              key={item + idx}
              // style={{ gridColumn: col, gridRow: row }}
            >
              <Card
                image={cardImages[idx]}
                title={item}
                onClick={() =>
                  item === "Balance Enquiry"
                    ? setActivePage("balance-enquiry") // 👈 Switch view instead of navigating
                    : setActivePopup(item)
                }
              />
            </div>
          );
        })}
      </div>

      {activePopup && (
        <PopupModal
          title={activePopup}
          onClose={() => setActivePopup(null)}
        />
      )}
    </>
  );
};

export default Home;
