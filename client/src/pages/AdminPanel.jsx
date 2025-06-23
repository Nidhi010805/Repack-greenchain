// client/src/pages/AdminPanel.jsx
import AdminChart from '../components/AdminChart';

export default function AdminPanel() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        View platform analytics, user activity, and return trends here.
      </p>
      <AdminChart />
    </div>
  );
}
