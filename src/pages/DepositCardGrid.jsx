import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { FaRupeeSign } from 'react-icons/fa';
import './DepositCardGrid.css';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
const DepositCard = ({ account, balance, data, chartType = "line", cardName = "Deposit", showChart = true, depositAmount, withdrawalAmount }) => {
  return (
    <div className="deposit-card">
      <div className="deposit-heading">
        <FaRupeeSign className="rupee-icon" />
        {cardName}
      </div>
      <div className="account-info">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '20px', color: '#ccc' }}>Account</span>
          <span>{account}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
          <span style={{ fontSize: '20px', color: '#ccc' }}>Balance</span>
          <span>₹{balance.toLocaleString()}</span>
        </div>
      </div>
      {showChart ? (
        <>
          <div className="chart-label">Last 6 months</div>
          <ResponsiveContainer width="100%" height={230}>
            {chartType === "bar" ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="month" tick={{ fill: 'white' }} />
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f3e70', border: 'none', color: 'white' }}
                  labelStyle={{ color: 'white' }}
                  formatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Bar dataKey="balance" fill="#ffd166" barSize={30} />
              </BarChart>
            ) : chartType === "pie" ? (
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#FF5733' : '#33FF57'} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f3e70', border: 'none', color: 'white' }}
                  formatter={(value) => `₹${value.toLocaleString()}`}
                />
              </PieChart>
            ) : (
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
                  stroke="#ffffff"
                  strokeWidth={3}
                  dot={{ r: 4, stroke: 'white', fill: 'white' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </>
      ) : (
        <div className="transaction-boxes">
          <div className="transaction-row deposit-row">
            <div className="transaction-label">Deposit:</div>
            <div className="transaction-amount">₹{depositAmount.toLocaleString()}</div>
          </div>
          <div className="transaction-row withdrawal-row">
            <div className="transaction-label">Withdrawal:</div>
            <div className="transaction-amount">₹{withdrawalAmount.toLocaleString()}</div>
          </div>
        </div>
      )}
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
        cardName="Deposit"
      />
      <DepositCard
        account="9876543219"
        balance={32540}
        data={[
          { month: 'Oct', balance: 30000 },
          { month: 'Nov', balance: 40000 },
          { month: 'Dec', balance: 28500 },
          { month: 'Jan', balance: 31800 },
          { month: 'Feb', balance: 32000 },
          { month: 'Mar', balance: 55540 }
        ]}
        chartType="bar"
        cardName="Savings"
      />
      <DepositCard
        account="4567891230"
        balance={98500}
        data={[
          { name:'Principal', value: 80000 },
          { name:'Interest', value: 18500 }
        ]}
        chartType="pie"
        cardName="Loans"
      />
      <DepositCard
        account="1111333355"
        balance={48000}
        data={[
          { month: 'Oct', balance: 60000 },
          { month: 'Nov', balance: 45000 },
          { month: 'Dec', balance: 30000 },
          { month: 'Jan', balance: 15000 },
          { month: 'Feb', balance: 0 },
          { month: 'Mar', balance: 48000 }
        ]}
        cardName="Rewards"
        chartType="bar"
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
        chartType="line"
        cardName="Guarantor"
      />
      <DepositCard
        account="2222111100"
        balance={15000}
        showChart={false}
        depositAmount={50000}
        withdrawalAmount={2000}
        cardName="Daily Tracking"
      />
    </div>
  );
};
export default DepositCardGrid;