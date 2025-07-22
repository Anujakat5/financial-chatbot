import React from "react";

const SectionCard = ({ label, onClick }) => (
  <div
    className="p-3 border rounded shadow-sm bg-white"
    style={{ width: "180px", cursor: "pointer" }}
    onClick={onClick}
  >
    {label}
  </div>
);

export default SectionCard;
