// client/src/pages/Blog.jsx

export default function Blog() {
  return (
    /*<div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">RePack Blog</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Discover stories, tips, and innovations from the RePack ecosystem. Stay informed and inspired by the impact our community is making every day.
      </p>

      <div className="mt-10 space-y-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-2xl font-semibold text-green-600">5 Creative Ways to Reuse Packaging at Home</h2>
          <p className="text-gray-600 text-sm">June 2025 • by Team RePack</p>
          <p className="mt-2 text-gray-700">Learn how simple packaging materials can be turned into planters, organizers, or art projects in your home.</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-2xl font-semibold text-green-600">Behind the Scenes: Building GreenChain</h2>
          <p className="text-gray-600 text-sm">May 2025 • by Nidhi D.</p>
          <p className="mt-2 text-gray-700">Explore how the idea of RePack x GreenChain came to life during Walmart Sparkathon and what we learned along the way.</p>
        </div>
      </div>
    </div>*/




  <div className="p-6 max-w-3xl mx-auto">
  <h1 className="text-4xl font-bold text-green-700 mb-6">EcoLoop Blog</h1>

  <p className="text-gray-700 text-lg leading-relaxed">
    Discover stories, tips, and innovations from the EcoLoop ecosystem. Stay informed and inspired by the impact our community is making every day.
  </p>

  <div className="mt-10 space-y-6 border-l-2 border-green-300 pl-4">
    {/* Blog 1 */}
    <div>
      <p className="text-sm text-gray-500">June 2025 • <span className="font-medium">Team EcoLoop</span></p>
      <p className="text-green-700 font-semibold">5 Creative Ways to Reuse Packaging at Home</p>
      <p className="text-gray-700">Learn how simple packaging materials can be turned into planters, organizers, or art projects in your home.</p>
    </div>

    {/* Blog 2 */}
    <div>
      <p className="text-sm text-gray-500">May 2025 • <span className="font-medium">Nidhi D.</span></p>
      <p className="text-green-700 font-semibold">Behind the Scenes: Building EcoLoop</p>
      <p className="text-gray-700">Explore how the idea of EcoLoop came to life during Walmart Sparkathon and what we learned along the way.</p>
    </div>

    {/* Blog 3 */}
    <div>
      <p className="text-sm text-gray-500">April 2025 • <span className="font-medium">Priya S.</span></p>
      <p className="text-green-700 font-semibold">How Retailers Can Predict Demand Using Data</p>
      <p className="text-gray-700">A look into how smart analytics and purchase trends help retailers stock the right products and reduce waste.</p>
    </div>

    {/* Blog 4 */}
    <div>
      <p className="text-sm text-gray-500">March 2025 • <span className="font-medium">Team EcoLoop</span></p>
      <p className="text-green-700 font-semibold">User Spotlight: Earning Rewards, One Return at a Time</p>
      <p className="text-gray-700">Meet users making an eco-impact by returning packaging materials and earning Green Points for real-world rewards.</p>
    </div>

    {/* Blog 5 */}
    <div>
      <p className="text-sm text-gray-500">February 2025 • <span className="font-medium">Aarav K.</span></p>
      <p className="text-green-700 font-semibold">10 Tips for Making Your Deliveries Greener</p>
      <p className="text-gray-700">From optimized routing to reusable containers, here's how delivery systems can reduce their carbon footprint.</p>
    </div>
  </div>
 </div>
  );
}
