// import React from "react";

// const Card = ({ image, title, onClick }) => (
//   <div
//     className="custom-card shadow-sm p-3 bg-white rounded"
//     style={{ cursor: "pointer" }}
//     onClick={onClick}
//   >
//     <h6 className="mb-0">{title}</h6>
//   </div>
// );

// export default Card;
import React from "react";

const Card = ({ image, title, onClick }) => (
  <div
    className="custom-card shadow-sm bg-white rounded"
    style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className="card-img-top"
      style={{
        width: "100%",
        height: "120px",
        objectFit: "cover",
        borderRadius: "1rem 1rem 0 0",
        marginBottom: "1rem"
      }}
    />
    <h6 className="mb-0" style={{ marginTop: "auto" }}>{title}</h6>
  </div>
);

export default Card;