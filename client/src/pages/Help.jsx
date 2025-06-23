// client/src/pages/Help.jsx

export default function Help() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Help Center</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Need assistance? We're here to help. Explore the resources below or contact our support team for personalized help.
      </p>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-green-600">Returning Packaging</h2>
          <p className="text-gray-700 mt-1">
            Learn how to scan, drop off, and confirm your packaging returns using the RePack platform.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-green-600">Tracking GreenPoints</h2>
          <p className="text-gray-700 mt-1">
            Understand how reward points are calculated and where to view your balance.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-green-600">Report a Problem</h2>
          <p className="text-gray-700 mt-1">
            If you faced an issue with a return or reward, let us know at <a href="mailto:support@repack.com" className="text-green-700 underline">support@repack.com</a> and we’ll assist you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}