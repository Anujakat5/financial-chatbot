import React from "react";
import "./NearbySupport.css";

const NearbySupportPage = () => {
  const cards = [
    {
      title: "Financial suggestions",
      info: `• Fixed deposit interest rate increased to 7% for a 2 years period.\n
• Switch to a linked sweep account to increase interest.`,
    },
    {
      title: "Nearby suggestions",
      info: `• Nearby Funding opportunities\n
• Upgrade your account as an agent to get rewards on each transaction. This will also increase customer reach.`,
    },
    {
      title: "Regional schemes",
      info: `• Government schemes for small business\n
• Regional business meeting scheduled on 20 Aug 2025.`,
    },
    {
      title: "Community support",
      info: `• Focus on word of mouth marketing\n
• Join hands with school or temple for festive stalls\n
• Create whatsapp or facebook group for daily deals`,
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="interests-table">
        {cards.map((card, index) => (
          <div className="cell" key={index}>
            <div className="cell-title">{card.title}</div>
            <div className="cell-info">{card.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbySupportPage;
