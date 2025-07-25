import React from "react";
import "./MyInterests.css";

const FinancialGoalsPage = () => {

  const cards = [
  {
    title: "Interest Picks",
    info: `• Highlight seasonal products to boost sales\n
• Showcase top-selling items\n
• Use small gifts or rewards to attract more buyers`,
  },
  {
    title: "Activity Suggestions",
    info: `• Prioritize promotion of high-demand products\n
• Transfer surplus funds from savings to linked deposit accounts for better returns`,
  },
  {
    title: "Surveys",
    info: `• Encourage users to take quick surveys to improve services\n
• Gather community feedback to shape future offerings\n
• Promote engagement through regular survey participation`
  },
  {
    title: "Financial Suggestions",
    info: `• Share updates on the latest government tax regulations\n
• Set budget limits and tag expenses for better tracking`,
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
