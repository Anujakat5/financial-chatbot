// AlertBar.jsx
import React from "react";

const AlertBar = () => {
  return (
    <div className="screen-alert"
      style={{
        backgroundColor: "#fff",
        color: "red",
        fontWeight: "bold",
        padding: "6px 10px",
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 999
      }}
    >
      <marquee scrollamount="5">
          ⚠️ Never share your ATM PIN, OTP, or internet banking credentials with anyone. |
          📢 Income Tax/Corporate Tax payments can now be made via all Bank Debit/Credit Cards. |
          🔐 Secure your account: Always log out after use and avoid using public computers. |
          🕒 Reminder: Submit PAN & Aadhaar linkage before the due date to avoid account restrictions. |
          📄 e-Statements for your savings/current accounts are now available monthly. |
          💡 Tip: Register for SMS alerts to stay informed about all transactions. |
          🧾 KYC Update: Ensure your KYC is up to date to continue enjoying uninterrupted services.
      </marquee>
    </div>
  );
};

export default AlertBar;
