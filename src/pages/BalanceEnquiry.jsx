import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";


const BalanceEnquiry = ({ goBack }) => {
  const [balanceDetails, setBalanceDetails] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    const customerid = localStorage.getItem("customerid"); // or whatever key you're using

    if (!customerid) {
      setError("Customer ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://financial-banking-878612543973.europe-west1.run.app/api/accountdetails/${customerid}`, {
        method: 'GET'
        });

      if (!response.ok) {
        throw new Error("Failed to fetch balance.");
      }

      const data = await response.json();

      const cleanBalance = parseFloat(data.balance.replace(/[^\d.-]/g, '')).toFixed(2);

      setBalanceDetails({
        accountNo: data.accountNumber,
        balance: `₹${cleanBalance}`,
      });
    } catch (error) {
      console.error("Error fetching balance:", error);
      setError("Failed to fetch balance. Please try again.");
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
        <img
          src="/logo.png"
          alt="App Logo"
          style={{ width: "90px", marginBottom: "20px" }}
        />

        <h1 className="mb-4" style={{ fontWeight: "600", color: "#1B3C53" }}>
          Balance Enquiry
        </h1>

        {loading && (
          <div>
            <div className="spinner-border text-secondary mb-3" role="status" />
            <p style={{ fontSize: "1.1rem", color: "#456882" }}>
              Fetching your account balance...
            </p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" style={{ fontSize: "1.1rem" }}>
            {error}
          </div>
        )}

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
