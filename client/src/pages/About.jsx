// client/src/pages/About.jsx

export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">About RePack</h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        RePack is an eco-conscious initiative focused on building a circular packaging system. Our mission is to make packaging reusable, reduce plastic waste, and reward customers for responsible behavior.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Why RePack?</h2>
        <ul className="list-disc list-inside text-gray-700 text-base">
          <li>We tackle the growing problem of packaging pollution.</li>
          <li>We partner with retailers to offer return options at scale.</li>
          <li>We reward you with GreenPoints for every return you make.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To become the leading platform enabling packaging circularity in retail and empowering consumers to make climate-positive choices.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Meet the Team</h2>
        <p className="text-gray-700">
          We're a team of developers, designers, sustainability advocates, and retail experts passionate about building a cleaner future. Together, we make RePack a reality.
        </p>
      </div>
    </div>
  );
}
