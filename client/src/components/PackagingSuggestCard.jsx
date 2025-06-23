// client/src/components/PackagingSuggestCard.jsx

export default function PackagingSuggestCard({ title = 'Switch to Paper Wrap', desc = 'Paper is biodegradable and eco-friendly.', image }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={image || 'https://via.placeholder.com/150'}
        alt={title}
        className="w-full h-32 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
