// client/src/components/RewardCard.jsx

export default function RewardCard() {
  // Dummy points, replace with props or API call later
  const totalPoints = 120;

  return (
    <div className="bg-green-100 p-6 rounded-md shadow-md text-center">
      <h3 className="text-xl font-semibold">Total GreenPoints Earned</h3>
      <p className="text-3xl font-bold text-green-700 mt-2">{totalPoints}</p>
      <p className="text-sm text-gray-500 mt-1">Earn more by returning packaging responsibly!</p>
    </div>
  );
}