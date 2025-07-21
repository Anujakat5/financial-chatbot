import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const dummyScoreData = [
  { name: 'Jan', score: 610 },
  { name: 'Feb', score: 620 },
  { name: 'Mar', score: 640 },
  { name: 'Apr', score: 660 },
  { name: 'May', score: 680 },
  { name: 'Jun', score: 700 },
];

function CreditScoreGraph() {
  return (
    <div className="mt-5">
      <h4>Estimated Credit Score Progress</h4>
      <LineChart width={600} height={300} data={dummyScoreData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default CreditScoreGraph;
