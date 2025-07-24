import React from "react";
import "./MyInterests.css";

const MyInterests = () => {
  const cards = [
    {
      title: "Goals",
      info: `I am a shopkeeper, I want to plan a future goal to reach my sale to 2000 Indian rupees a day.
Currently it is near 100 rupees a day. I also want to keep daily track of status to check real-time insight.
Show me alerts and growth opportunities to meet the goal. Also suggest any additional recommendation to speed up the daily sale.
Start date: 23 July 2025, End date: 31 Aug 2025.`,
    },
    {
      title: "Current status",
      info: `Sale of 200 rupees daily.`,
    },
    {
      title: "Alerts/Improvements",
      info: `- Add tags for improving nearby suggestions`,
    },
    {
      title: "Suggestions",
      info: `- Offer rewards for big purchases
- Focus more on best selling products
- Start happy hour discount for off-sale period
- New demand items`,
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="interests-table">
        {/* Row 1 - Titles */}
        {cards.map((card, index) => (
          <div className="cell-title" key={`title-${index}`}>
            {card.title}
          </div>
        ))}
        {/* Row 2 - Info */}
        {cards.map((card, index) => (
          <div className="cell-info" key={`info-${index}`}>
            {card.info}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInterests;
