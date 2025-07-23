import React from "react";
import dummyUser from "../data/dummyUser";

const PersonalDetails = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Personal Details</h2>

      <div className="card shadow-sm p-4">
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <img
              src={dummyUser.profilePic}
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-sm-6 mb-3">
                <strong>Full Name:</strong> <br /> {dummyUser.name}
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Email:</strong> <br /> {dummyUser.email}
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Phone:</strong> <br /> {dummyUser.phone}
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Account Number:</strong> <br /> {dummyUser.accountNumber}
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Date of Birth:</strong> <br /> {dummyUser.dob}
              </div>
              <div className="col-sm-6 mb-3">
                <strong>Gender:</strong> <br /> {dummyUser.gender}
              </div>
              <div className="col-12 mb-3">
                <strong>Address:</strong> <br /> {dummyUser.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
