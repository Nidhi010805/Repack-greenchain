// client/src/components/AdminChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { name: 'Plastic', returns: 40 },
  { name: 'Cardboard', returns: 30 },
  { name: 'Glass', returns: 20 },
  { name: 'Metal', returns: 10 },
];

export default function AdminChart() {
  return (
    <div className="w-full h-80 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Packaging Return Stats</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="returns" fill="#34d399" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
