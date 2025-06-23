export default function RetailerDashboard() {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">Retailer Profile</h1>

      {/* Retailer Info */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="font-semibold text-lg mb-2">Business Details</h2>
        <p><strong>Business Name:</strong> EcoMart Pvt. Ltd.</p>
        <p><strong>Email:</strong> contact@ecomart.com</p>
        <p><strong>Phone:</strong> 9123456789</p>
      </div>

      {/* Inventory */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="font-semibold text-lg mb-2">Manage Inventory</h2>
        <ul className="list-disc ml-6">
          <li>Eco Packaging Boxes - 500 units</li>
          <li>Reusable Bags - 200 units</li>
        </ul>
      </div>

      {/* Orders */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="font-semibold text-lg mb-2">Order History</h2>
        <ul className="list-disc ml-6">
          <li>Order #123 - Shipped</li>
          <li>Order #124 - Pending</li>
        </ul>
      </div>

      {/* Returns */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="font-semibold text-lg mb-2">Return Requests</h2>
        <ul className="list-disc ml-6">
          <li>Packaging Return - Processing</li>
        </ul>
      </div>
    </div>
  );
}
