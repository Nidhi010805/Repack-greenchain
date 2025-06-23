// client/src/pages/Blog.jsx

export default function Blog() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
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
    </div>
  );
}
