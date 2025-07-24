import React, { useState } from "react";
import Card from "../components/Card";
import PopupModal from "../components/PopupModal";

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

  // Flatten all items into a single array for the grid
  const allItems = Object.entries(sectionData).flatMap(([sectionTitle, items]) =>
    items.map((item) => ({ sectionTitle, item }))
  );

  return (
    <>
      <div className="card-grid">
        {allItems.map(({ item }, idx) => {
          return (
            <div
              className="card-grid-item"
              key={item + idx}
            >
              <Card
                image={cardImages[idx]}
                title={item}
                onClick={() => setActivePopup(item)}
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
