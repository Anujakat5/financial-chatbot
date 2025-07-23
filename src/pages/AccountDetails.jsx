import React from "react";

const AccountDetails = () => {
  const dummyAccount = {
    accountHolder: "Anuja Katruwar",
    accountNumber: "1234 5678 9012",
    accountType: "Savings",
    branch: "Pune MG Road",
    ifscCode: "BANK0001234",
    micrCode: "123456789",
    openingDate: "01 Jan 2020",
    status: "Active",

    balance: {
      currentBalance: "₹55,000",
      availableBalance: "₹53,200",
      lastTransactionDate: "20 July 2025",
    },
  };

  return (
    <div className="account-details p-4">
      <h2 className="mb-4">Account Details</h2>

      {/* Section 1: Account Summary */}
      <div className="section mb-5">
        <h5 className="mb-3">Account Summary</h5>
        <div className="info-item"><strong>Account Holder:</strong> <span>{dummyAccount.accountHolder}</span></div>
        <div className="info-item"><strong>Account Number:</strong> <span>{dummyAccount.accountNumber}</span></div>
        <div className="info-item"><strong>Account Type:</strong> <span>{dummyAccount.accountType}</span></div>
        <div className="info-item"><strong>Status:</strong> <span>{dummyAccount.status}</span></div>
      </div>

      {/* Section 2: Branch & Other Info */}
      <div className="section mb-5">
        <h5 className="mb-3">Banking Information</h5>
        <div className="info-item"><strong>Branch:</strong> <span>{dummyAccount.branch}</span></div>
        <div className="info-item"><strong>IFSC Code:</strong> <span>{dummyAccount.ifscCode}</span></div>
        <div className="info-item"><strong>MICR Code:</strong> <span>{dummyAccount.micrCode}</span></div>
        <div className="info-item"><strong>Opening Date:</strong> <span>{dummyAccount.openingDate}</span></div>
      </div>

      {/* Section 3: Balance Info
      <div className="section mb-4">
        <h5 className="mb-3">Balance Details</h5>
        <div className="info-item"><strong>Current Balance:</strong> <span>{dummyAccount.balance.currentBalance}</span></div>
        <div className="info-item"><strong>Available Balance:</strong> <span>{dummyAccount.balance.availableBalance}</span></div>
        <div className="info-item"><strong>Last Transaction Date:</strong> <span>{dummyAccount.balance.lastTransactionDate}</span></div>
      </div> */}
    </div>
  );
};

export default AccountDetails;
