import React from "react";

const PopupModal = ({ title, onClose }) => {
  return (
    <div className="modal-backdrop d-flex justify-content-center align-items-center">
      <div className="modal-content p-4 bg-white rounded shadow" style={{ minWidth: "300px" }}>
        <h5>{title}</h5>
        <p>Hello from the {title} modal!</p>
        <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
