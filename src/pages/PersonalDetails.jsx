import React from "react";
import dummyUser from "../data/dummyUser";

const PersonalDetails = () => {
  return (
    <div className="personal-details container py-4">
      <h2 className="mb-4 text-center">Personal Details</h2>

      <div className="card shadow-sm p-4 rounded border-0 personal-details-card">
        <div className="text-center mb-4">
          <img
            src={dummyUser.profilePic}
            alt="Profile"
            className="rounded-circle shadow"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <h4 className="mt-3 mb-0">{dummyUser.name}</h4>
          <small className="text-muted">{dummyUser.email}</small>
        </div>

        <div className="row mt-4">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="info-item mb-3">
              <strong>Phone:</strong> <span>{dummyUser.phone}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Alternate Phone:</strong> <span>{dummyUser.altPhone}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Date of Birth:</strong> <span>{dummyUser.dob}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Gender:</strong> <span>{dummyUser.gender}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Nationality:</strong> <span>{dummyUser.nationality}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="info-item mb-3">
              <strong>Account Number:</strong> <span>{dummyUser.accountNumber}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Aadhaar Number:</strong> <span>{dummyUser.aadhaar}</span>
            </div>
            <div className="info-item mb-3">
              <strong>PAN Number:</strong> <span>{dummyUser.pan}</span>
            </div>
            <div className="info-item mb-3">
              <strong>Address:</strong> <span>{dummyUser.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
