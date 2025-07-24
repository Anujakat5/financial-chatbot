// // // import { FaRupeeSign } from 'react-icons/fa';
// // // import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// // // import './DepositCardGrid.css';

// // // const allData = [
// // //   [
// // //     { month: 'Feb', balance: 85000 },
// // //     { month: 'Mar', balance: 91000 },
// // //     { month: 'Apr', balance: 88000 },
// // //     { month: 'May', balance: 94000 },
// // //     { month: 'Jun', balance: 97000 },
// // //     { month: 'Jul', balance: 99000 },
// // //   ],
// // //   [
// // //     { month: 'Feb', balance: 65000 },
// // //     { month: 'Mar', balance: 71000 },
// // //     { month: 'Apr', balance: 78000 },
// // //     { month: 'May', balance: 74000 },
// // //     { month: 'Jun', balance: 81000 },
// // //     { month: 'Jul', balance: 83000 },
// // //   ],
// // //   [
// // //     { month: 'Feb', balance: 55000 },
// // //     { month: 'Mar', balance: 59000 },
// // //     { month: 'Apr', balance: 61000 },
// // //     { month: 'May', balance: 65000 },
// // //     { month: 'Jun', balance: 67000 },
// // //     { month: 'Jul', balance: 69000 },
// // //   ],
// // //   [
// // //     { month: 'Feb', balance: 90000 },
// // //     { month: 'Mar', balance: 92000 },
// // //     { month: 'Apr', balance: 96000 },
// // //     { month: 'May', balance: 97000 },
// // //     { month: 'Jun', balance: 98500 },
// // //     { month: 'Jul', balance: 100000 },
// // //   ],
// // //   [
// // //     { month: 'Feb', balance: 25000 },
// // //     { month: 'Mar', balance: 30000 },
// // //     { month: 'Apr', balance: 32000 },
// // //     { month: 'May', balance: 35000 },
// // //     { month: 'Jun', balance: 36000 },
// // //     { month: 'Jul', balance: 37000 },
// // //   ],
// // //   [
// // //     { month: 'Feb', balance: 45000 },
// // //     { month: 'Mar', balance: 47000 },
// // //     { month: 'Apr', balance: 50000 },
// // //     { month: 'May', balance: 52000 },
// // //     { month: 'Jun', balance: 55000 },
// // //     { month: 'Jul', balance: 57000 },
// // //   ]
// // // ];

// // // const DepositCard = ({ data, index }) => {
// // //   const accountNum = `XXXX-${index + 1234}`;
// // //   const currentBalance = `₹${data[data.length - 1].balance.toLocaleString()}`;

// // //   return (
// // //     <div className="deposit-card">
// // //       {/* Heading */}
// // //       <div className="deposit-heading">
// // //         <FaRupeeSign className="rupee-icon" />
// // //         Deposit
// // //       </div>

// // //       <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px' }}>
// // //         <span>XXXX-4567</span>
// // //         <span>₹99,000</span>
// // //       </div>

// // //       <div style={{ margin: '12px 0 6px', fontWeight: 500, color: 'white' }}>Last 6 months</div>

// // //       <ResponsiveContainer width="100%" height={250}>
// // //         <LineChart data={data}>
// // //           <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
// // //           <XAxis dataKey="month" stroke="white" tick={{ fill: 'white' }} />
// // //           <YAxis stroke="white" tick={{ fill: 'white' }} />
// // //           <Tooltip
// // //             contentStyle={{ backgroundColor: '#3578bd', border: 'none', color: 'white' }}
// // //             labelStyle={{ color: 'white' }}
// // //             formatter={(value) => `₹${value.toLocaleString()}`}
// // //           />
// // //           <Line
// // //             type="monotone"
// // //             dataKey="balance"
// // //             stroke="white"
// // //             strokeWidth={4}
// // //             dot={{ r: 4, stroke: 'white', fill: 'white' }}
// // //             activeDot={{ r: 6 }}
// // //           />
// // //         </LineChart>
// // //       </ResponsiveContainer>

// // //     </div>
// // //   );
// // // };

// // // const DepositCardGrid = () => {
// // //   return (
// // //     <div className="container py-4">
// // //       <div className="row g-4">
// // //         {allData.map((data, i) => (
// // //           <div className="col-12 col-sm-6 col-lg-4" key={i}>
// // //             <DepositCard data={data} index={i} />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DepositCardGrid;
// // // DepositCardGrid.jsx
// // import { FaRupeeSign } from 'react-icons/fa';
// // import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// // import './DepositCardGrid.css';

// // const DepositCard1 = () => {
// //   const data = [
// //     { month: 'Oct', balance: 8500 },
// //     { month: 'Nov', balance: 8000 },
// //     { month: 'Dec', balance: 8700 },
// //     { month: 'Jan', balance: 8600 },
// //     { month: 'Feb', balance: 9600 },
// //     { month: 'Mar', balance: 12540 },
// //   ];
// //   return (
// //     <div className="deposit-card">
// //       <div className="deposit-heading">
// //         <FaRupeeSign className="rupee-icon" />
// //         Deposit
// //       </div>
// //       <div className="account-details">
// //         <span>1234567890</span>
// //         <span>₹12,540.00</span>
// //       </div>
// //       <div className="chart-label">Last 6 months</div>
// //       <ResponsiveContainer width="100%" height={200}>
// //         <LineChart data={data}>
// //           <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
// //           <XAxis dataKey="month" stroke="white" tick={{ fill: 'white', fontSize: 12 }} />
// //           <YAxis stroke="white" tick={{ fill: 'white', fontSize: 12 }} domain={[8000, 13000]} />
// //           <Tooltip
// //             contentStyle={{ backgroundColor: '#3578bd', border: 'none', color: 'white' }}
// //             labelStyle={{ color: 'white' }}
// //             formatter={(value) => `₹${value.toLocaleString()}`}
// //           />
// //           <Line
// //             type="monotone"
// //             dataKey="balance"
// //             stroke="white"
// //             strokeWidth={4}
// //             dot={{ r: 4, stroke: 'white', fill: 'white' }}
// //             activeDot={{ r: 6 }}
// //           />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     </div>
// //   );
// // };

// // const DepositCardGrid = () => {
// //   return (
// //     <div className="deposit-card-grid">
// //       <DepositCard1 />
// //       <DepositCard1 />
// //       <DepositCard1 />
// //       <DepositCard1 />
// //       <DepositCard1 />
// //       <DepositCard1 />
// //     </div>
// //   );
// // };

// // // export default DepositCardGrid;
// // import React from 'react';
// // import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
// // import { FaRupeeSign } from 'react-icons/fa';
// // import './DepositCardGrid.css';

// // const DepositCard = ({ account, balance, data }) => (
// //   <div className="deposit-card">
// //     {/* Header */}
// //     <div className="deposit-heading">
// //       <FaRupeeSign className="rupee-icon" />
// //       Deposit
// //     </div>

// //     {/* Account Info */}
// //     {/* <div className="account-info">
// //       <div className="info-label">Account</div>
// //       <div className="info-value">{account}</div>
// //       <div className="info-label right">Balance</div>
// //       <div className="info-value right">₹{balance.toLocaleString()}</div>
// //     </div> */}
// //     <div className="account-info">
// //       <span>1234567890</span>
// //       <span>₹12,540.00</span>
// //     </div>


// //     {/* Label */}
// //     <div className="chart-label">Last 6 months</div>

// //     {/* Line Chart */}
// //     <ResponsiveContainer width="100%" height={220}>
// //       <LineChart data={data}>
// //         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
// //         <XAxis dataKey="month" tick={{ fill: 'white' }} />
// //         <YAxis tick={{ fill: 'white' }} />
// //         <Tooltip
// //           contentStyle={{ backgroundColor: '#3578bd', border: 'none', color: 'white' }}
// //           labelStyle={{ color: 'white' }}
// //           formatter={(value) => `₹${value.toLocaleString()}`}
// //         />
// //         <Line
// //           type="monotone"
// //           dataKey="balance"
// //           stroke="#ffffff"
// //           strokeWidth={3}
// //           dot={{ r: 4, fill: 'white' }}
// //           activeDot={{ r: 6 }}
// //         />
// //       </LineChart>
// //     </ResponsiveContainer>
// //   </div>
// // );

// // const DepositCardGrid = () => {
// //   return (
// //     <div className="deposit-card-grid">
// //       <DepositCard
// //         account="1234567890"
// //         balance={12540}
// //         data={[
// //           { month: 'Oct', balance: 8800 },
// //           { month: 'Nov', balance: 8600 },
// //           { month: 'Dec', balance: 9100 },
// //           { month: 'Jan', balance: 8900 },
// //           { month: 'Feb', balance: 10400 },
// //           { month: 'Mar', balance: 11540 },
// //         ]}
// //       />
// //       <DepositCard
// //         account="9845123456"
// //         balance={9800}
// //         data={[
// //           { month: 'Oct', balance: 7600 },
// //           { month: 'Nov', balance: 8200 },
// //           { month: 'Dec', balance: 8600 },
// //           { month: 'Jan', balance: 9200 },
// //           { month: 'Feb', balance: 9500 },
// //           { month: 'Mar', balance: 9800 },
// //         ]}
// //       />
// //       <DepositCard
// //         account="4578457845"
// //         balance={11200}
// //         data={[
// //           { month: 'Oct', balance: 8200 },
// //           { month: 'Nov', balance: 8400 },
// //           { month: 'Dec', balance: 8900 },
// //           { month: 'Jan', balance: 9700 },
// //           { month: 'Feb', balance: 10200 },
// //           { month: 'Mar', balance: 11200 },
// //         ]}
// //       />
// //       <DepositCard
// //         account="5566123478"
// //         balance={7400}
// //         data={[
// //           { month: 'Oct', balance: 7200 },
// //           { month: 'Nov', balance: 7000 },
// //           { month: 'Dec', balance: 7100 },
// //           { month: 'Jan', balance: 7300 },
// //           { month: 'Feb', balance: 7400 },
// //           { month: 'Mar', balance: 7400 },
// //         ]}
// //       />
// //       <DepositCard
// //         account="6677788899"
// //         balance={8800}
// //         data={[
// //           { month: 'Oct', balance: 7800 },
// //           { month: 'Nov', balance: 8200 },
// //           { month: 'Dec', balance: 8500 },
// //           { month: 'Jan', balance: 8700 },
// //           { month: 'Feb', balance: 8800 },
// //           { month: 'Mar', balance: 8800 },
// //         ]}
// //       />
// //       <DepositCard
// //         account="9999888877"
// //         balance={10500}
// //         data={[
// //           { month: 'Oct', balance: 8800 },
// //           { month: 'Nov', balance: 9100 },
// //           { month: 'Dec', balance: 9500 },
// //           { month: 'Jan', balance: 9900 },
// //           { month: 'Feb', balance: 10200 },
// //           { month: 'Mar', balance: 10500 },
// //         ]}
// //       />
// //     </div>
// //   );
// // };

// // export default DepositCardGrid;
// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from 'recharts';
// import { FaRupeeSign } from 'react-icons/fa';
// import './DepositCardGrid.css';

// const card1Data = [
//   { month: 'Oct', balance: 8200 },
//   { month: 'Nov', balance: 8100 },
//   { month: 'Dec', balance: 8900 },
//   { month: 'Jan', balance: 8800 },
//   { month: 'Feb', balance: 10500 },
//   { month: 'Mar', balance: 12000 },
// ];

// const card2Data = [
//   { month: 'Oct', balance: 7500 },
//   { month: 'Nov', balance: 8400 },
//   { month: 'Dec', balance: 9200 },
//   { month: 'Jan', balance: 9700 },
//   { month: 'Feb', balance: 10200 },
//   { month: 'Mar', balance: 10800 },
// ];

// const card3Data = [
//   { month: 'Oct', balance: 8800 },
//   { month: 'Nov', balance: 8900 },
//   { month: 'Dec', balance: 9300 },
//   { month: 'Jan', balance: 9600 },
//   { month: 'Feb', balance: 10300 },
//   { month: 'Mar', balance: 11400 },
// ];

// const card4Data = [
//   { month: 'Oct', balance: 9500 },
//   { month: 'Nov', balance: 9600 },
//   { month: 'Dec', balance: 9800 },
//   { month: 'Jan', balance: 10100 },
//   { month: 'Feb', balance: 10800 },
//   { month: 'Mar', balance: 11500 },
// ];

// const card5Data = [
//   { month: 'Oct', balance: 6500 },
//   { month: 'Nov', balance: 7000 },
//   { month: 'Dec', balance: 7300 },
//   { month: 'Jan', balance: 7600 },
//   { month: 'Feb', balance: 8100 },
//   { month: 'Mar', balance: 8700 },
// ];

// const card6Data = [
//   { month: 'Oct', balance: 10000 },
//   { month: 'Nov', balance: 10500 },
//   { month: 'Dec', balance: 10700 },
//   { month: 'Jan', balance: 11000 },
//   { month: 'Feb', balance: 11400 },
//   { month: 'Mar', balance: 11900 },
// ];

// const DepositCard = ({ account, balance, data }) => (
//   <div className="deposit-card">
//     {/* Heading */}
//     <div className="deposit-heading">
//       <FaRupeeSign className="rupee-icon" />
//       Deposit
//     </div>

//     {/* Account Info */}
//     {/* <div className="account-details">
//       <span>{account}</span>
//       <span>{balance}</span>
//     </div> */}
//     <div className="account-info">
//       <div className="info-label">Account</div>
//       <div className="info-value">{account}</div>
//       <div className="info-label right">Balance</div>
//       <div className="info-value right">₹{balance.toLocaleString()}</div>
//     </div>

//     <div className="chart-label">Last 6 months</div>

//     <ResponsiveContainer width="100%" height={250}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
//         <XAxis dataKey="month" stroke="white" tick={{ fill: 'white' }} />
//         <YAxis stroke="white" tick={{ fill: 'white' }} />
//         <Tooltip
//           contentStyle={{ backgroundColor: '#3578bd', border: 'none', color: 'white' }}
//           labelStyle={{ color: 'white' }}
//           formatter={(value) => `₹${value.toLocaleString()}`}
//         />
//         <Line
//           type="monotone"
//           dataKey="balance"
//           stroke="#ffc658" // customize this color as needed
//           strokeWidth={3}
//           dot={{ r: 4, stroke: 'white', fill: 'white' }}
//           activeDot={{ r: 6 }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// const DepositCardGrid = () => {
//   return (
//     <div className="deposit-card-grid">
//       <DepositCard account="1234567890" balance="₹12,540.00" data={card1Data} />
//       <DepositCard account="1234567891" balance="₹10,800.00" data={card2Data} />
//       <DepositCard account="1234567892" balance="₹11,400.00" data={card3Data} />
//       <DepositCard account="1234567893" balance="₹11,500.00" data={card4Data} />
//       <DepositCard account="1234567894" balance="₹8,700.00" data={card5Data} />
//       <DepositCard account="1234567895" balance="₹11,900.00" data={card6Data} />
//     </div>
//   );
// };

// export default DepositCardGrid;
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

      <div className="account-info">
        <div>{account}</div>
        <div>₹{balance.toLocaleString()}</div>
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
