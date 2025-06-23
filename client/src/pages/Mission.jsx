// client/src/pages/Mission.jsx

export default function Mission() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Our Mission</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        At RePack, our mission is to revolutionize packaging through circular, sustainable practices that benefit both the planet and people. We envision a future where packaging is not wasted after one use, but returned, reused, and rewarded.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Commitments</h2>
        <ul className="list-disc list-inside text-gray-700 text-base">
          <li>Creating a frictionless return system for packaging.</li>
          <li>Rewarding eco-conscious behavior with GreenPoints.</li>
          <li>Educating consumers about the impact of packaging waste.</li>
          <li>Collaborating with retailers and logistics for scale.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Impact We Aim For</h2>
        <p className="text-gray-700">
          Through RePack, we aim to reduce single-use plastic by 40%, divert tons of waste from landfills, and drive consumer behavior toward a reuse-first mindset.
        </p>
      </div>
    </div>
  );
}