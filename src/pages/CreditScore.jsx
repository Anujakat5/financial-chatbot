import React, { useState } from 'react';
import CreditScoreGraph from '../components/CreditScoreGraph';

function CreditScore() {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <div className="container mt-5">
      <h2>Credit Score Evaluation</h2>

      <div className="mb-3">
        <label className="form-label">Upload Transaction File</label>
        <input type="file" accept=".xlsx,.xls,.csv" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Upload Bills</label>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="form-control" />
      </div>

      <button className="btn btn-primary" onClick={() => setShowGraph(true)}>
        Calculate Score
      </button>

      {showGraph && <CreditScoreGraph />}
    </div>
  );
}

export default CreditScore;
