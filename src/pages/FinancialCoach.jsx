import React from "react";
import "./MyInterests.css";

const FinancialGoalsPage = () => {
  const cards = [
    {
      title: "Suggestion for interest",
      info: `• Top seasonal items for improved sale\n
• Best selling product list\n
• Training for how small rewards or gifts help attract sale`,
    },
    {
      title: "Suggestions for recent activities",
      info: `• Focus more on best selling products\n
• Move balance from saving account to linked deposit account`,
    },
    {
      title: "Subscription / surveys",
      info: `• Ask for surveys to improve community support\n
• Community alert for monthly membership fee due soon
`,
    },
    {
      title: "General financial suggestions",
      info: `• Links for latest government rule for tax\n
• create a budget limit and tags to track
`,
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

export default FinancialGoalsPage;
