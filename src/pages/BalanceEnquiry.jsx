import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const BalanceEnquiry = ({ goBack }) => {
  const [balanceDetails, setBalanceDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const accountNo = "1234567890";

  const fetchBalance = async () => {
    setLoading(true);
    setError("");
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setBalanceDetails({
        accountNo,
        balance: "₹12,345.67",
      });
    } catch (err) {
      setError("Failed to fetch balance.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "calc(100vh - 70px)",
        background: "#F9F3EF",
        padding: "2rem",
      }}
    >
      <div
        className="text-center p-5 shadow-lg"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "600px",
          border: "2px solid #D2C1B6",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="App Logo"
          style={{ width: "90px", marginBottom: "20px" }}
        />

        {/* Title */}
        <h1 className="mb-4" style={{ fontWeight: "600", color: "#1B3C53" }}>
          Balance Enquiry
        </h1>

        {/* Loading */}
        {loading && (
          <div>
            <div className="spinner-border text-secondary mb-3" role="status" />
            <p style={{ fontSize: "1.1rem", color: "#456882" }}>
              Fetching your account balance...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-danger" style={{ fontSize: "1.1rem" }}>
            {error}
          </div>
        )}

        {/* Balance Details */}
        {balanceDetails && !loading && (
          <div
            className="p-4 my-4"
            style={{
              backgroundColor: "#F9F3EF",
              borderRadius: "15px",
              border: "1px solid #D2C1B6",
            }}
          >
            <p className="mb-2" style={{ fontWeight: "bold", color: "#456882" }}>
              Account No:
            </p>
            <h4 className="mb-4" style={{ color: "#1B3C53" }}>
              {balanceDetails.accountNo}
            </h4>
            <p className="mb-2" style={{ fontWeight: "bold", color: "#456882" }}>
              Available Balance:
            </p>
            <h2 className="text-success">{balanceDetails.balance}</h2>
          </div>
        )}

        {/* Back Button */}
        <button
          onClick={goBack}
          className="btn"
          style={{
            backgroundColor: "#456882",
            color: "#ffffff",
            padding: "0.6rem 2rem",
            fontSize: "1rem",
            borderRadius: "10px",
            transition: "all 0.3s ease-in-out",
            border: "none",
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default BalanceEnquiry;
