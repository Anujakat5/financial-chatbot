import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { FaRupeeSign } from 'react-icons/fa';
import './DepositCardGrid.css';

const DepositCard = ({ account, balance, data }) => {
  return (
    <div className="deposit-card">
      <div className="deposit-heading">
        <FaRupeeSign className="rupee-icon" />
        Deposit
      </div>

      {/* <div className="account-info">
        <div>{account}</div>
        <div>₹{balance.toLocaleString()}</div>
      </div> */}
      <div className="account-info">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '14px', color: '#ccc' }}>Account</span>
          <span>{account}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
          <span style={{ fontSize: '14px', color: '#ccc' }}>Balance</span>
          <span>₹{balance.toLocaleString()}</span>
        </div>
      </div>

      <div className="chart-label">Last 6 months</div>

      <ResponsiveContainer width="100%" height={230}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f3e70', border: 'none', color: 'white' }}
            labelStyle={{ color: 'white' }}
            formatter={(value) => `₹${value.toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#ffd166"
            strokeWidth={3}
            dot={{ r: 4, stroke: 'white', fill: 'white' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const DepositCardGrid = () => {
  return (
    <div className="deposit-card-grid">
      <DepositCard
        account="1234567890"
        balance={12540}
        data={[
          { month: 'Oct', balance: 8200 },
          { month: 'Nov', balance: 7900 },
          { month: 'Dec', balance: 8500 },
          { month: 'Jan', balance: 8100 },
          { month: 'Feb', balance: 9200 },
          { month: 'Mar', balance: 11400 }
        ]}
      />
      <DepositCard
        account="9876543210"
        balance={32540}
        data={[
          { month: 'Oct', balance: 30000 },
          { month: 'Nov', balance: 31000 },
          { month: 'Dec', balance: 31500 },
          { month: 'Jan', balance: 31800 },
          { month: 'Feb', balance: 32000 },
          { month: 'Mar', balance: 32540 }
        ]}
      />
      <DepositCard
        account="4567891230"
        balance={98500}
        data={[
          { month: 'Oct', balance: 90000 },
          { month: 'Nov', balance: 91000 },
          { month: 'Dec', balance: 93000 },
          { month: 'Jan', balance: 95000 },
          { month: 'Feb', balance: 97000 },
          { month: 'Mar', balance: 98500 }
        ]}
      />
      <DepositCard
        account="1111333355"
        balance={48000}
        data={[
          { month: 'Oct', balance: 45000 },
          { month: 'Nov', balance: 45500 },
          { month: 'Dec', balance: 46000 },
          { month: 'Jan', balance: 47000 },
          { month: 'Feb', balance: 47500 },
          { month: 'Mar', balance: 48000 }
        ]}
      />
      <DepositCard
        account="6666777788"
        balance={67500}
        data={[
          { month: 'Oct', balance: 62000 },
          { month: 'Nov', balance: 63000 },
          { month: 'Dec', balance: 64000 },
          { month: 'Jan', balance: 65500 },
          { month: 'Feb', balance: 66500 },
          { month: 'Mar', balance: 67500 }
        ]}
      />
      <DepositCard
        account="2222111100"
        balance={15000}
        data={[
          { month: 'Oct', balance: 12000 },
          { month: 'Nov', balance: 12300 },
          { month: 'Dec', balance: 12750 },
          { month: 'Jan', balance: 13000 },
          { month: 'Feb', balance: 14000 },
          { month: 'Mar', balance: 15000 }
        ]}
      />
    </div>
  );
};

export default DepositCardGrid;
